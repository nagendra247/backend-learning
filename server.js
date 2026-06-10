// const http = require("http");

// const server =http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("Hello from Nodejs server ");
// });

// const PORT=3000;
// server.listen(PORT,()=>{
//     console.log(`Server is running in http://localhost:${PORT}`)
// })

// const {add} = require("./add");
// console.log(add(5,10));                   //commponjs module system

import findMax from "./addES6.js";            //ES6 module system
console.log(findMax([1,5,3,9,2]));