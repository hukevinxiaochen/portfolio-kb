const neo4j = require("neo4j-driver");

/**
 * makeNeo4jDriver
 *
 * @param {object} connectionParams - a JavaScript object with properties
 *   uri, user, password that correspond to a Neo4j instance.
 */
const makeNeo4jDriver = async (
  query,
  connectionParams = {
    uri: "bolt://localhost",
    user: "neo4j",
    password: "Neo4j",
  }
) => {
  const driver = neo4j.driver(
    connectionParams.uri,
    neo4j.auth.basic(connectionParams.user, connectionParams.password)
  );
  try {
    await driver.verifyConnectivity();
    return driver;
  } catch (err) {
    console.log(`verifyConnectivity failed: ${error}`);
  }
};

/**
 * queryDB - a function to which we can pass a Cypher query
 * and get back the results object
 *
 * @param {string} query - a Cypher query as a JavaScript string
 * TODO: Test this function
 */
const queryDB = async (query, driver) => {
  const session = driver.session();
  try {
    const result = await session.run(query);
    return result;
  } catch (err) {
    throw err;
  } finally {
    await session.close();
  }
};

module.exports = {
  makeNeo4jDriver,
  queryDB,
};
