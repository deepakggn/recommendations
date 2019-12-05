//simple express server

var express = require('express');

var app = express();

var PORT = 3000;

app.get('/', function(req, res) {
    res.status(200).send('Reccomendation app by Deepak Sharma');
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});