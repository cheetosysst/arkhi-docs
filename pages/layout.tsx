import { Link } from "arkhi/client";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className="flex justify-center flex-row w-full gap-2">
			<nav className="w-56 flex-shrink-0 flex-grow-0">
				<p>
					<span>Getting Started</span>
					<Link href="" className="hover:bg-white/40">
						Getting Started
					</Link>
				</p>
			</nav>
			<div className="w-full">{children}</div>
		</div>
	);
}
