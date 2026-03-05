// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sahila99.github.io",
  base: "/sahil_arora.github.io",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});