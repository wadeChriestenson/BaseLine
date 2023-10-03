
const mysql = require('mysql2');
// const state_id =
// create a new MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wise'
});
// connect to the MySQL database
// connection.connect((error) => {
//     if (error) {
//         console.error('Error connecting to MySQL database:', error);
//     } else {
//         console.log('Connected to MySQL database!');
//     }
// });

connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM state_county_list", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
// close the MySQL connection
// connection.end();