// get information about working system

const os= require('os')

console.log(os.arch())   //architecture (32 or 34 ram)
console.log(os.platform())  //win32
console.log(os.networkInterfaces())
console.log(os.cpus())
console.log(os.hostname())
console.log(os.totalmem())
console.log(os.freemem())