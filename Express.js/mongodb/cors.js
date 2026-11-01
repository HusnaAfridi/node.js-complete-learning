//CORS---cross origin resourse sharing
//it is a security rule of browser,if frontend and backend has different domain then we use cors to unblock the request

import express from 'express'
import cors from'cors'

const app=express();
//CORS
app.use(cors());//if frontend is on different port write app.use(cors({origin:"http://localhost:3000"}));

app.get("/",(req,resp)=>{
    resp.send({
        name:"HUSNA",
        age:19,
        email:"husna@gmail.com"
    })
})
app.listen(3200,()=>{
    console.log("server is running");
});