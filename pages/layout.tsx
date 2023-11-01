import { Link } from "arkhi/client";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className="flex justify-center flex-row w-full gap-2">
			<nav className="w-56 flex-shrink-0 bg-white/10 p-4 rounded-md flex-grow-0 pr-8 mr-10">
				<div className="flex flex-col flex-wrap">
					<div className="text-xl mb-3">Getting Started</div>
					<NavLink title="Getting stated" href="" />
					<NavLink title="Getting stated" href="" />
					<NavLink title="Getting stated" href="" />
					<NavLink title="Getting stated" href="" />
					<NavLink title="Getting stated" href="" />
					<NavLink title="Getting stated" href="" />
					<NavLink title="Getting stated" href="" />
				</div>
			</nav>
			<div className="w-full">{children}</div>
		</div>
	);
}

function NavLink({ title, href }: { title: string; href: string }) {
	return (
		<Link
			href={href}
			className="hover:bg-white/40 before:content-['-'] before:pr-2 capitalize px-2 py-1 transition-colors rounded-xl"
		>
			{title}
		</Link>
	);
}
