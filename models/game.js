
module.exports = function (sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    }, {
        timestamps: false
    });
    return Game;
};

