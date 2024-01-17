// Directories

const { Console } = require('console')
const fs= require('fs')

//fs.mkdirSync('myDirectory')

//check content inside directory

let folderPath= "D:\\AIMIT\\s3\\JS & NODEJS\\myDirectory"
let folderContent= fs.readdirSync(folderPath)
console.log("folder content:"+folderContent)
console.log("folder content:",folderContent)

//check dir exist or note

var doesExist= fs.existsSync('myDirectory')
console.log(doesExist)

var doesExist= fs.existsSync('dfgsfg')
console.log(doesExist)

//remove directory

fs.rmdirSync('delete')
console.log('Directory has ben removed')