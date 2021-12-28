const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'rodo',
  password: 'rodo',
  database: 'music',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }

  console.log(`connected as id ${connection.threadId}`);
});

// connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

connection.end();
