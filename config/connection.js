// DEPENDENCIES
// ================================================
const mysql = require('mysql');
let connection;


// DATABESE CONNECTION
// ================================================
// Configure connection.
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bookish_db"
  });
}


// Make connexction.
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
})

// Export connection.
module.exports = connection;



//////// RESEARCH ////////
// console.error()?
// err.stack?
// connection.threadId?