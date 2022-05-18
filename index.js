const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.beuyj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    await client.connect();
    const todosCollection = client.db("TodoApp").collection("todos");

    app.get('/todos', async (req, res) => {
        const query = {};
        const todos = await todosCollection.find(query).toArray();
        res.send(todos);
    });

    app.post('/todo', async (req, res) => {
        const todo = req.body;
        const result = await todosCollection.insertOne(todo)
        res.send(result);
    });

    app.put('/todo/:id', async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        const filter = { _id: ObjectId(id) }
        const options = { upsert: true }
        const updateDoc = {
            $set: {
                name: data.name,
                description: data.description,
                completed: data.completed
            }
        }
        const result = await todosCollection.updateOne(filter, updateDoc, options);
        res.send(result);
    })

    app.delete('/todo/:id', async (req, res) => {
        const id = req.params.id;
        const filter = { _id: ObjectId(id) };
        const result = await todosCollection.deleteOne(filter);
        res.send(result);
    })
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello Developer');
});

app.listen(port, () => {
    console.log('Server Running on port', port);
})