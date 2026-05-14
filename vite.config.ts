import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** base: './' — чтобы открывать собранный site/index.html с диска (file://). */
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "site",
    emptyOutDir: true,
    assetsDir: "assets",
  },
});
