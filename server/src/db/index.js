const mysql = require("mysql");
require('dotenv').config()

let connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: "new-live"
});

// connection.connect();
connection.connect(function (err) {
	if (err) throw err;
	// console.log("Connected!");
});
module.exports = connection;