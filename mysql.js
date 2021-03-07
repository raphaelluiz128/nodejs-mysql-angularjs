const mysql = require('mysql');

var pool = mysql.createPool({
    "user": "root",
    "password" : "123123",
    "database" : "tasks-saipos",
    "host" : "localhost",
    "port": 3306
});

exports.pool = pool;