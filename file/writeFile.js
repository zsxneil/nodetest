var fs = require('fs')

console.log('准备写入文件')

fs.writeFile('output.txt','我是写入的文件内容',{'flag':'a'},(err)=>{
    if(err) {
        return console.error(err)
    }

    console.log('数据写入成功！')

    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");

    fs.readFile('output.txt',(err,data)=>{
        if(err) {
            return console.error(err)
        }
        console.log('异步读取文件数据：' + data)
    })
})