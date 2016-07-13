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
  } else {
    res.send('Hello World! ' + req.originalUrl);
  }
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port 3000!');
});