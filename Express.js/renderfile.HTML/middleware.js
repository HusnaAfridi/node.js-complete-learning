//Middleware is a function that has access to the (req), (res), and the next middleware function 
//  The next middleware function runs before the final route handler.

//import express from  'express';
//const app =express();
//========================================
//checking route middleware
/* function checkRoute(req,res,next){
    console.log("Middleware is running");
    next();
}
app.use(checkRoute);*/
//=========================================
//IP CHECKING MIDDLEWARE
/*function ipCheck(req,res,next){
    const ip=req.socket.remoteAddress;

    if(ip.includes("::1")){   //192.168.18.112  my ip address
        res.send("Alert!You are not allowed to access this page");
    } else{
        next();
    }
}
app.use(ipCheck);*/

//==========================================
/*app.get("/",(req,res)=>{
    res.send('home page')
})

app.get("/user",(req,res)=>{
    res.send('user page')
})

app.get("/about",(req,res)=>{
    res.send('about page')
})
app.listen(3200)*/
//===========================================
//checking age route middleware

/*function checkAgeRouteMiddleware(req,res,next){
    const ip=req.socket.remoteAddress;

    if(!req.query.age || req.query.age < 18){
        res.send("<h1>You are not allowed to access this page</h1>");
    } else{
        next();
    }
}

app.get("/age",checkAgeRouteMiddleware,(req,res)=>{
    res.send("<h1>Welcome to age page</h1>");
})
app.get("/login",checkAgeRouteMiddleware,(req,res)=>{
    res.send("<h1>Welcome to login page</h1>");
})
app.get("/user",checkAgeRouteMiddleware,(req,res)=>{
    res.send("<h1>Welcome to user page</h1>");
})
app.get("/products",checkAgeRouteMiddleware,(req,res)=>{
    res.send("<h1>Welcome to products page</h1>");
})
app.listen(3000)*/

//==============================================================

//BUILT-IN MIDDLEWARE
//these middleware are already in exppress js, does not need to install
/*import express from "express";
const app = express();
/*import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true })); //parse incoming request with urlencoded payloads
app.use(express.static(path.join(__dirname, "public","view"))); //serve static files from the public directory

app.get("/", (req, res) => {
    const filePath=path.join(__dirname,"public" ,"view","home2.html")
    res.sendFile(filePath);
});


 app.get("/login", (req, res) => {
    res.send(`
        <form action="/submit" method="post">
        <input type="text" placeholder="enter email" name="email"/>
         <input type="text" placeholder="enter password" name ="password"/>
         <button>Login</button>
    </form>`);
});
app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("<h1>Your application has been successfully submitted</h1>");
});


app.listen(3300);*/
//=================================================================================
//EXTERNAL MIDDLEWARE OR THIRD PARTY MIDDLEWARE
//These middleware need to install they are already made e:g morgon
//first install morgon package npm i morgon
/*import express from 'express'
import morgan from 'morgan';
const app=express();

app.use(morgan('dev'))
app.get("/",(req,res)=>{
res.send("Home page")
});

app.get("/user",(req,res)=>{
res.send("user page")
});
app.get("/wait",(req,res)=>{
    setTimeout(()=>{
res.send("result after 1 second")
    }, 1000)
});
app.listen (3000) */ //http:localhost3000/wait

//=================================================
//ERROR HANDLING MIDDLEWARE
import express from 'express'
const app=express();

app.get("/",(req,res)=>{
res.send("Home page")
});

app.get("/user",(req,res)=>{
res.send("user page") 
});

app.get("/error",(req,res,next)=>{
    const error=new Error('')
    error.status=404;
next(error)                //forcefully error generated
});

function errorHandling(error,req,res,next){
    res.status(error.status || 500).send("try after some time")
}
app.use(errorHandling)
app.listen(3500);

