const babel = require("@babel/core");
const React = require("react");
const mdx = require("@mdx-js/mdx");
const { mdx: createElement } = require("@mdx-js/react");

// TODO: use transformSync instead
const babelTransform = (code) =>
  babel.transform(code, {
    presets: [["@babel/preset-env", { targets: "maintained node versions" }]],
    plugins: [
      "@babel/plugin-transform-react-jsx",
      "@babel/plugin-proposal-object-rest-spread",
      ["module-resolver", { alias: { "": "../client" } }],
    ],
  }).code;

/**
 * renderWithReact - takes MDX -> JSX -> JS -> React Element
 *
 * @param {string} mdxCode - an MDX string
 */
const renderWithReact = async (mdxCode) => {
  const jsx = await mdx(mdxCode, { skipExport: true });
  const code = babelTransform(jsx);
  const scope = { mdx: createElement, require: require };

  // TODO: Why does the following definition require @babel/preset-env?
  const fn = new Function(
    "React",
    ...Object.keys(scope),
    `${code}; return React.createElement(MDXContent)`
  );

  const element = fn(React, ...Object.values(scope));

  const elementWithProvider = React.createElement(React.Fragment, {}, element);

  return elementWithProvider;
};

module.exports = { renderWithReact, babelTransform };
