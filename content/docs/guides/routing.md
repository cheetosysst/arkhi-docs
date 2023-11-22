# Client Routing

Arkhi 採取全面的 Client Routing 來進行同源的頁面切換，因此在切換時並不會重新載入頁面，以此提升使用者的切換體驗。


其主要運作流程由下面的內容更新函數 `updatePageContext` 以及 `Link` 元件實現。 在 Arkhi 搜尋島嶼並重建時，會將原有的 Anchor `<a>` 標籤 用 `<Link>` 進行替換，以覆蓋掉原始 `<a>` 所包含切換頁面的行為。 `Link` 被點擊時將會透過 `go` 函數來調用 `updatePageContext`，並根據傳遞的 path 或 url 透過 fetch 從 Server 端取得渲染完成的對應頁面內容。 並在解析過後將其與現有顯示頁面的 body 內容進行替換。

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

	private onPop(event: PopStateEvent): void {
		this.updatePageContext({
			href: this.getPath(window.location.href),
			mode: "back",
		});
	}

	public go(path: string): Promise<boolean> {
		path = this.getPath(path);
		return this.updatePageContext({ href: path, mode: "go" });
	}

	public back(): void {
		window.history.back();
	}

	public forward(): void {
		window.history.forward();
	}