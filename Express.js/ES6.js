//ECMAscript 6 (ES6) is the rulebook for javascript.(modern version of javascript)
//IMPORT MEANS TO BRING SOMETHING FROM ANOTHER FILE
//EXPORT MEANS TO SEND SOMETHING TO ANOTHER FILE
//IMPOET AND EXPORT IN ES6
import express from 'express'; //IMPORT
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Express js by using ES6</h1>")
});
app.get("/about",(req,res)=>{
    res.send("<h1>About Page by using ES6</h1>");
});
app.listen(3000);
console.log("Server is running on port 3000");
export default app;//EXPORT