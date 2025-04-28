const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');

const app = express();
const PORT = 8000;
const MongoClient = mongodb.MongoClient;

app.use(cors());

const obj = {
    "title": "express on vercel",
    "date": "April 28, 2025"
}

MongoClient.connect('mongodb+srv://bridgetorr1902:aGyiBmU0BQSZs1g6@cluster0.5payw8y.mongodb.net/Concerts?retryWrites=true&w=majority&appName=Cluster0')
    .then(client => {

        const db = client.db('SurpriseSongs');
        const concertCollection = db.collection('Concerts');
    })

    app.get('/', (req, res) => {
        concertCollection
            .find()
            .toArray()
            .then(results => {
                results.sort((a,b) => b.votes - a.votes);
                response.json(results);
            })
            .catch(error => console.error(error));
            })
    
    app.get('/about', (req, res) => {
        res.send('about route');
    })
    
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    })