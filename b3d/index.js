require("dotenv").config();
import compose from "../g7r";
const path = require("path");
const fs = require("fs");

/**
 * build
 *
 * @param {string} destDir - the name of the directory in which to output
 * a completed static site.
 * @param {string} destFile - the filename of the final site,
 * statically rendered.
 */
const build = (destDir = "dist", destFile = "index.html") => {
  return {
    destDirExists: fs.existsSync(destDir),
    destFileExists: fs.existsSync(path.join(destDir, destFile)),
  };
};

// private
const writePath = path.resolve(__dirname, "..", "dist", "index.html");
const writeDir = path.resolve(__dirname, "..", "dist");

// output some HTML using compose
// when run in PRODUCTION mode
if (!process.env.TEST) {
  const { destDirExists, destFileExists } = build(writeDir, writePath);
  compose().then((htmlData) => {
    if (destDirExists) {
      fs.writeFile(writePath, htmlData, () => {
        console.log("Successfully built index.html");
      });
    } else {
      fs.mkdirSync(writeDir);
      fs.writeFile(writePath, htmlData, () => {
        console.log("Successfully built index.html");
      });
    }
  }).catch((error) => {
    console.log("We caught an error!")
    console.error(error)});
}

module.exports = build;
