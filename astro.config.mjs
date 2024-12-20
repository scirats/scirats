import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://scirats.com",

  integrations: [
    vue({ appEntrypoint: "/src/config/vue" }),
    tailwind(),
    mdx(),
    sitemap(),
  ],

  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },

  adapter: netlify(),
});