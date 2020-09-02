// use the terminal option at the top left to create a new terminal
// run "npm install mysql"
// run "node ./test.js"

var mysql = require('mysql')

// create connection to db
var connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
})


connection.connect()

//display contents of db
connection.query('SELECT testString, testInt from Test;', function (err, rows, fields) {
  if (err) throw err

  rows.forEach(element => {
     console.log(element); 
  });
})


// insert item into db
connection.query("INSERT INTO Test VALUES ('stringstringstring', 5)")

connection.end()
 
