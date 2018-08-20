// Create the Redux store

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import reducers from "../client/reducers";

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
};
