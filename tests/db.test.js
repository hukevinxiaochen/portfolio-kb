const test = require("tape");
const neo4j = require("neo4j-driver");
const actions = require("../server/actions");
const { makeNeo4jDriver } = require("../server/db");

/**
 * INTEGRATION TEST
 */
const testConnectionParams = {
  uri: "bolt://localhost",
  user: "neo4j",
  password: "Neo4j",
};
const driver = makeNeo4jDriver(testConnectionParams);

/**
 * SETUP
 */
test("DB method- createNote", async (t) => {
  // Fail the whole suite if the database is not running
  const session = driver.session();
  let databaseRunning;
  try {
    databaseRunning = await driver.verifyConnectivity();
    t.deepEqual(
      databaseRunning,
      { address: "localhost:7687", version: "Neo4j/4.1.3" },
      `neo4j is running and listening at ${databaseRunning.address} with version: ${databaseRunning.version}`
    );
    const myNote = {
      title: "Diagnosis of simple cystitis in the outpatient setting",
      content:
        "Having history of new dysuria with either frequency or blood AND absence of vaginal discharge raises pre-test probability of simple cystitis to > 90%",
    };
    const result = await actions.createNote(session, myNote);
    t.equal(typeof actions.createNote, "function", "createNote is a function");
    t.equal(result instanceof Array, true, "createNote returns an array");
    t.equal(result.length, 1, "createNote returns an array of length 1");
    t.equal(
      result[0].has("n.title"),
      true,
      "createNote creates a note with a title property"
    );
  } catch (err) {
    t.fail(
      `Neo4j does not appear to be running. None of the DB method tests will run: ${err.message}`
    );
  } finally {
    await session.close();
  }
  t.end();
});

test("neo4j driver can be closed", async (t) => {
  await driver.close();
  t.pass("The neo4j driver was closed successfully.");
});
