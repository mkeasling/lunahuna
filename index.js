var config = require('./config.json')
  , express = require('express')
  , app = express()
  ;

app.use(express.static('public'));

app.get('/', function(req, res){
  res.send('hello, world.');
});

var server = app.listen(config.port);

