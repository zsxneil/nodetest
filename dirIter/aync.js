var fs = require('fs')
var pathutil = require('path')

var root = pathutil.join('F:\\k')

readDir(root)
function readDir(path) {
    fs.readdir(path,(err,files)=>{
        if(!files) return;
        files.forEach((ele,index)=>{
            fs.stat(path + pathutil.sep + ele,(err,info)=>{
                if(info.isDirectory()) {
                    //console.log("dir:" + ele)
                    readDir(path + pathutil.sep + ele)
                } else {
                    console.log("file:"+ path + pathutil.sep + ele)
                }
            })
        })
    })
}