var url = require('url')
var http = require('http')
var util = require('util')

http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})

    //解析url参数
    var params = url.parse(request.url,true).query;
    response.write('网站名：' + params.name)
    response.write('\n')
    response.write('网站URL：' + params.url)
    response.end()
}).listen(3000)

/**
 * http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com
 */