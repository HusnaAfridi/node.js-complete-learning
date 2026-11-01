//Save data with form in mongoDB
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const client = new MongoClient("mongodb://localhost:27017");

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true})); // form ke liye zaroori

let col;
client.connect().then(()=>{
  col = client.db("school").collection("students");
  console.log("DB Connected");
});

// Form + show tabel
app.get('/', async (req,res)=>{
  const students = await col.find().toArray();
  res.render('students3',{students});
});

// Form se data save karo
app.post('/add', async (req,res)=>{
  await col.insertOne(req.body);
  res.redirect('/');
});

app.listen(3200);