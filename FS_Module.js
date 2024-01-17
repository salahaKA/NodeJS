const fs= require('fs')


//reading a file

let fileContent= fs.readFileSync('f1.txt')
console.log('data of file 1->'+ fileContent)

// writing to file

// if the file name that pssed doesnt exist a new file will be created else its override ie data will eritten on same file

fs.writeFileSync('f2.txt', 'I am f2 file')
console.log('File modified')

// append a file

fs.appendFileSync('f3.txt', ' This is updated data')
console.log('File has been appenede')



// delete file

fs.unlinkSync('delete.txt')
console.log('File have been deleted')