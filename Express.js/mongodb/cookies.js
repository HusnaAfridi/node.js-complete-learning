import express from 'express'

const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

app.get("/login",(req,resp)=>{
  resp.render('login')
})

app.post("/profile",(req,resp)=>{
  resp.setHeader('Set-Cookie', [
    'login=true',
    `name=${req.body.name}`
  ])
  resp.render('profile', {name: req.body.name})
})

app.get("/",(req,resp)=>{
  resp.render('home')
})

app.get("/logout",(req,resp)=>{
  resp.setHeader('Set-Cookie', [
    'login=; Max-Age=0',
    'name=; Max-Age=0'
  ])
  resp.redirect('/login')
})

app.listen(3200, ()=> console.log("server is running"))