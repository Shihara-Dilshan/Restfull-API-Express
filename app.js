const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config');

//ROUTES
app.get("/", (req, res) => {
  res.send("my first end point");
});

//connect to the DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);

//LISTEN TO THE SERVER
app.listen(3000);
