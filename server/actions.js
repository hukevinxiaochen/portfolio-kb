/**
 * queryDB - a function to which we can pass a Cypher query
 * and get back the results object
 *
 * @param {string} query - a Cypher query as a JavaScript string
 * @param {Driver} driver - Neo4j driver instance
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

/**
 * createNote
 *
 * @arg {Session} session - The neo4j-driver Session to use to create a note.
 * @arg {object} note - The object representing a note with properties title,
 *   content, etc.
 * @arg {object} author - The object representing the author or authors of the note.
 */
const createNote = async (session, note, author) => {
  let result = [];
  try {
    const queryReturn = await session.run(
      "MERGE (n:Note {title: $title, content: $content}) RETURN n",
      note
    );
    result = queryReturn.records;
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  queryDB,
  createNote
};
