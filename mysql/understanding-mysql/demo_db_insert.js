var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "dbuser",
    password: "qwerty",
    database: "mydb"
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    var sql = "INSERT INTO customers (name, address) VALUE ('Company Inc', 'Highway 37')";

    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
    });
}); 