/**
 * createNode
 *
 * @function
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
  createNote,
};
