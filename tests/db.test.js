const test = require("tape");
const neo4j = require("neo4j-driver");
const actions = require("../server/actions");

/**
 * INTEGRATION TEST
 */
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
test("DB method- createNote", async (t) => {
  // Fail the whole suite if the database is not running
  const sessionOnSystem = driver.session({ database: "system" });
  let databaseRunning;
  try {
    const defaultDB = await sessionOnSystem.run("SHOW DEFAULT DATABASE");
    const name = defaultDB.records[0].get("name");
    databaseRunning = true;
    await sessionOnSystem.close();
    t.equal(
      databaseRunning,
      true,
      `neo4j is running, the default DB's name is: ${name}`
    );
    const session = driver.session();
    const myNote = {
      title: "Diagnosis of simple cystitis in the outpatient setting",
      content:
        "Having history of new dysuria with either frequency or blood AND absence of vaginal discharge raises pre-test probability of simple cystitis to > 90%",
    };
    const result = await actions.createNote(session, myNote);
    await session.close();
    t.equal(typeof actions.createNote, "function", "createNote is a function");
    t.equal(result instanceof Array, true, "createNote returns an array");
    t.equal(result.length, 1, "createNote returns an array of length 1");
    t.equal(
      result[0].has("n.title"),
      true,
      "createNote creates a note with a title property"
    );
  } catch (err) {
    await sessionOnSystem.close();
    t.fail(
      `Neo4j does not appear to be running. None of the DB method tests will run: ${err.message}`
    );
  }
  t.end();
});

test("neo4j driver can be closed", async (t) => {
  await driver.close();
  t.pass("The neo4j driver was closed successfully.");
});
