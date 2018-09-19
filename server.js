
// npm packages
var express = require("express");
var bodyParser = require("body-parser");

// port for 1 of 2 possible connections dependent on environment
var PORT = process.env.PORT || 8080;

// access the express dictionary
var app = express();

// defining database as the file(s) in the /models folder
var db = require("./models");


// tell express app instance to look in /public folder for static files
app.use(express.static("public"));


// parse application/x-www-form-urlencoded looks at url feed
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// import broadcast/receive routes and tell express app instance they exist
require("./routes/api-routes.js")(app);


// initial sync of db defined by sequelize and finish, then anonymous function
db.sequelize.sync().then(function() {
    // connect the defined PORT, start server
    app.listen(PORT, function () {
        // print port info in the cmd window
        console.log("PORT " + PORT);
    });
});

