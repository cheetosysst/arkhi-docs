import { Head } from "arkhi/client";
import About from "#/content/about.md";
import Layout from "../layout";
// import "./index.css";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	return (
		<>
			<Layout >
				<Head>
					<title>Index Page - Arkhi</title>
					<link rel="icon" type="image/x-icon" href="favicon.ico" />
				</Head>
				<About />
			</Layout>
		</>
	);
}
