/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				accent: {
					DEFAULT: "#6b68a4",
					light: "#c3bfe6",
					soft: "#f4f3fb",
					night: "#191831",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
