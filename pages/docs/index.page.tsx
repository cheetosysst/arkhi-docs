import { Head, Link } from "arkhi/client";
import Layout, { LinksForIndex } from "../layout";
import { getDocs, getSectionArticle } from "#/libs/files";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	// const articles = getSectionArticle("start");
	const docs = getDocs();

	return (
		<Layout>
			<Head>
				<title>Start - Arkhi</title>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
			</Head>
			<h1 className="text-4xl pl-2 mb-5">Start</h1>

			<div className="flex flex-col gap-4">
				{Object.keys(docs)
					.map((key) => docs[key])
					.sort((a, b) => a.weight - b.weight)
					.map((chapter) => (
						<Link
							className="p-6 rounded-xl drop-shadow-lg bg-neutral-800 hover:bg-neutral-700 capitalize font-medium text-xl"
							href={`/docs/${chapter.name}`}
							key={chapter.name}
						>
							{chapter.name}
						</Link>
					))}
			</div>
		</Layout>
	);
}
