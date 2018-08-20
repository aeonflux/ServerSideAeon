// Returns a string format of HTML

import React from "react";
//Renders a bunch of components one time and produces
//a string out of all of the resulting HTML
//const renderToString = require("react-dom/server").renderToString;
import { renderToString } from "react-dom/server";
//Component to be rendered
//const Home = require("./client/components/Home").default;
import Home from "../client/components/Home";

import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "../client/Routes";

export default (req, store) => {
  const content = renderToString(
    // {{}} used in JSX first set is to indicate we are to pass
    //a javascript variabLE
    //inner set is the actual empty object
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  //use ES6 syntax, backtick
  return `
     <html>
     <head></head>
     <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
     </body>
     </html>
  `;
};
