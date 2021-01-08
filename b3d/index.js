require("dotenv").config();
const { compose, generateJSX } = require("../g7r");
const path = require("path");
const fs = require("fs");

// BUILDS and WRITES JSX and HTML from MDX
// JSX is for the client and the HTML is output of ReactDOMServer.renderToString

/**
 * planBuild -
 *
 * @param {string} destDir - the name of the directory in which to output
 * a completed static site.
 * @param {string} destFile - the filename of the final site,
 * statically rendered.
 */
const planBuild = (destDir = "dist", destFile = "index.html") => {
  return {
    destDirExists: fs.existsSync(destDir),
    destFileExists: fs.existsSync(path.join(destDir, destFile)),
  };
};

// WRITE PATHS
const writePath = path.resolve(__dirname, "..", "dist", "index.html");
const writeDir = path.resolve(__dirname, "..", "dist");

// WRITE JSX
generateJSX()
  .then((result) => console.log(result))
  .catch((err) => {
    throw err;
  });

// WRITE HTML IF IN PRODUCTION MODE
if (!process.env.TEST) {
  const { destDirExists, destFileExists } = planBuild(writeDir, writePath);
  compose()
    .then((htmlData) => {
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
    })
    .catch((error) => {
      console.log("We caught an error!");
      console.error(error);
    });
}

module.exports = planBuild;
