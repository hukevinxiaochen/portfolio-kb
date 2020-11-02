const test = require("tape");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const compose = require("./compose");

test("compose", async (t) => {
  t.plan(2);
  const result = await compose();
  t.equal(typeof result, "string", "compose returns a string");
  console.log("compose result -->", result);
  const dom = new JSDOM(result);
  t.equal(
    dom.window.document.getElementById("edit").children.length,
    1,
    "compose contains a div with id='edit' and exactly 1 child node"
  );
});
