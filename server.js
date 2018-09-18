
// npm packages
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

var db = require("./models");


// access public folder
app.use(express.static("public"));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// import routes
require("./routes/apiRoutes.js")(app);


// sync sequelize & start server
db.sequelize.sync().then(function() {
    app.listen(PORT, function () {
        console.log("PORT " + PORT);
    });
});

