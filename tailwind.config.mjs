/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				accent: {
					DEFAULT: "#6f68c8",
					light: "#b6b0ec",
					soft: "#f1effc",
					night: "#1a1730",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
