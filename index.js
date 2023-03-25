var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Github!" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello Github" }');
});

app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works in Github!" }');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Running server...')
});

module.exports = app;
