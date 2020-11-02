const test = require("tape");
const compose = require("./compose");

test("compose", async (t) => {
  t.plan(1);
  const result = await compose();
  t.equal(typeof result, "string", "compose returns a string");
});
