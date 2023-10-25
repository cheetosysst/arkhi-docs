import React from "react";
import { Island } from "arkhi/client";
import { Head } from "arkhi/client";

import "./index.css";
import { Github } from "lucide-react";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	return (
		<>
			<Head>
				<title>Index Page - Arkhi</title>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
			</Head>
			<div className="flex flex-col-reverse lg:flex-row py-20 justify-around">
				<div className="mx-auto lg:mx-0">
					<h1 className="lg:text-5xl pt-10 text-2xl font-bold bg-gradient-to-r leading-10 lg:leading-[4rem] from-pink-500 via-purple-700 to-purple-500 bg-clip-text">
						<span className="text-transparent text-6xl">
							Arkhi.js
							<br />
						</span>
						Islands Architecture
						<br />
						Frontend Framework
					</h1>
					<span className="lg:text-2xl capitalize text-xl font-medium text-white/50">
						Blazingly fast hydration
					</span>
					<div className="flex gap-2 mt-10">
						<a
							href="/"
							className="py-2 px-4 font-semibold bg-gradient-to-r from-purple-700 to-purple-500 hover:from-red-500 hover:to-violet-500 transition-all duration-500 drop-shadow-md rounded-3xl capitalize"
						>
							getting started
						</a>
						<a
							href="/"
							className="py-2 px-4 font-medium drop-shadow-md bg-white/20 hover:bg-white/30 rounded-3xl capitalize"
						>
							About
						</a>
						<a
							href="/"
							className="flex gap-2 items-center justify-center py-2 px-4 font-medium drop-shadow-md bg-white/20 hover:bg-white/30 rounded-3xl capitalize"
						>
							<Github />
							Github
						</a>
					</div>
				</div>
				<div className="flex justify-center relative items-center">
					<div className="logo-glow" />
					<img
						src="arkhi.svg"
						className=" z-10"
						alt="logo of arkhi framework"
						width={350}
					/>
				</div>
			</div>
		</>
	);
}
