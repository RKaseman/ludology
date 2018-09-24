
// npm packages
var igdb = require('igdb-api-node').default;
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

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
var client = igdb('302b390b8654112eef2ebb62515bc743');

// import broadcast/receive routes and tell express app instance they exist
require("./routes/api-routes.js")(app);


client.games({
    fields: '*', // Return all fields
    limit: 2, // Limit to 5 results
    offset: 15 // Index offset for results
}).then(response => {
    // response.body contains the parsed JSON response to this query
}).catch(error => {
    throw error;
});

client.characters({
    fields: '*', // Return all fields
    limit: 2, // Limit to 5 results
    offset: 15 // Index offset for results
}).then(response => {
    // response.body contains the parsed JSON response to this query
}).catch(error => {
    throw error;
});
app.get("/", function (req,res){
    // res.send("hello world");
    res.sendFile(path.join(__dirname, "/views/index.html"));
});



//allows user queries to return data on games
app.post("/api/games", function(req, res){
    client.games({
        fields: "*", // Return all fields
        limit: 2, // Limit to 5 results
        // offset: 15, // Index offset for results
        search: req.body.game

        
    }).then(response => {
        // response.body contains the parsed JSON response to this query
        res.send(response);
    }).catch(error => {
        throw error;
    });

});



//allows user queries to return data on characters
app.post("/api/characters", function(req, res){
    client.characters({
        fields: "*", // Return all fields
        limit: 5, // Limit to 5 results
        // offset: 15, // Index offset for results
        search: req.body.character
    }).then(response => {
        // response.body contains the parsed JSON response to this query
        res.send(res);
        
                }).catch(error => {
                    throw error;
                });
                
            })



db.sequelize.sync().then(function() {
    app.listen(PORT, function () {
        console.log("PORT " + PORT);
    });
});

