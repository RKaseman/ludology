var igdb = require('igdb-api-node').default;
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))
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
    res.sendFile(path.join(__dirname, "/public/main.html"));
});

app.post("/api/games", function(req, res){
    console.log(req.body);
    client.games({
        fields: '*', // Return all fields
        limit: 1, // Limit to 5 results
        offset: 15 // Index offset for results
    }).then(response => {
        // console.log(response);
        // response.body contains the parsed JSON response to this query
        res.send(response);
    }).catch(error => {
        throw error;
    });
    
})



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
   });