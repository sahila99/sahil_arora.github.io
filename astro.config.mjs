// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sahila99.github.io",
  base: "/Sahil_Arora",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});