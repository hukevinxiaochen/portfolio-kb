const test = require("tape");
const path = require("path");
const mock = require("mock-fs");

/**
 * Import modules to test
 */
// import { planBuild } from "../b3d"

const projectRoot = path.resolve(__dirname, "..");
const planBuild = require(path.resolve(projectRoot, "b3d"));

/**
 * Test Suites
 *
 * planBuild takes a destDir argument and a destFile argument and
 * figures out whether a destDir needs to be created, and also
 * notes if there is an older version of destFile that will
 * need to be overwritten.
 *
 * default value of destDir is `${projectRoot}/dist`
 * default value of destFile is index.html
 */
test("planBuild function", (t) => {
  t.plan(4);

  // build function returns an object
  const result = planBuild();
  t.equal(typeof result, "object", "planBuild function returns an object");

  // build is smart
  mock({ emptyDest: {}, fullDest: { "index.html": "<html></html>" } });
  const destNonExistent = planBuild("dist", "index.html");
  const destEmpty = planBuild("emptyDest", "index.html");
  const destFull = planBuild("fullDest", "index.html");
  mock.restore();

  // planBuild knows when destination directory does not exist
  t.deepEqual(
    destNonExistent,
    { destDirExists: false, destFileExists: false },
    "planBuild tells when the directory where we want to output our HTML does not exist."
  );

  // planBuild knows when destination file does not exist
  t.deepEqual(
    destEmpty,
    { destDirExists: true, destFileExists: false },
    "planBuild knows when destination file does not exist"
  );

  // planBuild knows when destination file does exist
  t.deepEqual(
    destFull,
    { destDirExists: true, destFileExists: true },
    "planBuild knows when destination file does exist"
  );
});

// Integration Test
test("build environment", (t) => {
  t.plan(1);
  t.equal(
    process.env.TEST,
    'true',
    "the script is aware of when it is in test environment"
  );
});
