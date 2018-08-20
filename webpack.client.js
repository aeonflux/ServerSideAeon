const path = require("path");
//Webpack Merge
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  //Tell webpack the root file of client side codebase
  entry: "./src/client/client.js",

  //Tell webpack where to put the output file
  // that is generated into a public folder
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
  //Tell webpack to run babel on every file
  //it runs through
};

//Merge base config with the cliengt configuration

module.exports = merge(baseConfig, config);
