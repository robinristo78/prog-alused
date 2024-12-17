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
    //Start

    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    
    //End
    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        //Start

        console.log("Number of records deleted: " + result.affectedRows);

        //End
    });
}); 