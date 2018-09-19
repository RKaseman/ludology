
// npm packages
var igdb = require('igdb-api-node').default;
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();

var db = require("./models");


// access public folder
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
var client = igdb('302b390b8654112eef2ebb62515bc743');



client.games({
    fields: '*', // Return all fields
    limit: 5, // Limit to 5 results
    offset: 15 // Index offset for results
}).then(response => {
    // console.log(response);
    // response.body contains the parsed JSON response to this query
}).catch(error => {
    throw error;
});

client.characters({
    fields: '*', // Return all fields
    limit: 5, // Limit to 5 results
    offset: 15 // Index offset for results
}).then(response => {
    // console.log(response);
    // response.body contains the parsed JSON response to this query
}).catch(error => {
    throw error;
});
app.get("/", function (req,res){
    // res.send("hello world");
    res.sendFile(path.join(__dirname, "/views/main.html"));
});

//allows user queries to return data on games
app.post("/api/games", function(req, res){
    console.log(req.body.game);
    client.games({
        fields: "*", // Return all fields
        limit: 5, // Limit to 5 results
        // offset: 15, // Index offset for results
        search: req.body.game

        
    }).then(response => {
        // console.log(response);
        // response.body contains the parsed JSON response to this query
        res.send(response);
    }).catch(error => {
        throw error;
    });
    
})
    //allows user queries to return data on characters
    app.post("/api/characters", function(req, res){
    console.log(req.body.character);
                client.characters({
                    fields: "*", // Return all fields
                    limit: 5, // Limit to 5 results
                    // offset: 15, // Index offset for results
                    search: req.body.character
                }).then(response => {
                    // console.log(response);
                    // response.body contains the parsed JSON response to this query
                    res.send(response);
                }).catch(error => {
                    throw error;
                });
                
            })

// import routes
require("./routes/api-routes.js")(app);


// sync sequelize & start server
db.sequelize.sync().then(function() {
    app.listen(PORT, function () {
        console.log("PORT " + PORT);
    });
});

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//    });

// ======================================================================== API connection

// var igdb = require('igdb-api-node').default;
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");


// Sets up the Express App
// =============================================================
// var app = express();
// var PORT = 3000;

// Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static('public'))
// var client = igdb('302b390b8654112eef2ebb62515bc743');

// client.games({
//     fields: '*', // Return all fields
//     limit: 5, // Limit to 5 results
//     offset: 15 // Index offset for results
// }).then(response => {
//     // console.log(response);
//     // response.body contains the parsed JSON response to this query
// }).catch(error => {
//     throw error;
// });

// client.characters({
//     fields: '*', // Return all fields
//     limit: 5, // Limit to 5 results
//     offset: 15 // Index offset for results
// }).then(response => {
//     // console.log(response);
//     // response.body contains the parsed JSON response to this query
// }).catch(error => {
//     throw error;
// });

// app.get("/", function (req,res){
//     // res.send("hello world");
//     res.sendFile(path.join(__dirname, "/public/main.html"));
// });

// app.post("/api/games", function(req, res){
//     console.log(req.body.game);
//     client.games({
//         fields: "*", // Return all fields
//         limit: 5, // Limit to 5 results
//         // offset: 15, // Index offset for results
//         search: req.body.game
        
//     }).then(response => {
//         // console.log(response);
//         // response.body contains the parsed JSON response to this query
//         res.send(response);
//     }).catch(error => {
//         throw error;
//     });
    
// })



// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//    });

