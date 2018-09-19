
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
        console.log(req.body);
        db.Game.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function (dbGame) {
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

