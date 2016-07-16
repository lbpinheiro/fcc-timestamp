var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');

var api = require('./timestamp');

var app = express();

app.use(favicon(path.join(__dirname,'public', 'favicon.ico')));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/*', function (req, res) {
  console.log('url=' + req.url);
  if (req.url === '/') {
    res.sendFile('index.html');
  } else {
    res.send(api(req.url));
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port 3000!');
});