console.log(__filename)
console.log(__dirname)

var i = 0

function printHello() {
   if(i==5) 
        clearInterval(tt)
    console.log('Hello World !')
    i++
}

var t = setTimeout(printHello, 2000);

clearTimeout(t)

var tt = setInterval(printHello,2000)