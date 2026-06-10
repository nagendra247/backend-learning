const fs = require('fs')
const path = require("path")

const filename=path.join(__dirname,"textfile.txt");
console.log(__dirname,) //C:\Users\abc\OneDrive\Desktop\nodejs\learning\fs_module
console.log(filename) //C:\Users\abc\OneDrive\Desktop\nodejs\learning\fs_module\textfile.txt

//create file and write data into it
const data = fs.writeFileSync(filename,"Hello, this is a file created using Nodejs fs module","utf-8");
console.log(data) //undefined


// //read data from file
const readData =fs.readFileSync(filename,"utf-8")
console.log(readData) //Hello, this is a file created using Nodejs fs module

//append data into file or update data into file
const updateData = fs.appendFileSync(filename,"\nThis is updated data in file","utf-8");
console.log(updateData) //undefined

// //delete file
// const deleteFile = fs.unlinkSync(filename);
// console.log(deleteFile) //undefined

//to rename file
const renameFile = fs.renameSync(filename,path.join(__dirname,"newfile.txt"));
console.log(renameFile) //undefined