import "babel-polyfill";
//route file of the server application
//const express = require("express");
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

// Treat as a public directory visible to the outside world
app.use(express.static("public"));

//Route handle to listen to root route of the application
app.get("*", (req, res) => {
  const store = createStore();
  // Some logic to initialize and load data into the store

  //express side rendering
  //req holds the URL
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
