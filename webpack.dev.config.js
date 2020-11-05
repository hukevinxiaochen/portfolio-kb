const path = require("path");

module.exports = {
  entry: "./client/assets/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
