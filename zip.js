var fs = require('fs')
var zlib = require('zlib')

var readerStream = fs.createReadStream("F:\\sql.txt")
var gzip = zlib.createGzip();
var writerStream = fs.createWriteStream('sql.gz')

readerStream.pipe(gzip).pipe(writerStream)

writerStream.on('finish',()=>{
   console.log('文件压缩完成')
})

// 压缩 input.txt 文件为 input.txt.gz
// fs.createReadStream('F:\\k.zip')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('k.gz'))

console.log('程序执行完成')