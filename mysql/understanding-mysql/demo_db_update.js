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

    var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    
    //End
    con.query(sql, (err, result) => {
        if (err) throw err;
        //Start

        console.log(result.affectedRows + " record(s) updated");

        //End
    });
}); 