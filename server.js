var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hjs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/*', function (req, res) {
  if (req.originalUrl === '/') {
    res.sendFile('index.html');

  }
  res.send('Hello World! ' + req.originalUrl);
  console.log(req);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});