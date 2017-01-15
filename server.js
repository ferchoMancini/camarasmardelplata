var express = require('express'),
mongoose = require('mongoose'),
fs = require('fs'),
nodemailer = require('nodemailer');

var app = express();

app.configure(function(){
 app.use(express.bodyParser());
});

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

app.post('/sendmessage', function(req, res) {

  console.log('Values: ' + req.body.name + req.body.email + req.body.message);
  var err = [];

  if (req.body.name.length == 0) {
    err.push('Debe completar el campo Nombre');
  }

  if (req.body.email.length == 0) {
    err.push('Debe completar el campo Email');
  }

  if (req.body.message.length == 0) {
    err.push('Debe completar el campo Mensaje');
  }

  console.log(err);

  if (err && err.length > 0) {
    res.json({success: false, err: err});
  }
  else {
    var toMail = 'fernando.mancini@gmail.com';
    var subjectMail = 'Cámaras Mar del Plata';

    // create reusable transporter object using the default SMTP transport
    // var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
    var transporter = nodemailer.createTransport('smtps://mardelplatateam%40gmail.com:mdqteam01@smtp.gmail.com');

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: req.body.name,
        to: toMail, // list of receivers
        subject: subjectMail, // Subject line
        text: req.body.name + ' (' + req.body.email + ') says: ' + req.body.message, // plaintext body
        html: req.body.name + ' (' + req.body.email + ') says: ' + req.body.message // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

    res.json({success: true});
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
