var fs = require('fs')
var buf = new Buffer(1024)

console.log('准备打开已存在的文件')

fs.open('input.txt','r+',(err,fd)=>{
    console.log(fd)
    if(err) {
        return console.error(err)
    }

    console.log("文件打开成功！");
    console.log("准备读取文件：");

    fs.read(fd,buf,0,buf.length,0,(err,bytes)=>{
        if(err) {
            console.log(err)
        }
        console.log(bytes + " 字节被读取")

        //仅输出读取的字节
        if(bytes > 0) {
            console.log(buf.slice(0,bytes).toString())
        }

        //关闭文件
        fs.close(fd,(err)=>{
            if(err) {
                console.log(err)
            }
            console.log('文件关闭成功')
        })
    })
})
console.log('程序执行完毕')