import { Head } from "arkhi/client";
import Layout from "../../layout";
import Article from "#/content/docs/start/getting-started.md";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	return (
		<Layout>
			<Head>
				<title>Getting started - Arkhi</title>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
			</Head>
			<Article />
		</Layout>
	);
}
