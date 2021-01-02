const neo4j = require("neo4j-driver");

/**
 * makeNeo4jDriver
 *
 * @param {object} connectionParams - a JavaScript object with properties
 *   uri, user, password that correspond to a Neo4j instance.
 */
const makeNeo4jDriver = (
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
  return driver;
};

module.exports = {
  makeNeo4jDriver,
};
