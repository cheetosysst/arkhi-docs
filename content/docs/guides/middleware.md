# Middleware

Arkhi Framework 在 Server 使用了 ExpressJS 作為 Web 框架，在此基礎上，我們可以對 Arkhi 的 Router 插入 Middleware來進行資料處理或管理等。

要使用 Middleware 我們需要使用以下指令將其匯入：
```tsx
import { injectMiddleware } from "arkhi/server";
```
`injectMiddleware`接收兩個參數，第一個為 Route 的路徑， 第二個為要使用的 Middleware 的 API。 `injectMiddleware` 會再判斷路徑正確後，將其 Middleware 加入欲使用的列表中，並在 `startServer` 中經由 `applyMiddleware` 進行調用，因此在調用完 `injectMiddleware` 應確保有使用 `startServer` ，方能正確運行。



```tsx
export function injectMiddleware(
	arg1: string | RequestHandler,
	middleware?: RequestHandler
) {
	if (typeof arg1 === "string") {
		customMiddlewares.push([arg1, middleware!]);
		return;
	}
	customMiddlewares.push(arg1);
}
```

## 範例
在下面的範例中，我們調用了 tRPC 的 Middleware 來確保後端的型別安全問題

```tsx
//server.tsx
import { injectMiddleware, startServer } from "arkhi/server";

injectMiddleware(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: appRouters,
		createContext,
	})
);

startServer();
```

其他更詳細關於 Middleware 的使用方法請參考 ExpressJS (?

