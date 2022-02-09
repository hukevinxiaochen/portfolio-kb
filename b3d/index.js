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
 * @returns {Object} - a true/false mapping telling whether destDir and 
 * destFile exist.
 */
const planBuild = (destDir = "dist", destFile = "index.html") => {
  return {
    destDirExists: fs.existsSync(destDir),
    destFileExists: fs.existsSync(path.join(destDir, destFile)),
  };
};

// WRITE PATHS
// assign where to write newly built HTML files.
const writePath = path.resolve(__dirname, "..", "dist", "index.html");
const writeDir = path.resolve(__dirname, "..", "dist");

// WRITE JSX
// call the asynchronous JSX generation code to generate our JSX.
generateJSX()
  .then((result) => console.log(result))
  .catch((err) => {
    throw err;
  });

// WRITE HTML IF IN PRODUCTION MODE
// destructure and assign results of planBuild
// call compose to generate the htmlData
// check planBuild results for whether destDirExists
// - if so, write or overwrite htmlData into index.html
// - if not, create the dir and then do as above
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
