const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>Welcome to the Home Page</h1>");
        res.end();
    }
    if(req.url === '/about'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.write("Welcome to the About Page");
        res.end();
    }
})


const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log(`Server is running on http://localhost:${PORT}`);
})