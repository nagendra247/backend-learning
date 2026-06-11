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
        const file = await fs.writeFile(filepath,"hello , this file is created by using async await","utf-8");
        console.log("file created successfully",file);
    }catch(err){
        console.error(err);
    }
}
// createFile();

// read file by using async await
const readFile= async()=>{
    try{
        const file = await fs.readFile(filepath,"utf-8");
        console.log("file read successfully",file);
    }catch(err){
        console.error(err);
    }
}
readFile();

// update file by using async await
const updateFile= async()=>{
    try{
        const file = await fs.appendFile(filepath  ," this file is updated by using async await","utf-8");
        console.log("file updated successfully",file);
    }catch(err){
        console.error(err);
    }   
}
updateFile();

//rename fileby using async await
// const oldfilename = "fsasyncawait.txt";
const newfilename = "fsasyncawaitupdated.txt";
const renamefile= async()=>{
    try{
        const file = await fs.rename(filepath,path.join(__dirname,newfilename));
        console.log("file renamed successfully",file);
    }catch(err){
        console.error(err);
    }

}
renamefile();

//delete file by using async await
 const deletefile =  async ()=>{
    try{
        const file = await fs.unlink(newfilename);
        console.log("file deleted successfully",file);
    }catch(err){
        console.log(err)
    }
 }
// deletefile();
