import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

await esbuild
  .build({
    entryPoints: ["src/styles/style.scss", "src/scripts/app.jsx"],
    outdir: "docs",
    bundle: true,
    plugins: [sassPlugin()],
  })
  .then(() => console.log("⚡ Build complete! ⚡"))
  .catch(() => process.exit(1));
