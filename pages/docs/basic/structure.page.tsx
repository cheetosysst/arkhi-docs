import { Head } from "arkhi/client";
import Layout from "../../layout";
import Article from "#/content/docs/basic/structure.md";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	return (
		<Layout>
			<Head>
				<title>Structure - Arkhi</title>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
			</Head>
			<Article />
		</Layout>
	);
}
