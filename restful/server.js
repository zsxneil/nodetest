var express = require('express')

var app = express()

var fs = require('fs')

app.get('/listUsers',(req,res)=>{
    fs.readFile('user.json','utf8',(err,data)=>{
        console.log(data)
        res.send(data)
    })
})

var server = app.listen(8081,()=>{
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})