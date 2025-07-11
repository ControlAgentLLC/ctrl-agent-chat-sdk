import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

const entry = resolve(__dirname, "src/app.tsx");

const buildType = process.env.BUILD_TYPE;

const baseConfig = {
  build: {
    lib: {
      entry,
      name: "MyWidget",
      formats:
        buildType === "cdn"
          ? (["umd"] as ("es" | "cjs" | "umd" | "iife")[])
          : (["es", "cjs"] as ("es" | "cjs" | "umd" | "iife")[]),
      fileName: (format: any) => `my-widget.${format}.js`,
    },
    outDir: buildType === "cdn" ? "cdn" : "dist",
    rollupOptions: {
      external: [],
    },
    emptyOutDir: buildType === "cdn" ? false : true,
  },
  plugins: buildType === "cdn" ? [] : [dts({ outDir: "dist/types" })],
};

export default defineConfig(baseConfig);
