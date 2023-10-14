const mysql = require('mysql2');

// create a new MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wise'
});
// connect to the MySQL database
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database:', error);
    } else {
        console.log('Connected to wise database!');
    }
});
connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM state_county_list", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
// Export the 'connection' object, so it can be used in other files
module.exports = connection;
// close the MySQL connection
// connection.end();