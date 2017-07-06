var jszip = require('jszip')
var fs = require('fs')

var zip = new jszip()

zip.file('buff1.js',fs.readFileSync("../buff1.js"))
zip.file('date.js',fs.readFileSync("../date.js"))
zip.file('mysql/delete.js',fs.readFileSync('../mysql/delete.js'))
zip.file('mysql/insert.js',fs.readFileSync('../mysql/insert.js'))
zip.file('mysql/update.js',fs.readFileSync('../mysql/update.js'))
zip.file('mysql/query.js',fs.readFileSync('../mysql/query.js'))

//var zipfloder = zip.generateAsync({base64:true,compression:'DEFLATE'})

zip
.generateNodeStream({type:'nodebuffer',streamFiles:true})
.pipe(fs.createWriteStream('out.zip'))
.on('finish', function () {
    // JSZip generates a readable stream with a "end" event,
    // but is piped here in a writable stream which emits a "finish" event.
    console.log("out.zip written.");
});