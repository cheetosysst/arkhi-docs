import React, { type PropsWithChildren } from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./PageShell.css";
import { ArkhiProvider, Island, Link } from "arkhi/client";
import { Github } from "lucide-react";

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
		<>
			<div className="max-w-screen-xl mx-auto min-h-[100dvh] flex-col flex gap-4 py-8 px-4 sm:px-6 md:px-8">
				<Navbar />
				{children}
			</div>
		</>
	);
}

function Navbar({ children }: PropsWithChildren) {
	return (
		<div className="mx-auto w-full sticky flex justify-between items-center z-20 top-0 bg-transparent">
			<Link
				href="/"
				className="flex transition-colors cursor-pointer p-2 rounded-md hover:bg-white/30 items-center text-4xl font-bold gap-2"
			>
				<img src="arkhi.svg" width={32} height={32} />
				<h1 className="">ARKHI</h1>
			</Link>
			<ul className="flex gap-2 text-lg">
				<li>
					<Link
						className="hover:bg-white/50 rounded-md transition-colors p-2"
						href="/docs"
					>
						Docs
					</Link>
				</li>
				<li>
					<Link
						className="hover:bg-white/50 rounded-md transition-colors p-2"
						href="/guides"
					>
						Guides
					</Link>
				</li>
				<li>
					<Link
						className="hover:bg-white/50 rounded-md transition-colors p-2"
						href="https://github.com/cheetosysst/arkhi"
					>
						Github
					</Link>
				</li>
				<li>
					<Link
						className="hover:bg-white/50 rounded-md transition-colors p-2"
						href="/about"
					>
						About
					</Link>
				</li>
			</ul>
		</div>
	);
}
