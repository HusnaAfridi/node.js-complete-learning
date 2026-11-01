//populate data with API in form
import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const client = new MongoClient("mongodb://localhost:27017");
let db;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

client.connect().then((conn) => {
    db = conn.db("school");
    console.log("DB Connected");

    

    app.get("/ui", async (req, res) => {
        const result = await db.collection("students").find().toArray();
        res.render('students', { result });
    });

    
    app.get("/ui/student/:id", async (req, resp) => {
      const result = await db.collection("students").findOne({_id: new ObjectId(req.params.id)})
      resp.render('student-update', {result})
    });

    app.post("/ui/update/:id", async (req, resp) => {
      await db.collection("students").updateOne({_id: new ObjectId(req.params.id)}, {$set: req.body})
      resp.redirect("/ui")
    });



    app.listen(3200, () => console.log("http://localhost:3200/ui"));
});