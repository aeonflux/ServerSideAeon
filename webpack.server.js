const path = require("path");
//Webpack Merge
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const webpackNodeExternals = require("webpack-node-externals");

const config = {
  //Inform webpack that we're building a bundle
  //for NodeJS, rather than for the browser
  target: "node",

  //Tell webpack the root file od our server application
  entry: "./src/index.js",

  //Tell webpack where to put the output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  //Node modules will not be imported inside the server-side bundle
  externals: [webpackNodeExternals()]
};

//Merge base config with the server configuration

module.exports = merge(baseConfig, config);
