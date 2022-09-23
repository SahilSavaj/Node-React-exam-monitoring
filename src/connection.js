var sql = require('mssql');


var con = {
    host: "ec2-52-207-90-231.compute-1.amazonaws.com",
    user: "lwwkvpsrjarzfe",
    password: "57da08bf792a60fdf834f5e43958b0b0b70027564c035aa43f480f2e12d20ffb",
    database : 'dbbp6ebo0ffo4d'
  };


con.connect(con,function(err) {

    if (err) console.log(err);
    let request  = new sql.Request();

    request.query('select * from public.users', function(err, recordset){
        if (err) console.log(err)
            res.send(recordset);
         
    });
  });