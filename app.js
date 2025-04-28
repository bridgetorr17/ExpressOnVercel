const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());

const obj = {
    "title": "express on vercel",
    "date": "April 28, 2025"
}

app.get('/', (req, res) => {
    res.json(obj);
})

app.get('/about', (req, res) => {
    res.send('about route');
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})