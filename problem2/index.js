var express = require("express");
var port = 3000;

var app = express();

app.get("/", (request, response) => {
  response.end("Home page");
})

app.listen(port);
