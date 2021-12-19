var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cors = require("cors");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/*
==============================================================
*/

//routes

app.get("/", async (req, res) => {
  try {
    res.status(200).send("I'm awake!!!");
  } catch (err) {
    console.error(err);
  }
});

/*
==============================================================
*/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
});

/*
==============================================================
*/

//server

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Server active on port ${port}`);
});

module.exports = app;
