//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h1>Contact me at ericczheng@outlook.com</h1>");
});

app.get("/about", function (req, res) {
  res.send(
    "Hi! I'm studying Commerce / Computer Science at UNSW. I have a 477 streak on Duolingo, and I want to be like Kobe."
  );
});

app.get("/hobbies", function (req, res) {
  res.send("I like to learn");
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
