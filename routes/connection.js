const mysql = require('mysql');


const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password: '0217',
    database: 'nodelogin',
    waitForConnections : true,
});

module.exports = connection;