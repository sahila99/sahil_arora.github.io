import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sahilarora.tech",
  output: "static",
  integrations: [sitemap()],
  build: {
    assets: "_astro"
  }
});