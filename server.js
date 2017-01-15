var express = require('express'),
mongoose = require('mongoose'),
fs = require('fs');

var app = express();

// app.configure(function(){
//   app.use(express.bodyParser());
// });

// require('./models/categoria');
// require('./models/producto');
// require('./routes')(app);


// var mongoUri = 'mongodb://heroku_svtj8n35:bnrc19u3gng0b4h2uttlmj233b@ds015902.mlab.com:15902/heroku_svtj8n35';
// //var mongoUri = 'mongodb://localhost/noderest';
// mongoose.connect(mongoUri);
// var db = mongoose.connection;
// db.on('error', function () {
//   throw new Error('unable to connect to database at ' + mongoUri);
// });

app.use(express.static(__dirname + '/web'));
app.set('port', (process.env.PORT || 5000));
// app.set('views', __dirname);
// app.set('view engine', 'ejs');

//App Index
app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
