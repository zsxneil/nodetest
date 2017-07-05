var express = require('express')
var app = express()

//此处的文件夹路径为相对于当前文件的路径
app.use(express.static('public'))

app.get('/',(req,resp)=>{
    resp.send("Hello World")
})


var server = app.listen(8081,()=>{
    var host = server.address().address
    var port = server.address().port
    
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})