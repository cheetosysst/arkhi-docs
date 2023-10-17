/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./renderer/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
