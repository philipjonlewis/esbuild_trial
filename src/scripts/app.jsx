import * as React from "react";
import * as Server from "react-dom/server";

let Greet = () => "<h1>Hello, world!</h1>";
console.log(Server.renderToString(<Greet />));

document.querySelector("#app").innerHTML = `
  <h1>Hello ES BUild!</h1>
  <h1>Hello ES BUild!</h1>
  <h1>ESBUILD Number 1</h1>
  <h1>ESBUILD Number 1</h1>
  <h5> THis is the esbuild bundler thing</h5>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
