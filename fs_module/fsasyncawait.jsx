 const fs = require("fs").promises;
const path = require("path");

//to read file by using async await
const folderpath = __dirname;

const readFolder= async()=>{
    try{
        const file = await fs.readdir(folderpath);
        console.log(file);
    }catch(err){
        console.error(err);
    }
}
// readFolder();

const filename ="fsasyncawait.txt";
const filepath = path.join(__dirname,filename);
// crate file by using async await
const createFile= async()=>{
    try{
        const file = await fs.writeFile(filepath,"hello , this file is created by using async await");
        console.log("file created successfully",file);
    }catch(err){
        console.error(err);
    }
}
createFile();
