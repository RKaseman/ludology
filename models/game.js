
// // Sequelize standard library
// var Sequelize = require("sequelize");
// // sequelize db connection
// var sequelize = require("../config/connection.js");

// // vg model
// var Chirp = sequelize.define("chirp", {
//   author: Sequelize.STRING,
//   body: Sequelize.STRING,
//   created_at: Sequelize.DATE
// });

// // Syncs with DB
// Chirp.sync();

// // Makes the Chirp Model available for other files (will also create a table)
// module.exports = Chirp;

// --------------------------------------------------------

var newCol;
var newData;

module.exports = function (sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        name: DataTypes.STRING,
        newCol: DataTypes.BOOLEAN
    });
    return Game;
};

