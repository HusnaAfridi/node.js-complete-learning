import express from 'express';
import userData from './user.json' with {type:'json'}
const app=express();

app.get("/",(req,res)=>{   //API 1
    res.send(userData)
})
//identifying users through name
app.get("/user/name/:name",(req,res)=>{
    const name=req.params.name.toLowerCase()
    console.log(name)
    let filterData=userData.filter((user)=>user.name.toLowerCase()==name) //API 2

    res.send(filterData)
})         
//identfying user through id
app.get("/user/:id",(req,res)=>{
    const id=req.params.id
    console.log(id)
    let filterData=userData.filter((user)=>user.id==id)    //API 3

    res.send(filterData)
        })        //localhost3200/
app.listen(3200)//localhost3200/user/1
          //localhost3200/user/name/Husna
          