const http =require('http');
const userForm=require('./userForm');  //import that one file code
const userData=require('./userData');
http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    if (req.url=== '/' && req.method ==='GET'){                 // '/' shows form
        res.end(userForm());
    }else if (req.url==='/submit' && req.method ==='POST'){     // '/Submit' shows data
        userData(req,res);
    }else{
        res.end('page not found');
    }
}).listen(3200,()=> console.log("server is running"));