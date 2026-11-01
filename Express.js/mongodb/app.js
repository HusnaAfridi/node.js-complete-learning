// display mongodb data on UI

import express from "express";
import { MongoClient } from "mongodb";

 const app=express()
const dbName="school";
const client = new MongoClient("mongodb://localhost:27017");


app.set('view engine','ejs');

app.get('/',async (req,res)=> {
    await client.connect();
    const db=client.db(dbName);
    const collection=db.collection("students")

    const students=await collection.find().toArray();

    res.render('students',{students:students})
})
   app.listen(3200);