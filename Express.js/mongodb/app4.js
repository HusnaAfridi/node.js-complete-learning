import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'school';

app.use(express.json());

async function main() {
  await client.connect();
  console.log('MongoDB Connected');
  const db = client.db(dbName);

  // 1. API for data saving
  app.post("/add-student", async (req, resp) => {
    const collection = db.collection("students");
    const result = await collection.insertOne(req.body);
    console.log(result);
    resp.send("data saved");
  });

  // 2. API for testing - send body
  app.post("/add-student-api", (req, resp) => {
    console.log(req.body);
    resp.send({ "message": req.body });
  });

  // 3. API for browser - to see all students
  app.get("/students", async (req, resp) => {
    const collection = db.collection("students");
    const result = await collection.find().toArray();
    resp.send(result);
  });

  // 4. DELETE API for delete data in mongodb
  app.delete("/delete/:id", async (req, resp) => {
    console.log(req.params.id);
    const collection = db.collection("students");
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount > 0) {
      resp.send({ message: "students data deleted", success: true, result: result })
    } else {
      resp.send({ message: "student data not deleted, try after some time", success: false })
    }
  });

  app.listen(3200, () => console.log('Server running on 3200'));
}

main();