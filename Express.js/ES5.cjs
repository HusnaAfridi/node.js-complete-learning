//vanilla js (ES5) is the old version of javascript.
//IMPORT AND EXPORT IN ES5
//IMPORT MEANS TO BRING SOMETHING FROM ANOTHER FILE
//EXPORT MEANS TO SEND SOMETHING TO ANOTHER FILE
const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Express js by using ES5</h1>")
});
app.get("/about",(req,res)=>{
    res.send("<h1>About Page by using ES5</h1>");
});
app.listen(3500,()=>{
    console.log("Server is running on port 3500");
});
module.exports=app; //EXPORT

