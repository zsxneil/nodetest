var url = require('url')
var http = require('http')
var util = require('util')

http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
    response.end(util.inspect(url.parse(request.url,true)))
}).listen(3000)

/**
 * http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com
 */