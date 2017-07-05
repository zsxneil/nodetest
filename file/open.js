var fs = require('fs')

console.log('准备打开文件')
fs.open('input.txt','r+',(err,data)=>{
    if(err) {
        return console.error(err)
    }
    console.log('文件打开成功')
})