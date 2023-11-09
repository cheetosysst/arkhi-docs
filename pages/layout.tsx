import { Link } from "arkhi/client";
import { PropsWithChildren } from "react";
import { getDocs } from "#/libs/files";
import { Book, Github, Menu } from "lucide-react";

export default function Layout({ children }: PropsWithChildren) {
	const docs = getDocs();

	return (
		<div className="flex justify-center lg:flex-row lg:px-10 px-5 flex-col w-full gap-2 relative">
			<input
				type="checkbox"
				className="hidden peer/mainnav"
				id="mainnav"
			/>
			<label
				htmlFor="mainnav"
				className="bg-neutral-700/20 flex gap-2 capitalize peer-checked/mainnav:bg-neutral-700 lg:hidden drop-shadow-sm text-white p-4 rounded cursor-pointer"
			>
				<Menu />
				open menu
			</label>
			<nav className="bg-neutral-800 drop-shadow-md transition-transform rounded-lg h-fit flex-grow p-6 mr-10 gap-4 lg:flex flex-col z-10 lg:z-0 absolute lg:static w-fit float-left peer-checked/mainnav:flex lg:top-0 top-16 hidden">
				<span className="capitalize font-medium text-white/80 text-xl">
					arkhi docs
				</span>
				{Object.keys(docs)
					.map((key) => docs[key])
					.sort((a, b) => a.weight - b.weight)
					.map((chapter) => (
						<div
							className="flex flex-col group"
							key={`navchapter${chapter.name}`}
						>
							<span className="text-xl flex gap-2 items-center border-b-2 text-white/70 group-hover:text-white transition-colors border-white/10 group-hover:border-white/50 pb-1 mb-1 mt-2 pl-1 capitalize">
								<Book size={20} />
								{chapter.name}
							</span>
							{chapter.data.map((article) => (
								<NavLink
									title={article.title}
									href={`/docs/${chapter.name}/${article.title
										.split(" ")
										.join("-")}`}
									key={`${chapter.name}/${article.title}`}
								/>
							))}
						</div>
					))}
				<hr className="border-b-2 border-0 border-white/10" />
				<a
					href="https://github.com/cheetosysst/arkhi"
					className="flex pl-1 gap-2 items-center text-white/70 hover:text-white"
				>
					<Github /> Edit on Github
				</a>
			</nav>
			<div className="lg:w-3/4 w-full pb-20">{children}</div>
		</div>
	);
}

function NavLink({ title, href }: { title: string; href: string }) {
	return (
		<Link
			href={href}
			className={`hover:bg-white/20 hover:text-white text-white/80 group-hover:text-white/90 htbf before:text-white/40 capitalize px-2 py-1 transition-colors rounded-md`}
		>
			{title}
		</Link>
	);
}
