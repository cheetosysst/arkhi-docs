import React from "react";
import Counter from "./Counter";

import { Island } from "arkhi/client";
import { Head } from "arkhi/client";

export { Page };
export const PrefetchSetting = { mode: "hover" };

const CounterIsland = Island(Counter);

function Page() {
	return (
		<>
			<Head>
				<title>Index Page - Arkhi</title>
			</Head>
			<h1>Welcome</h1>
			This page is:
			<p>
				Non-Interactive. <Counter temp="Candy" />
				<svg
					width="200"
					height="200"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="0"
						y="0"
						width="200"
						height="200"
						fill="lightblue"
					/>

					<rect x="95" y="80" width="10" height="60" fill="brown" />

					<path d="M100 50 L110 80 L90 80 Z" fill="green" />

					<ellipse
						cx="100"
						cy="140"
						rx="80"
						ry="40"
						fill="sandybrown"
					/>

					<path
						d="M0 140 Q20 100, 40 140 T80 140 T120 140 T160 140 T200 140 L200 200 L0 200 Z"
						fill="blue"
					/>
					<circle fill="transparent" />
				</svg>
			</p>
			<p>
				Interactive. <CounterIsland temp="Candy" />
			</p>
		</>
	);
}
