//GET,POST,PUT AND DELETE API

import express from "express";
import mongoose from "mongoose";
import studentModel from "./model/studentModel.js";

const app= express();

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/school")

//GET API is used to show the data saved in mongodb
app.get("/", async(req,resp)=>{
    const studentData=await studentModel.find();
    resp.send(studentData);
})


//make POST API in node with mongoose
//post is used to make data and saved it
app.post('/api/add', async (req,resp) => {
    const newData=new studentModel(req.body);
    await newData.save();
    resp.send('Data Saved');
})

//make PUT API 
//PUT is used to update data save in database
app.put('/api/update/:id',async(req,resp)=>{
 const updated=await studentModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
 resp.send(updated);
})

//DELETE API
//used to delete data store in database
app.delete('/api/delete/:id',async(req,res)=>{
    await studentModel.findByIdAndDelete(req.params.id);
    res.send('Data deleted')
})

app.listen(3200,()=> console.log("server is running"))