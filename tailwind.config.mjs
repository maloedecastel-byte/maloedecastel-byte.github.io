/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				accent: {
					DEFAULT: "#1b5b8f",
					light: "#7fb6dd",
					soft: "#eef4f9",
					night: "#10202c",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
