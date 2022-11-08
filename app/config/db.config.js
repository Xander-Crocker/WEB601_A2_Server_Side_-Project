//const mysql = require('sequelize');

    module.exports = {
        HOST: 'localhost',
        USER: 'root',
        PASSWORD: 'Archenemy042',
        DB: 'WEB601_A2_Server_Side_Project',
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    };