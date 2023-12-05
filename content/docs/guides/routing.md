# Client Routing

Arkhi 採取全面的 Client Routing 來進行同源的頁面切換，因此在切換時並不會重新載入頁面，以此提升使用者的切換體驗。


主要運作流程由下面的內容更新函數 `updatePageContext` 以及 `Link` 元件實現。

在 Arkhi 搜尋島嶼並重建時，會將原有的 Anchor `<a>` 標籤 用 `<Link>` 進行替換，以覆蓋掉原始 `<a>` 所包含的切換頁面行為。 `Link` 被點擊時將會透過 `go` 函數來調用 `updatePageContext`，並根據傳遞的 path 或 url 透過 fetch 從 Server 端取得渲染完成的對應頁面內容。 並在解析過後將其與現有顯示頁面的 body 內容進行替換。

```tsx
private async updatePageContext({
		href,
		mode,
		data,
	}: {
		href: string;
		mode: string;
		data?: {};
	}): Promise<boolean> {
		const path = this.getPath(href);

		try {
			const response = await fetch(path);
			const htmlString = await response.text();

			if (mode === "go") {
				window.history.pushState(
					{ prev: this.getPath(window.location.href) },
					"",
					path
				);
			}

			const parser = new DOMParser();
			const html = parser.parseFromString(htmlString, "text/html");
			const PrefetchSettingJson =
				html
					.getElementById("prefetch-setting")
					?.getAttribute("data-setting") || "";

			var g = document.createElement("script");
			var s = document.getElementsByTagName("script")[0];
			g.text =
				html.body.getElementsByTagName("script")[0].textContent || "";
			s.parentNode?.insertBefore(g, s);

			const PrefetchSetting = JSON.parse(PrefetchSettingJson);
			PrefetchSetting && this.setPagePrefetchRule(path, PrefetchSetting);

			document.body = html.body;

			this.render();
			return true;
		} catch (error: any) {
			console.error("Fetch Error:", error.message);
			return false;
		}
	}
...


...
const Link_ = ({
	children,
	className,
	href,
	...props
}: PropsWithChildren & { className?: string; href: string }) => {
	const clientRouter =
		typeof window === "undefined" ? null : window.clientRouter;
	const pageSetting =
		clientRouter?.pageSettingMap.get(
			clientRouter.getPath(window.location.href)
		) || clientRouter?.setting;
	const isSettingHover = pageSetting?.mode === "hover";

	const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		const target = event.currentTarget;
		clientRouter && clientRouter.go(target.getAttribute("href") || "");
	};

	const handleMouseOver = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		const target = event.currentTarget;
		clientRouter && clientRouter.prefetchHover(target);
	};

	return (
		<a
			onClick={clientRouter ? handleClick : undefined}
			onMouseOver={isSettingHover ? handleMouseOver : undefined}
			className={className ?? ""}
			href={href}
			data-link
			{...props}
		>
			{children}
		</a>
	);
};
```

## 範例
`ClientRouter` 對外主要提供 `go`, `back`, `forward`, `<Link>` 等功能，而 `ClientRouter` 的實體只應該在 `your_project\renderer\_default.page.client.tsx` 中被建立。

#### `go()`
**跳轉到輸入的路徑**
```tsx
public go(path: string): Promise<boolean> {
	path = this.getPath(path);
	return this.updatePageContext({ href: path, mode: "go" });
}

//example
if(....){
	window.clientRouter.go('/path_you_want_to_go');
}
```


#### `back()`
**跳轉回到上一頁面**
```tsx
public back(): void {
	window.history.back();
}
//example
if(....){
	window.clientRouter.back();
}
```

#### `forward()`
**跳轉前往下一個頁面**
```tsx
public forward(): void {
	window.history.();
}
//example
if(....){
	window.clientRouter.forward();
}
```

#### `<Link>`
雖然 Arkhi 搜尋島嶼並重建時，會主動將原有的 Anchor `<a>` 標籤 用 `<Link>` 進行替換，但 `<Link>` 也可以直接匯入後使用。
```tsx
import { Link } from "#/arkhi/client";
export { Page };

function Page() {
	return (
		<>
			<Link href="/link_you_want_to_go">Back To Home</Link>
		</>
	);
}
```
