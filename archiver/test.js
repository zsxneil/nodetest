var fs = require('fs')
var archiver = require('archiver')

var now = Date.now()
// create a file to stream archive data to.
var output = fs.createWriteStream("F:\\example.zip")
var archive = archiver('zip',{
    zlib:{level:9} // Sets the compression level.
})

// listen for all archive data to be written
output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
  console.log(Date.now() - now)
});

// good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
      // log warning
      console.log(err.stack)
  } else {
      // throw error
      throw err;
  }
});

// pipe archive data to the file
archive.pipe(output)

// append a file
//archive.file('F://sql.txt',{name:'package-lock.json'})

archive.directory('F://k',false)

archive.finalize()

//测试了一下，同样的文件夹压缩这个需要三十多分钟，而且暂未找到遍历文件夹过滤的方式
