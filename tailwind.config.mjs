/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				accent: {
					// Surfaces, filets et puces : ton très désaturé
					DEFAULT: "#7a79a3",
					// Texte et boutons : même teinte, plus profonde pour rester lisible
					deep: "#5f5d84",
					light: "#cfcde6",
					soft: "#f6f5fa",
					night: "#1a1926",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
