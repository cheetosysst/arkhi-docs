import { Head } from "arkhi/client";
import Layout from "../pages/layout";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	return (
		<Layout>
			<Head>
				<title>Index Page - Arkhi</title>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
			</Head>
			<div className="text-justify w-full">Error</div>
		</Layout>
	);
}
