const fs = require("fs");
const path = require("path");
const mdx = require("@mdx-js/mdx");
const { babelTransform, renderWithReact } = require("./mdxNgin");
const ReactDOMServer = require("react-dom/server");
// NOTE: dynamic import of mdxNgin

// INPUT MDX for transpilation
const MDXDocument = fs.readFileSync(
  path.resolve(__dirname, "..", "client/Main.mdx")
);
const mainJSPath = path.resolve(__dirname, "..", "client/Main.js");

// TODO : export a function that takes a React element
// and shift the input element location logic to the build script
// import Page in the build section
const makeApp = async () => {
  const page = await renderWithReact(MDXDocument);
  return page;
};

const generateJS = async () => {
  const jsx = await mdx(MDXDocument);
  const code = babelTransform(jsx);
  fs.writeFile(mainJSPath, code, () => {
    console.log("Successful JS");
  });
};

const compose = async () => {
  const Main = await makeApp();
  return ReactDOMServer.renderToString(page);
};

module.exports = { makeApp, generateJS, compose };
