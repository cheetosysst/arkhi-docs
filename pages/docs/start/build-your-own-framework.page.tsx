import { Head } from "arkhi/client";
import Layout from "../../layout";
import Article from "#/content/docs/start/build-your-own-framework.md";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	return (
		<Layout>
			<Head>
				<title>Build your own framework - Arkhi</title>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
			</Head>
			<Article />
		</Layout>
	);
}
