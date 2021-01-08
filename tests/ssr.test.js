const test = require("tape");
const path = require("path");

/**
 * Import modules to test
 */

const projectRoot = path.resolve(__dirname, "..");
const { renderWithReact } = require(path.resolve(projectRoot, "g7r", "mdxNgin"));

/**
 * Test Suites
 */

test("renderWithReact function", async (t) => {
  // takes an MDX string and outputs a JavaScript string
  const mdxString = `# heading
  - list item 1
  - list item 2`;

  const output = await renderWithReact(mdxString);
  t.equal(typeof output, "object", "outputs an object");
  t.end();
});
