import { Head } from "arkhi/client";

// import "./index.css";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	return (
		<>
			<Head>
				<title>Index Page - Arkhi</title>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
			</Head>
			guides
		</>
	);
}
