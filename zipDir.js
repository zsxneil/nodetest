var fstream = require('fstream')
var tar = require('tar')
var zlib = require('zlib')
var fs = require('fs')

var now = Date.now()
var fWriterStream = fstream.Writer({'path':'k.tar.gz'})

fstream.Reader({'path':'F:\\test','type':'Directory'})
    .pipe(tar.Pack())
    .pipe(zlib.Gzip())
    .pipe(fWriterStream)

    fWriterStream.on('end',()=>{
        console.log('end')
        console.log(Date.now() - now)
    })

    fWriterStream.on('finish',()=>{
        console.log('finish')
        console.log(Date.now() - now)
    })