require("dotenv").config();
import compose from "../g7r";
const path = require("path");
const fs = require("fs");

const writePath = path.resolve(__dirname, "..", "dist", "index.html");
const writeDir = path.resolve(__dirname, "..", "dist");
const build = (destDir = "dist", destFile = "index.html") => {
  return {
    destDirExists: fs.existsSync(destDir),
    destFileExists: fs.existsSync(path.join(destDir, destFile)),
  };
};

if (!process.env.TEST) {
  const { destDirExists, destFileExists } = build(writeDir, writePath);
  if (destDirExists) {
    fs.writeFile(writePath, compose(), () => {
      console.log("Successfully built index.html");
    });
  } else {
    fs.mkdirSync(writeDir);
    fs.writeFile(writePath, compose(), () => {
      console.log("Successfully built index.html");
    });
  }
}

module.exports = build;
