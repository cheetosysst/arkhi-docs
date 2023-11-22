# Middleware

Arkhi Framework 在 Server 使用了 ExpressJS 作為 Server 啟動 Vite Dev Server 或是 Prod 下負責傳遞網頁資料。在 `server.ts` 檔案中，我們可以在啟動 Server 前注入 Express 的 Middleware。

## 使用方式

要使用 Middleware，我們提供以下 API

```tsx
import { injectMiddleware } from "arkhi/server";
```

## 指定路徑下的 Middleware

以 tRPC 的 Express Middleware 為例，需要將 `/trpc` 路徑之下所有的請求轉發給 tRPC 處理。

```tsx
// server.ts
import { injectMiddleware, startServer } from "arkhi/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouters } from "./api/index.js";
import { createContext } from "./api/context.js";

injectMiddleware(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: appRouters,
		createContext,
	}),
);

startServer();
```

本範例可以在 `create-arkhi` 生成的模板中找到。

## 未指定路徑

舉例來說，Express.js 的 cors 插件。

```ts
import cors from "cors";

injectMiddleware(cors());
```

可以直接將該插件作為唯一的參數使用。