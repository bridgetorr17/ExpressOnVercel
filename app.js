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
            try{
                await client.connect()
                let concertCollection = client.db('SupriseSongs').collection('Concerts');

                let results = await concertCollection.find().toArray()
                console.log(`collections results are ${JSON.stringify(results)}`);
                res.send(JSON.stringify(results));
            }
            catch(error){
                console.error(error);
            }
            finally{
                await client.close();
            }
    });
    
    app.get('/about', (req, res) => {
        res.send('about route');
    })
    
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    })