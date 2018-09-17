
// npm packages
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();


// get public folder's files (css, javascript)
app.use(express.static("public"));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// import routes
// var routes = require("./controllers/burgers_controller.js");
// app.use(routes);


// start server
app.listen(PORT, function () {
    console.log("PORT " + PORT);
});

