import { Head } from "arkhi/client";
import Layout, { LinksForIndex } from "../../layout";
import { getSectionArticle } from "#/libs/files";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	const articles = getSectionArticle("start");
	return (
		<Layout>
			<Head>
				<title>Start - Arkhi</title>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
			</Head>
			<h1 className="text-4xl pl-2 mb-5">Start</h1>
			<LinksForIndex chapter="start" articles={articles} />
		</Layout>
	);
}
