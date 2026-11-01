const http=require("http");
const fs=require ("fs");
const server=http.createServer((req,resp)=>{
    fs.readFile("web.html",(err,data)=>{
        if (err){
            resp.writeHead(500);
            resp.end("error loading html file");
            return;
        }
        resp.writeHead(200,{"Content-Type":"text/html"});
        resp.end(data);
    });
});
    server.listen(3000,() => {
         console.log("server is running on port 3000");
    });