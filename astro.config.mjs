import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// `site` et `base` sont fournis automatiquement par `withastro/action`
// lors du déploiement GitHub Pages. En local, le site est servi à la racine.
// https://astro.build/config
export default defineConfig({
	site: "https://maloedecastel-byte.github.io",
	integrations: [tailwind(), sitemap()],
});
