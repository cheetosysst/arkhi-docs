import { Head } from "arkhi/client";
import Layout from "../../layout";
import Article from "#/content/docs/advanced/manage-islands.md";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	return (
		<Layout>
			<Head>
				<title>Manage Islands - Arkhi</title>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
			</Head>
			<Article />
		</Layout>
	);
}
