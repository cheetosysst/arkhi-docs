import { Head } from "arkhi/client";
import Layout, { LinksForIndex } from "../../layout";
import { getSectionArticle } from "#/libs/files";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	const articles = getSectionArticle("reference");
	return (
		<Layout>
			<Head>
				<title>Reference - Arkhi</title>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
			</Head>
			<h1 className="text-4xl pl-2 mb-5">Reference</h1>
			<LinksForIndex chapter="reference" articles={articles} />
		</Layout>
	);
}
