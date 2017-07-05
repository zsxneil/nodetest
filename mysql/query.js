var mysql = require('mysql')
var connection = mysql.createConnection({
    host        :'localhost',
    port        :3306,
    user        :'root',
    password    :'123456',
    database    :'localtest'
})

connection.connect()

var sql = 'select * from websites'

connection.query(sql,(err,result)=>{
    if(err) {
        console.log('[SELECT ERROR] - ',err.message)
        return
    }
    console.log('----------------select------------------')
    console.log(result)
    console.log('----------------------------------------')
})

connection.end()