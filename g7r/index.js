const fs = require("fs");
const path = require("path");
const renderWithReact = require("./mdxNgin");
import ReactDOMServer from "react-dom/server";
// NOTE: dynamic import of mdxNgin

// INPUT MDX for transpilation
const MDXDocument = fs.readFileSync(
  path.resolve(__dirname, "..", "client/Main.mdx")
);

// TODO : export a function that takes a React element
// and shift the input element location logic to the build script
// import Page in the build section

const compose = async () => {
  const page = await renderWithReact(MDXDocument);
  return ReactDOMServer.renderToStaticMarkup(page);
};

module.exports = compose;
