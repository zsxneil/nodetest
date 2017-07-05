var util = require('util')

console.log(util.isArray([]))
console.log(util.isArray(new Array()))
console.log(util.isArray({}))

console.log("////////////////////////////////")

console.log(util.isRegExp(/some regexp/))
console.log(util.isRegExp(new RegExp(/some regexp/)))
console.log(util.isRegExp({}))

console.log("////////////////////////////////")

console.log(util.isDate(new Date()))
console.log(util.isDate(Date()))
console.log(util.isDate({}))