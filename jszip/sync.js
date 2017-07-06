var fs = require('fs')
var path = require('path')
var util = require('util')
var jszip = require('jszip')

var zip = new jszip()
var root = path.join('F:\\k')
console.log(root)

var now = Date.now()

//遍历文件夹，并以指定基准输出
//这个打包是先读到内存中，再写入文件。对大文件不支持
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
            //console.log("file:" + base +"/" + ele)
            zip.file(base +"/" + ele,fs.readFileSync(path + "/" + ele))
        }
    })

}


zip
.generateNodeStream({type:'nodebuffer',streamFiles:true})
.pipe(fs.createWriteStream('out.zip'))
.on('finish', function () {
    // JSZip generates a readable stream with a "end" event,
    // but is piped here in a writable stream which emits a "finish" event.
    console.log("out.zip written.");
    console.log(Date.now() - now)
});

console.log('*****************************************')
//readDirSync(root)
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