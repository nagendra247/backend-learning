const fs = require('fs')
const path = require('path')



//read directory 
// const readDir= fs.promises.readdir(__dirname)
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))

const filename= "fspromises.txt"
const filepath= path.join(__dirname,filename)

//create file and write data into it
const createfile=fs.promises.writeFile(filepath,"hello this text file of fs promises module")
.then((data)=> console.log("file created successfully"))
.catch((err)=> console.log(err))

//read data from file
fs.promises.readFile(filepath,"utf-8")
.then((data)=> console.log(data))
.catch((err)=> console.log(err))

//update file by adding new data into it
fs.promises.appendFile(filepath,"\nthis is new data added to file 2")
.then((data)=> console.log(data,"file updated successfully"))
.catch((err)=> console.log(err))

// //delete file
// fs.promises.unlink(filepath)
// .then((data)=> console.log("file deleted successfully"))
// .catch((err)=> console.log(err))

// //rename file
// fs.promises.rename(filepath,"newfspromises.txt")
// .then((data)=> console.log("file renamed successfully"))
// .catch((err)=> console.log(err))