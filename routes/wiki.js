const express = require("express");
const router = express.Router();

//Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
