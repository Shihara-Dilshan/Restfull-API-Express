const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv/config');

//USE BODY PARSER
app.use(bodyParser.json())

//IMPORT ROUTES
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

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
app.listen(3001);
