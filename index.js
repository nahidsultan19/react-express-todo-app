const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
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
    })
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello Developer');
});

app.listen(port, () => {
    console.log('Server Running on port', port);
})