//dependencies
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cors = require("cors");
var sequelize = require("./models").sequelize;
const nodemailer = require("nodemailer");

//env variables (dotenv is a dependency)
require("dotenv").config();

//models
var Contact = require("./models").Contact;

//calls
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

//nodemailer transporter
const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  secure: true,
});

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
    //add to db
    Contact.create(body);
    //send email
    const mailData = {
      from: body.email,
      to: "shawnkelley7@gmail.com",
      subject: "Inquiry from WhitneyKelley.com",
      text: `From ${body.firstName} ${body.lastName} @ ${body.email} : ${body.message}`,
    };

    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        return console.error("Email error! ", err);
      }
    });

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
