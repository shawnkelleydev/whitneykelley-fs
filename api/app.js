var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cors = require("cors");
var sequelize = require("./models").sequelize;

//models
var Contact = require("./models").Contact;

//dependencies
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Activate Sequelize
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
})();

(async () => {
  try {
    await sequelize.sync();
    console.log("Sync successful");
  } catch (err) {
    console.error("Sync error: ", err);
  }
})();

/*
==============================================================
*/

//routes

app.get("/api", async (req, res) => {
  try {
    res.status(200).send("I'm awake!!!");
  } catch (err) {
    console.error(err);
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const body = req.body;
    Contact.create(body)
      .then((data) => console.log(data))
      .catch((err) => console.err("Man down! ", err));
    res.status(201).send();
  } catch (err) {
    console.error("Man down! ", err);
    res.status(400).send();
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
