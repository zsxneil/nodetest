var express = require('express')
var util = require('util')
var app = express()

app.get('/',(req,resp)=>{
    //console.log(util.inspect(req,true))
    resp.send('Hello World')
})

var server = app.listen(8081,()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})