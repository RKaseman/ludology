
// mySQL connection
var Sequelize = require("sequelize");


var sequelize = new Sequelize("vgresources_db", "root", "root", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


connection.connect(function (error) {
    if (error) {
        console.log("Connection error" + error.stack);
        return;
    }
    console.log("Connection id " + connection.threadId);
});


// to orm.js
module.exports = connection;

