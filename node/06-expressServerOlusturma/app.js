const express = require('express'); 
const app = express();
const port = 8000; 
const fs = require('fs')
const veri = JSON.parse(fs.readFileSync(`${__dirname}/ulkeler.json`,'utf-8'));

app.get('/ulkeler', (req, res) => {
    res.status(200).json({
        veriiii: {verilerssss : veri} 
    }); 
});

app.get('/', (req, res) => {
    res.status(200).json({veri}); 
});

app.post('/postveri', (req, res) => {
    res.status(200).json({message : 'Post istegi basarili bir sekilde gerçekleşti'});
});

app.listen(port, () => { 
    console.log('Server calisiyor 8000 port...'); 
});
