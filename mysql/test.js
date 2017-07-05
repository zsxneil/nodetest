var mysql = require('mysql')
var connection = mysql.createConnection({
    host    :'localhost',
    user    :'root',
    password  : "123456",
    database    : 'localtest'
})

connection.connect()

connection.query('select 1 + 1 as solution',(error,results,fields)=>{
    if(error) throw error
    console.log('the solution is : ' + results[0].solution)
})
