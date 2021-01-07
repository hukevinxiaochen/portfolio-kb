const test = require("tape");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const path = require("path");

/**
 * Import modules to test
 */
const projectRoot = path.resolve(__dirname, "..");
const { compose } = require(path.resolve(projectRoot, "g7r"));

/**
 * Test Suites
 *
 * compose is a function that should generate an HTML string.
 * Running it should generate a home page with: edit icon,
 * pulltab icon.
 */
let result;

test("compose", async (t) => {
  result = await compose();
  // compose returns a string
  t.equal(typeof result, "string", "compose returns a string");
  t.end();
});

test.skip("the app has edit components", (t) => {
  const dom = new JSDOM(result);

  const edit = dom.window.document.getElementById("edit");
  const editTagName = !!edit ? edit.tagName.toUpperCase() : "DOES NOT EXIST";

  const pullTab = dom.window.document.getElementById("pulltab");
  const pullTabChildElementType = !!pullTab
    ? pullTab.children.item(0).tagName.toUpperCase()
    : "DOES NOT EXIST";

  // compose result contains an svg with id='edit'
  t.equal(editTagName, "SVG", "compose result contains an svg with id='edit'");

  // compose result contains a div with id='pulltab'
  // with a first child that is an svg
  t.equal(
    pullTabChildElementType,
    "SVG",
    `compose result contains a div with id='pulltab' 
    with a first child that is an svg`
  );

  t.end();
});
