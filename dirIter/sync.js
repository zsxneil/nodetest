var fs = require('fs')
var path = require('path')
var util = require('util')

var root = path.join('F:\\test')
console.log(root)

//遍历文件夹，并以指定基准输出
readDirSync(root,"base")
function readDirSync(path,base) {
    if(base == undefined) {
        base = path
    }
    var pa = fs.readdirSync(path)
    pa.forEach((ele,index)=>{
        var info = fs.statSync(path + "/" + ele)
        
        if(info.isDirectory()) {
            //console.log("dir:" + ele)
            readDirSync(path + "/" + ele,base +"/" + ele)
        } else {
            console.log("file:" + base +"/" + ele)
        }
    })

}

console.log('*****************************************')
readDirSync(root)
//遍历文件夹，并以绝对路径输出,如果没有特殊要求，推荐使用此方法
// function readDirSync(path) {
//     var pa = fs.readdirSync(path)
//     pa.forEach((ele,index)=>{
//         var info = fs.statSync(path + "/" + ele)
//         if(info.isDirectory()){
//             readDirSync(path + "/" + ele)
//         } else {
//             console.log('file:' + path + "/" + ele)
//         }
//     })
// }