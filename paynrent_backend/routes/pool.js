var mysql= require('mysql')

var pool=mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3306,
    database:'paynrent',
    password:'123',
    connectionLimit:100,
    multipleStatements:true,
})


module.exports=pool