var fs = require('fs')

fs.stat('input.txt',(err,stats)=>{
    console.log(stats)
    console.log('是否为文件：' + stats.isFile())
})