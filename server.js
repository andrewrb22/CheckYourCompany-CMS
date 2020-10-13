// require inquirer and MySQL

const inquirer = require("inquirer");
const mysql = require("mysql");

// connection for the sql database
var connection = mysql.createConnection({
    host: "localhost",


    port: 8080,

    // Your username
    user: "root",

    // Your password
    password: "Marzo2203!",
    database: "employees"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;

});