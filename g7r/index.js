const fs = require("fs");
const path = require("path");

import ReactDOMServer from "react-dom/server";

// TODO : export a function that takes a React element
// and shift the input element location logic to the build script
// import Page in the build section

const MDXDocument = fs.readFileSync(
  path.resolve(__dirname, "..", "client/Main.mdx")
);

const compose = async () => {
  const { renderWithReact } = await import("./mdxNgin.js");
  const page = await renderWithReact(MDXDocument);
  return ReactDOMServer.renderToStaticMarkup(page);
};

module.exports = compose;
