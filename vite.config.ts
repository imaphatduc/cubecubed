import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "unplugin-dts/vite";

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
    },
    plugins: [tsconfigPaths(), dts()],
    optimizeDeps: {
        exclude: ["cubecubed"],
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "cubecubed",
            fileName: (format) => {
                const meta = "cubecubed";

                if (format === "cjs") return `${meta}.cjs`;
                if (format === "es") return `${meta}.module.js`;
                if (format === "iife") return `${meta}.min.js`;
                if (format === "umd") return `${meta}.js`;

                return `${meta}.js`;
            },
            formats: ["cjs", "es", "iife", "umd"],
        },
        rollupOptions: {
            external: [
                "d3",
                "d3-simple-slider",
                "inquirer",
                "katex",
                "tex-to-svg",
                "three",
            ],
        },
    },
});
