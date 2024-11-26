var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'www')));


app.get('/api/mante',function (req, res) {
    res.sendFile(path.join(__dirname, 'mante.json'));
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    });