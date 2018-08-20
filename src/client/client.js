import "babel-polyfill";
//Startup point for the client side application

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

// Redux libraries
//createStore - redux store
//applyMiddleware - hook up middlewares
// thunk - async action creators
// Provider - ties up store with the React part of the application
// connect store to all components

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// Reducers
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));

//process of re-rendering over the once rendered(server) HTML
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
