const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'freedb.tech',
    port: '3306',
    user: 'freedbtech_Ehtisham',
    password: 'prince02173061',
    database: 'freedbtech_fullmoon',
    waitForConnections : true,
});

module.exports = connection;
