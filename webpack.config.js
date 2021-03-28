const path = require("path");
const mode = process.env.NODE_ENV || "development";

// localhost:8080/
module.exports = {
  mode: mode,
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    historyApiFallback: true,
  },
  // entry point
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
  output: {
    filename: "bundle.js",
  },
};
