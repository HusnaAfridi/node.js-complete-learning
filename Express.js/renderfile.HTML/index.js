import express from  'express';
import path from 'path'
const app =express();
//==========================================
//this line is for css
app.use(express.static(path.resolve('./')));
//==========================================
app.get("/",(req,res)=>{
    const absPath=path.resolve('./home.html')
    res.sendFile(absPath)
})
app.get("/login",(req,res)=>{
    const absPath=path.resolve('./login.html')
    res.sendFile(absPath)
})
app.get("/about",(req,res)=>{
    const absPath=path.resolve('./about.html')
    res.sendFile(absPath)

})
// for making 404 page
app.use((req,res)=>{
    res.status(404).sendFile(path.resolve('./404.html'));
})
app.listen(3200)
