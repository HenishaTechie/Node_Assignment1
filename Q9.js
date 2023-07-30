const mysql = require('nodejs-mysql').default;

const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
}

const db = mysql.getInstance(config)

db.connect()
    .then(function(){
        console.log("Connected!");
        var sql = "INSERT INTO employee (emp_id,emp_name,city,salary) VALUES (2,'Het','Surat',40000)";
        return db.exec(sql);    
    }).then(function(res){
        console.log(res);
        return db.exec("SELECT * FROM employee");
    }).then(function(result){
        for (var i in result) {
            console.log(result[i].emp_id + " : " +result[i].emp_name+ "  " +result[i].city+ "   " +result[i].salary);
        }
        process.exit(0);
    }).catch(function(err){
        console.log("Error");
        process.exit(0);
    })