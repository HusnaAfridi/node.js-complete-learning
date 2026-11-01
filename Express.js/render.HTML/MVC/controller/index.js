import express from 'express'
import {getUser} from "./usercontroller.js";

const app=express();
app.set("view engine","ejs");
app.set("views","../view");

app.get("/",getUser);
app.listen(3300,()=>{
    console.log("server is running");
    
});
