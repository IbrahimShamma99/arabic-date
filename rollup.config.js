import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

// this override is needed because Module format cjs does not support top-level await
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json");

const globals = {
  ...packageJson.devDependencies,
};

const config = {
  input: "src/index.js",
  output: [
    {
      dir: "dist",
      format: "esm",
    },
    {
      file: packageJson.types,
      format: "cjs", // commonJS
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ["**/*.stories.*"],
      },
    }),
    commonjs({
      exclude: "node_modules",
      ignoreGlobal: true,
    }),

    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
  ],
  external: Object.keys(globals),
};

export default config;
