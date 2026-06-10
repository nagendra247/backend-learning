//do curd operation by using fs module in nodejs async way
const fs= require('fs')

const filename = "Asynctextfile.txt"

//create file and write data into it
const createFile= fs.writeFile(filename,"hello this Asynce file created by nodejs fs module",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file created successfully") 
    }
})

 
//read data from file
const readFile=fs.readFile(filename,"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

 
//update file by adding new data into it
const updatefile=fs.appendFile(filename,"\nthis is new data added to file",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file updated successfully")
    }
})

//delete file
// const deletefile=fs.unlink(filename,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file deleted successfully")
//     }
// })

//rename file
const renamefile=fs.rename(filename,"newAsynctextfile.txt",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file renamed successfully")
    }
})