
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

<<<<<<< HEAD

// parse application/x-www-form-urlencoded looks at url feed
=======
// parse application/x-www-form-urlencoded
>>>>>>> 35b6d90ec434189c8d6420e9e851d503cea0a2da
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

