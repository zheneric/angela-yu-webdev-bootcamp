//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent =
  "A place to make an anonymous post. Click on the Compose button in the navigation bar to get started.";
const aboutContent =
  "This was made as part of a web development bootcamp course.";
const contactContent = "You know where to find me.";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded());
app.use(express.static("public"));

let posts = [];

app.get("/", function (req, res) {
  res.render("home", {
    homeStartingContent: homeStartingContent,
    posts: posts,
  });
});

app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };

  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postName", function (req, res) {
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(function (post) {
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("post", { post: post });
    }
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started running");
});
