
var db = require("../models");

module.exports = function (app) {

    app.get("/api/games", function (req, res) {
        db.Game.findAll({}).then(function (dbGame) {
            res.json(dbGame);
        });
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
