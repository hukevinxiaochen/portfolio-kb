const test = require("tape");
const path = require("path");
const neo4j = require("neo4j-driver");
const actions = require("../server/actions");

const connectionParams = {
  uri: "bolt://localhost",
  user: "neo4j",
  password: "Neo4j",
};
const driver = neo4j.driver(
  connectionParams.uri,
  neo4j.auth.basic(connectionParams.user, connectionParams.password)
);

/**
 * SETUP
 */
test("createNote", async (t) => {
  const session = driver.session();
  const myNote = {
    title: "Diagnosis of simple cystitis in the outpatient setting",
    content:
      "Having history of new dysuria with either frequency or blood AND absence of vaginal discharge raises pre-test probability of simple cystitis to > 90%",
  };
  const result = await actions.createNote(session, myNote);
  t.plan(4);
  t.equal(typeof actions.createNote, "function", "createNote is a function");
  t.equal(result instanceof Array, true, "createNote returns an array");
  t.equal(result.length, 1, "createNote returns an array of length 1");
  console.log(result[0].get(0));
  t.equal(
    result[0].has("n.title"),
    true,
    "createNote creates a note with a title property"
  );
  await session.close();
  await driver.close();
});

// driver.close().then((success) => {
//   console.log("neo4j-driver closed --> ", success);
// });
