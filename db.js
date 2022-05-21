const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "55785578nN",
    database: "task",
});

con.connect(function(err) {
    if (err) {
        return console.error('cannot connect: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

module.exports = con;