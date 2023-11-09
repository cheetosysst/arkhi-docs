import { Head } from "arkhi/client";
import Layout from "../../layout";
import Article from "#/content/docs/basic/layout.md";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	return (
		<Layout>
			<Head>
				<title>Index Page - Arkhi</title>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
			</Head>
			<div className="text-justify w-full">
				<Article />
			</div>
		</Layout>
	);
}
