import React, { type PropsWithChildren, type MouseEvent } from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./PageShell.css";
import { ArkhiProvider, Island, Link } from "arkhi/client";
import { FileText, Github, GraduationCap, Info, Menu } from "lucide-react";

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
			<div>
				<Link
					href="/"
					className="flex transition-colors cursor-pointer p-2 rounded-md hover:bg-white/30 items-center text-4xl font-bold gap-2"
				>
					<img src="arkhi.svg" width={32} height={32} />
					<h1 className="">ARKHI</h1>
				</Link>
			</div>
			{/* normal nav links */}
			<ul className="lg:flex hidden gap-2 text-lg">
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

			<div className="relative flex lg:hidden">
				<input
					type="checkbox"
					className="hidden peer/toggle"
					id="toggle"
				/>
				<label
					htmlFor="toggle"
					className="text-white hover:bg-white/20 transition-colors py-2 px-4 rounded cursor-pointer"
				>
					<Menu />
				</label>
				<ul
					className="hidden absolute flex-wrap gap-1 w-fit top-5 -translate-x-1/2 mt-4 peer-checked/toggle:flex p-4 bg-neutral-900/90 rounded-xl"
					id="content"
				>
					<li className="w-full">
						<Link
							className="hover:bg-white/50 flex items-center gap-2 rounded-md transition-colors p-2"
							href="/docs"
						>
							<FileText size={20} />
							Docs
						</Link>
					</li>
					<li className="w-full">
						<Link
							className="hover:bg-white/50 flex items-center gap-2 rounded-md transition-colors p-2"
							href="/guides"
						>
							<GraduationCap size={20} />
							Guides
						</Link>
					</li>
					<li className="w-full">
						<Link
							className="hover:bg-white/50 flex items-center gap-2 rounded-md transition-colors p-2"
							href="https://github.com/cheetosysst/arkhi"
						>
							<Github size={20} />
							Github
						</Link>
					</li>
					<li className="w-full">
						<Link
							className="hover:bg-white/50 flex items-center gap-2 rounded-md transition-colors p-2"
							href="/about"
						>
							<Info size={20} />
							About
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
