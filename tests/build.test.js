const test = require("tape");
const path = require("path");
const mock = require("mock-fs");

/**
 * Import modules to test
 */
const projectRoot = path.resolve(__dirname, "..");
const build = require(path.resolve(projectRoot, "b3d"));

/**
 * Test Suites
 *
 * build takes a destDir argument and a destFile argument and
 * figures out whether a destDir needs to be created, and also
 * notes if there is an older version of destFile that will
 * need to be overwritten.
 *
 * default value of destDir is `${projectRoot}/dist`
 * default value of destFile is index.html
 */
test("build", (t) => {
  t.plan(4);

  // build returns an object
  const result = build();
  t.equal(typeof result, "object", "build returns an object");

  // build is smart
  mock({ emptyDest: {}, fullDest: { "index.html": "<html></html>" } });
  const destNonExistent = build("dist", "index.html");
  const destEmpty = build("emptyDest", "index.html");
  const destFull = build("fullDest", "index.html");
  mock.restore();

  // build knows when destination directory does not exist
  t.deepEqual(
    destNonExistent,
    { destDirExists: false, destFileExists: false },
    "build knows when destination directory does not exist"
  );

  // build knows when destination file does not exist
  t.deepEqual(
    destEmpty,
    { destDirExists: true, destFileExists: false },
    "build knows when destination file does not exist"
  );

  // build knows when destination file does exist
  t.deepEqual(
    destFull,
    { destDirExists: true, destFileExists: true },
    "build knows when destination file does exist"
  );
});
