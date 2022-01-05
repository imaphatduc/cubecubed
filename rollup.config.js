import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/cubecubed.js",
            format: "umd",
            name: "cubed",
        },
        {
            file: "dist/cubecubed.module.js",
            format: "esm",
            name: "cubed",
        },
    ],
    plugins: [typescript({ module: "esnext" }), commonjs(), nodeResolve()],
};
