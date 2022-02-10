const fs = require("fs");
const path = require("path");
const mdx = require("@mdx-js/mdx");
const { renderWithReact } = require("./mdxNgin");
const ReactDOMServer = require("react-dom/server");
// NOTE: dynamic import of mdxNgin

// INPUT MDX for transpilation
const MDXDocument = fs.readFileSync(
  path.resolve(__dirname, "..", "client/Main.mdx")
);
const mainJSXPath = path.resolve(__dirname, "..", "client/Main.jsx");

const generateJSX = async () => {
  const jsx = await mdx(MDXDocument);
  const _logMsg = "Successful JSX";
  fs.writeFile(mainJSXPath, jsx, () => {
    console.log("File write step done")
  });
  return _logMsg;
};

// TODO : export a function that takes a React element
// and shift the input element location logic to the build script
// import Page in the build section
const makeApp = async () => {
  const page = await renderWithReact(MDXDocument);
  return page;
};

const compose = async () => {
  const page = await makeApp();
  const htmlPage = ReactDOMServer.renderToString(page);
  return `<!DOCTYPE html>${htmlPage}`;
};

module.exports = { makeApp, generateJSX, compose };
