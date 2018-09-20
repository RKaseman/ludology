
var db = require("../models");

// function expression for express instance var app does
module.exports = function (app) {

    // an express look at the /api/games db, running function expression expecting request and response does
    app.get("/api/games", function (req, res) {
        // 
        db.Game.findAll({
        // after read, function expression expecting dbGame does
        }).then(function (dbGame) {
            // response in jsn format
            res.json(dbGame);
        });
        // end of .then
    });

    app.post("/api/games", function (req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        db.Game.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function (dbGame) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbGame);
        });
    });

    app.delete("/api/games/:id", function (req, res) {
        db.Game.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbGame) {
            res.json(dbGame);
        });
    });

    app.put("/api/games", function (req, res) {
        db.Game.update({
            text: req.body.text,
            complete: req.body.complete
        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbGame) {
                res.json(dbGame);
            });
    });
};

