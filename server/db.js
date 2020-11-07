const neo4j = require("neo4j-driver");

const connectionParams = {
  uri: "bolt://localhost",
  user: "neo4j",
  password: "neo4j",
};

const driver = neo4j.driver(
  connectionParams.uri,
  neo4j.auth.basic(connectionParams.user, connectionParams.password)
);
const session = driver.session();
const givenName = "Kevin";

(async () => {
  try {
    const result = await session.run(
      "CREATE (k:Author {givenName: $givenName}) RETURN k",
      {
        givenName: givenName,
      }
    );
    const singleRecord = result.records[0];
    const node = singleRecord.get(0);

    console.log(node.properties.givenName);
  } catch (err) {
    console.log(err.code, err.message, err.stack);
  } finally {
    await session.close();
  }

  await driver.close();
})();
