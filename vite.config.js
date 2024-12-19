import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  base: '/it-wave/',
  root: "src",

  build: {
    target: ["es2022", "chrome89", "firefox89", "safari15"],
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        // nested: resolve(__dirname, "src/info.html")
        // nestedTwo: resolve(__dirname, "src/profile.html"),
        // nestedFour: resolve(__dirname, "src/advert.html"),
      },
    },
    outDir: "../dist",
  },
  plugins: [injectHTML(), FullReload(["./src//.html"])],
});
