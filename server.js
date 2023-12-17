const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here

app.use(express.static(__dirname + "/src/public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/index.html"));
});

app.get("/gallery/all", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/gallery/all/index.html"));
});

app.get("/gallery/evm/ETH", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/gallery/evm/ETH/index.html"));
});

app.get("/pool/all", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/pool/all/index.html"));
});

app.get("/profile/all", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/profile/all/index.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
