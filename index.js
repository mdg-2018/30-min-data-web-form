const express = require('express')
const path = require('path')
const app = express()
const port = 8080
const credentials = require('./key.json');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/web/index.html'));
})
app.use(express.static('web'));
app.use(express.json());

app.post('/insertDocument', (req, res) => {
    insertDocument(req.body).then((result) => {
        res.send(JSON.stringify(result));
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

function insertDocument(doc) {

    return new Promise(function (resolve, reject) {
        const MongoClient = require('mongodb').MongoClient;
        const uri = ``; //put your MongoDB connection string here!
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(err => {
            if(err){
                console.log(err);
                reject(err);
            }
            const collection = client.db("forms").collection("formData");
            collection.insertOne(doc).then((result) => {
                resolve(result);
            });

        });
    })


}
