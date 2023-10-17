import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./PageShell.css";
import { ArkhiProvider } from "arkhi/client";

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
					<Layout>
						<Content>{children}</Content>
					</Layout>
				</PageContextProvider>
			</ArkhiProvider>
		</React.StrictMode>
	);
}

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div
			style={{
				display: "flex",
				maxWidth: 900,
				margin: "auto",
			}}
		>
			{children}
		</div>
	);
}

function Content({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>;
}
