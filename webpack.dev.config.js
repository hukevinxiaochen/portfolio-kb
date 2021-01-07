const path = require("path");

module.exports = (env = { NODE_ENV: "development" }) => {
  return {
    entry: "./client/assets/js/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
};
