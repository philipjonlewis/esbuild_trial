import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import htmlPlugin from "@chialab/esbuild-plugin-html";

await esbuild
  .build({
    entryPoints: [
      "src/index.html",
      "src/about.html",
      "src/styles/style.scss",
      "src/scripts/app.jsx",
    ],
    outdir: "docs",
    bundle: true,
    minify: true,
    plugins: [sassPlugin(), htmlPlugin()],
  })
  .then(() => console.log("⚡ Build complete! ⚡"))
  .catch(() => process.exit(1));
