var http = require('http')
var querystring = require('querystring')

var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

  http.createServer((request,response)=>{
      var body = ""
      request.on('data',(chunk)=>{
          body += chunk;
      })

      request.on('end',()=>{
          body = querystring.parse(body)
          response.writeHead(200,{'Content-Type':'text/html;charset=utf8'})

          
          if(body.name && body.url) {
                console.log(body)
                response.write("网站名：" + body.name);
                response.write("<br>");
                response.write("网站 URL：" + body.url);
          } else {
              response.write(postHTML)
          }
          response.end()
      })
  }).listen(3000)