const test = require("tape");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const compose = require("./compose");

test("compose", (t) => {
  t.plan(3);
  const result = compose();

  // 1
  t.equal(typeof result, "string", "compose returns a string");

  // 2
  const dom = new JSDOM(result);
  t.equal(
    dom.window.document.getElementById("edit").tagName.toUpperCase(),
    "SVG",
    "compose result contains an svg with id='edit'"
  );

  // 3
  const pullTabChildElementType = dom.window.document
    .getElementById("pulltab")
    .children.item(0)
    .tagName.toUpperCase();
  t.equal(
    pullTabChildElementType,
    "SVG",
    "compose result contains a div with id='pulltab' with a first child that is an svg"
  );
});
