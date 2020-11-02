const test = require("tape");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const compose = require("./compose");

test("compose", async (t) => {
  t.plan(3);
  const result = await compose();
  t.equal(typeof result, "string", "compose returns a string");
  const dom = new JSDOM(result);
  t.equal(
    dom.window.document.getElementById("edit").children.length,
    1,
    "compose contains a div with id='edit' with exactly 1 child node"
  );
  t.equal(
    dom.window.document.getElementById("pulltab").children.item(0).tagName,
    "SVG",
    "compose contains a div with id='pulltab' with a first child that is an svg"
  );
});
