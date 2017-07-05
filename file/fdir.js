var fs = require('fs')
var util = require('util')

console.log('创建目录')

fs.readdir('./',(err,files)=>{
    files.forEach((file)=>{
        if(file == 'nextdir') {
            console.log('已存在，先删除')
            fs.rmdirSync('nextdir')
        }
    })

        fs.mkdir('nextdir',(err)=>{
            if(err) {
                return console.error(err)
            }
            console.log("目录创建成功")
        })

        //读取文件目录
        fs.readdir('./',(err,files)=>{
            if(err) {
                return console.error(err)
            }

            files.forEach((file)=>{
                fs.stat(file,(err,stats) => {
                    console.log(file + " isFile:" + stats.isFile())
                })
            })
        })

    
})

