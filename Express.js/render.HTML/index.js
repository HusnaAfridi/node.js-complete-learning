/*import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true }));
//home page -HTML elements rendering
app.get("/", (req, res) => {
    res.send("<h1>Welcome to home page</h1>")
});
//login page -HTML elements rendering
app.get("/login", (req, res) => {
    res.send(`
        <h1>Welcome to login page</h1>
        <form action="/submit" method="post">
        <input type="text" name="username" placeholder="Enter your username" required/>
        <br/>
        <br/>
        <input type="password" name="password" placeholder="Enter your password" required/>
        <br/>
        <br/>
        <button type="submit" >Submit</button>
        </form>
        `);
});
 app.post("/submit", (req, res) => {
    res.send('<h1>Form submitted successfully</h1><a href="/login">Go to login page</a>');
});
app.listen(3001 , () => {
    console.log("Server is running on port 3001");
});*/
//======================================================================
import express from 'express'
const app =express();
app.set("view engine","ejs");

app.get("/user",(req,res)=>{
    const users=["Husna","Zee"]
    res.render("user",{users});
});
app.listen(3000);