import React, { type ReactElement } from "react";
import { Head } from "arkhi/client";

import "./index.css";
import {
	Github,
	Palmtree,
	type LucideIcon,
	Key,
	Gauge,
	Wrench,
	Brush,
	Radio,
} from "lucide-react";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	return (
		<>
			<Head>
				<title>Index Page - Arkhi</title>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
			</Head>
			<Hero />
			<Features />
		</>
	);
}

function Hero() {
	return (
		<div className="flex flex-col-reverse lg:flex-row pt-5 pb-14 justify-around">
			<div className="text-center lg:text-left">
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
				<div className="flex gap-2 justify-center lg:justify-start mt-10 flex-wrap">
					<a
						href="/"
						className="py-2 px-4 font-semibold bg-gradient-to-r from-purple-700 to-purple-500 hover:from-red-500 hover:to-violet-500 transition-all duration-500 drop-shadow-md rounded-3xl capitalize"
					>
						getting started
					</a>
					<a
						href="/docs"
						className="py-2 px-4 font-medium drop-shadow-md bg-white/20 hover:bg-white/30 rounded-3xl capitalize"
					>
						Documentation
					</a>
					<a
						href="https://github.com/cheetosysst/arkhi"
						className="flex gap-2 items-center justify-center py-2 px-4 font-medium drop-shadow-md bg-white/20 hover:bg-white/30 rounded-3xl capitalize"
					>
						<Github />
						Github
					</a>
					<a
						href="/about"
						className="py-2 px-4 font-medium drop-shadow-md bg-white/20 hover:bg-white/30 rounded-3xl capitalize"
					>
						About
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
	);
}

type Feature = {
	name: string;
	icon: ReactElement;
	description: string;
};

const features: Array<Feature> = [
	{
		name: "Island Architecture",
		icon: <Palmtree className="drop-shadow-sm" />,
		description:
			"Blazingly fast hydration speed, only hydrate when it's needed.",
	},
	{
		name: "Fully Typed",
		icon: <Key className="drop-shadow-sm" />,
		description: "Built with Typescript in mind, arkhi is fully typesafe.",
	},
	{
		name: "Rich Features",
		icon: <Wrench className="drop-shadow-sm" />,
		description: "OOTB markdown support, tRPC api, and many more!",
	},
	{
		name: "Server-Side Rendering",
		icon: <Brush className="drop-shadow-sm" />,
		description:
			"Utilize SSR to compliment islands architecture's short coming.",
	},
	{
		name: "Reactive",
		icon: <Gauge className="drop-shadow-sm" />,
		description:
			"Reactive Share hook API for sharing state across islands.",
	},
	{
		name: "Auto Prefetch",
		icon: <Radio className="drop-shadow-sm" />,
		description: "Prefetch pages for seamless transitions.",
	},
];

function Features() {
	return (
		<div className="flex flex-wrap justify-center flex-row gap-4">
			{features.map((item) => (
				<FeatureCard className="w-80" {...item} />
			))}
		</div>
	);
}
function FeatureCard({
	className = "",
	name,
	icon,
	description,
}: { className?: string } & Feature) {
	return (
		<div
			className={`flex flex-col bg-neutral-800 hover:bg-neutral-600 transition-colors p-4 rounded-xl drop-shadow-md ${className}`}
		>
			<span className="bg-white/10 aspect-square w-fit p-2 m-2 rounded-md">
				{icon}
			</span>
			<h2 className="text-lg font-medium pl-2">{name}</h2>
			<p className="pl-2 font-medium text-white/80">{description}</p>
		</div>
	);
}
