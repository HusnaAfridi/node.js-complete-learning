import express from 'express';
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));//read form data

import path from 'path';
import {fileURLToPath} from 'url';
const __dirname=path.dirname(fileURLToPath(import.meta.url));

app.get("/",(req,res)=>{
    res.render('home')
})

app.get("/add-user",(req,res)=>{
    res.render('addUser')
})
app.post("/submit-user",(req,res)=>{
    const{name,age,email}=req.body;
    res.render('submitUser',{name,age,email});
})
app.listen(3000);