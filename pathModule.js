const path = require('path')

console.log(__dirname) //C:\Users\abc\OneDrive\Desktop\nodejs\learning tell us the folder path
console.log(__filename) //C:\Users\abc\OneDrive\Desktop\nodejs\learning\pathModule.js  tell the path of file
console.log("-----------------------------")
console.log(path.basename(__filename)) //pathModule.js  tell us the name of file
console.log(path.extname(__filename))  //.js  tell us the extension of file
console.log(path.dirname(__filename))  //C:\Users\abc\OneDrive\Desktop\nodejs\learning  tell us the folder path
console.log("-----------------------------")
//create a path by joining different segments
const filePath = path.join("school","class","student.txt");
console.log(filePath) //school\class\student.txt
console.log(path.basename(filePath)) //student.txt
console.log(path.extname(filePath))  //.txt  tell us the extension of file