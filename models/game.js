
module.exports = function (sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        name: DataTypes.STRING,
        col1: DataTypes.STRING,
        col2: DataTypes.STRING,
        col3: DataTypes.STRING
    });
    return Game;
};

