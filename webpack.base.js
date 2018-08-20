module.exports = {
  //Tell webpack to run babel on every file
  //it runs through

  module: {
    rules: [
      {
        //run on JS files only
        test: /\.js?$/,
        //transpiles code
        loader: "babel-loader",
        //not run babel on some directories
        exclude: /node_modules/,
        options: {
          presets: [
            //JSX to JS
            "react",
            //Some Asynchronous code,
            "stage-0",
            //Master preset , run all transforms rules needed to
            //meet the requirements of last 2 versions of browsers
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
