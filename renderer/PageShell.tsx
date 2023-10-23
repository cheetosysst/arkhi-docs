import React, { type PropsWithChildren } from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./PageShell.css";
import { ArkhiProvider, Link } from "arkhi/client";

export { PageShell };

function PageShell({
	children,
	pageContext,
}: {
	children: React.ReactNode;
	pageContext: PageContext;
}) {
	return (
		<React.StrictMode>
			<ArkhiProvider>
				<PageContextProvider pageContext={pageContext}>
					<Layout>{children}</Layout>
				</PageContextProvider>
			</ArkhiProvider>
		</React.StrictMode>
	);
}

function Layout({ children }: PropsWithChildren) {
	return (
		<div className="max-w-screen-xl pt-10 mx-auto my-8 flex-col px-4 sm:px-6 md:px-8 flex gap-4 lg:mb-32">
			<Navbar />
			{children}
		</div>
	);
}

function Navbar({ children }: PropsWithChildren) {
	return (
		<div className="fixed top-0 py-2 bg-[#212121] w-full">
			<Link
				href="/"
				className="flex w-fit transition-colors cursor-pointer p-2 rounded-md hover:bg-white/30 items-center text-4xl font-bold gap-2"
			>
				<img src="arkhi.svg" width={32} height={32} />
				<h1 className="">ARKHI</h1>
			</Link>
		</div>
	);
}
