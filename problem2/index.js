var express = require("express");
var port = 3000;

var app = express();

app.get("/", (request, response) => {
  response.end("Home page");
})

app.get('/getUsersAPI', (request, response) => {

})

app.get('/getUsersAPI', (request, response) => {
  fs.readFile(__dirname+"/data/users.json", "utf-8", (err, results) => {
    if(err) {
      throw err;
    } else {
      response.end();
    }
  })
})
app.listen(port);
