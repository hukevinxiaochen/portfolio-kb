const test = require("tape");
const neo4j = require("neo4j-driver");
const actions = require("../server/actions");
const { makeNeo4jDriver } = require("../server/db");

/**
 * INTEGRATION TEST
 */

// Test database parameters
const testConnectionParams = {
  uri: "bolt://localhost",
  user: "neo4j",
  password: "Neo4j",
};

// Instantiates a driver
const driver = makeNeo4jDriver(testConnectionParams);

test("DB method- createNote", async (t) => {
  // Setup
  const session = driver.session();
  let databaseRunning;
  const note = {
    title: "Diagnosis of simple cystitis in the outpatient setting",
    content:
      "Having history of new dysuria with either frequency or blood AND absence of vaginal discharge raises pre-test probability of simple cystitis to > 90%",
  };

  try {
    // verifyConnectivity should throw an error if DB not available
    databaseRunning = await driver.verifyConnectivity();
    t.deepEqual(
      databaseRunning,
      { address: "localhost:7687", version: "Neo4j/4.1.3" },
      `neo4j is running and listening at ${databaseRunning.address} with version: ${databaseRunning.version}`
    );

    // createNote should be able to create a note in the database
    const records = await actions.createNote(session, note);
    t.equal(typeof actions.createNote, "function", "createNote is a function");
    t.equal(records instanceof Array, true, "createNote returns an array");
    t.equal(records.length, 1, "createNote returns an array of length 1");

    const record = records[0];
    const node = record.get("n");

    t.equal(
      node.properties.hasOwnProperty("title"),
      true,
      "createNote creates a note with a title property"
    );
  } catch (err) {
    t.fail(err.message);
  } finally {
    await session.close();
  }
  t.end();
});

test("neo4j driver can be closed", async (t) => {
  await driver.close();
  t.pass("The neo4j driver was closed successfully.");
});
