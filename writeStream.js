var fs = require('fs')
var data = '测试写入流啊哦哦'

var writerStream = fs.createWriteStream('output.txt')

writerStream.write(data,'UTF8')

writerStream.end()

writerStream.on('finish',()=>{
    console.log('写入完成')
})

writerStream.on('error',(err)=>{
    console.log(err.stack)
})

console.log('程序执行完毕')