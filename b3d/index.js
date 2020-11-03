import compose from "../g7r";
const path = require("path");
const fs = require("fs");

const writePath = path.resolve(__dirname, "..", "dist", "index.html");

fs.writeFile(writePath, compose(), () => {
  console.log("Successfully built index.html");
});
