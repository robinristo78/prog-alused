var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "dbuser",
    password: "qwerty",
    database: "mydb"
});

con.connect((err) => {
    if (err) throw err;
    
    var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";

    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
    });
}); 