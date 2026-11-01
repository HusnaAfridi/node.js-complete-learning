export function loginPage(req,res){
res.send(`
    <h1>Welcome to login page</h1>
    <form action="/submit" method="post">
    <input type="text" placeholder="Enter your username" required/>
    <br/>
    <br/>
    <input type="password" placeholder="Enter your password" required/>
    <br/>
    <br/>
    <button type="submit" >Submit</button>
    <a href=`/`>Go to Home</a>   
    </form>
    `);
}
// <a href=`/`>Go to Home</a>    is used for adding URL.
