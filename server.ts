import { injectMiddleware, startServer } from "arkhi/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouters } from "./api/index.js";
import { createContext } from "./api/context.js";
import { injectMDXPlugins } from "arkhi/plugins";
import remarkGfm from "remark-gfm";
import addClass from "rehype-class-names";
import rehypeHighlight from "rehype-highlight";

injectMDXPlugins("remark", [remarkGfm]);
injectMDXPlugins("rehype", [
	[
		addClass,
		{
			h1: "md-hd md-h1",
			h2: "md-hd md-h2",
			h3: "md-hd md-h3",
			h4: "md-hd md-h4",
			h5: "md-hd md-h5",
			p: "md-p",
			ul: "md-ul",
			ol: "md-ol",
			pre: "md-pre",
			div: "md-div",
			span: "md-span",
			a: "md-a",
			code: "language-js",
		},
	],
	// @ts-ignores
	rehypeHighlight,
]);

injectMiddleware(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: appRouters,
		createContext,
	}),
);

startServer();
