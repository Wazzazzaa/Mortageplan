const mysql = require('mysql')
//DB connection
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mortageplan',
  port     : 3306
});
connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});
//Get customers info from DB
  connection.query("SELECT * FROM customers", function(err, result) {
    if (err) throw err;
    let jsonresult = JSON.stringify(result);
    let obj = JSON.parse(jsonresult);

    //Calculate and print out fixed monthly payment
    let arrayl = result.length;
    for (let i = 0; i < arrayl; i++) {
      let A = obj[i].customer;
          let x = obj[i].loan;
          let y = obj[i].interest / 100 /12;
          let z = obj[i].years * 12;
      let E = x * (y* (1 + y) ** (z)) / (((1 + y ) ** (z ) - 1));
console.log(A+ " " + E.toFixed(2));
    }
  });