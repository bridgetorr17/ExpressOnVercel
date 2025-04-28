const express = require('express');

const app = express();
const PORT = 8000;
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