import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  root: "src",

  build: {
    target: ["es2022", "chrome89", "firefox89", "safari15"],
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        nested: resolve(__dirname, "src/hobby.html"),
        nestedTwo: resolve(__dirname, "src/review.html"),
        nestedFour: resolve(__dirname, "src/challenge.html"),
        nestedFive: resolve(__dirname, "src/sport.html"),
        nestedSix: resolve(__dirname, "src/authorization.html"),
        nestedSeven: resolve(__dirname, "src/profile.html"),
        nestedEight: resolve(__dirname, "src/profileForm.html"),
        nestedNine: resolve(__dirname, "src/history.html"),
      },
    },
    outDir: "../dist",
  },
  plugins: [injectHTML(), FullReload(["./src//.html"])],
});
