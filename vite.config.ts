import react from "@vitejs/plugin-react";
import ssr from "vike/plugin";
import { arkhiPlugin } from "arkhi/plugins";
import { UserConfig } from "vite";
import { injectMDXPlugins } from "arkhi/plugins";
import rehypeHighlight from "rehype-highlight";
import addClass from "rehype-class-names";

const markdown = () => {
	return {
		name: "markdown-configs",
		enforce: "pre",
		config: () => {
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
						blockquote: "md-bq",
					},
				],
				// @ts-ignores
				rehypeHighlight,
			]);
		},
	};
};

const config: UserConfig = {
	plugins: [markdown(), react(), ssr(), arkhiPlugin()],
	resolve: {
		alias: [
			{
				find: "#",
				replacement: __dirname,
			},
		],
	},
};

export default config;
