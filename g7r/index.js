const fs = require("fs");
const path = require("path");

// import React from "react";
// import MDXDocument from "../client/Page.mdx";
import ReactDOMServer from "react-dom/server";
// import { renderWithReact } from "./mdxNgin.mjs";

// TODO : use renderWithReact
// TODO : make into a function that takes a React element
// and shift the input element location logic to the build script
// import Page in the build section
const MDXDocument = fs.readFileSync(
  path.resolve(__dirname, "..", "client/Page.mdx")
);

const compose = async () => {
  const { renderWithReact } = await import("./mdxNgin.js");
  const page = await renderWithReact(MDXDocument);
  return ReactDOMServer.renderToStaticMarkup(page);
};

module.exports = compose;
