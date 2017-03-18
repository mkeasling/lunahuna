var config = require('./config.json')
  , express = require('express')
  , app = express()
  ;

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

var server = app.listen(config.port);

