//Express js is a web application framework for Node.js,
//it is designed for building web applications and APIs.
//  It simplifies the process of handling HTTP requests and routing

//const express=require('express');
//const app=express();
/*app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Express js</h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>");
});
app.listen(3000);*/

//===================================================================
//EXPRESS JS FLOW
const express=require ('express');
//express is a function so we must call back it.
const  app=express();
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Express js by Husna</h1>")
});
app.get("/about",(req,res)=>{
    res.send("<h1>About Page reagarding Husna</h1>");
});
app.listen(3200);
console.log("Server is running on port 3200");
//express.js has two parameters path and callback function (req,res)
//in express.js we don,t need to create server like http.createServer() because express.js has its own server.
//====================================================================






