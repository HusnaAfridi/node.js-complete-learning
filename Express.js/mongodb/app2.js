//MAKE API WITH MONGODB
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const client = new MongoClient("mongodb://localhost:27017");
app.use(express.json());

let col;
client.connect().then(() => {
  col = client.db("school").collection("students");
  console.log("DB Connected");
});

// GET data
app.get('/students', async (req, res) => {
  res.json(await col.find().toArray());
});

// POST data
app.post('/students', async (req, res) => {
  const result = await col.insertOne(req.body);
  res.json(result);
});

app.listen(3200);