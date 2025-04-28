const express = require('express');
const cors = require('cors');
const {MongoClient, ServerApiVersion} = require('mongodb');
require('dotenv').config()

const app = express();
const PORT = 8000;
const mongoURI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

const client = new MongoClient(mongoURI);

const obj = {
    "title": "express on vercel",
    "date": "April 28, 2025"
}
    

    app.get('/', async (req, res) => {
    //     const run = async () => {
            try{
                await client.connect()
                await client.db("admin").command({ ping: 1 });
                console.log(
                  "Pinged your deployment. You successfully connected to MongoDB!"
                );
                let concertCollection = await client.db('SurpriseSongs').collection('Concerts');
                console.log('concert collection is: ' + concertCollection)
                let results = await concertCollection.find().toArray()
                console.log('collections results are' + results);
                res.json(results);
            }
            finally{}
            // }
            
            // run().catch(error => console.log)
    })
        // concertCollection
        //     .find()
        //     .toArray()
        //     .then(results => {
        //         results.sort((a,b) => b.votes - a.votes);
        //         response.json(results);
        //     })
        //     .catch(error => console.error(error));
        //     })
    
    app.get('/about', (req, res) => {
        res.send('about route');
    })
    
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    })