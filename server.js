// require inquirer and MySQL

const inquirer = require("inquirer");
const mysql = require("mysql");
const { start } = require("repl");

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
startprompt();
});

function startprompt() {
inquirer.prompt([
    {
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices:["Add","View","Update","Delete"]
},
{
    name:"option",
    type:"list",
    message:"Select from the options below",
    choices:["Employee","Role","Department"]
    

},

// swicth to the next prompt base on the previews answers 

]) .then(function (res) {
    console.log(`You chose to ${res.action} a ${res.option}`);

    switch (res.action) {
        case "Add":
            createData(res.option);
            break;
        case "View":
            readData(res.option);
            break;
        case "Update":
            updateData(res.option);
            break;
        case "Delete":
            deleteData(res.option);
            break;
    }
})
.catch(function (err) {
    console.log(err);
})
}
    
