const mysql = require('mysql2');

module.exports = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Archenemy042',
        database: 'WEB601_A2_Server_Side_Project'
    }
)