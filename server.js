var express = require('express');
var fs = require('fs');
var path = require('path');
var http = require('http');
var app = express();

app.configure(function() {
  app.set('root', process.env.OFFLINE_ROOT || __dirname);
  app.set('port', 3000);
  app.use(express.favicon('public/images/favicon.ico'));
  app.use(express.logger(process.env.NODE_ENV == 'production' ? 'default' : 'dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('cookies!'));
  app.use(express.static(path.join(app.get('root'), 'public')));
  app.use(app.router);
});

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.enable('trust proxy');

var controllerFiles = fs.readdirSync('controllers');
controllerFiles.forEach(function (controllerFile) {
  if (controllerFile.indexOf('.js') === -1) {
    return;
  } else {
    controllerFile = controllerFile.replace('.js', '');
    var controller = require('./controllers/' + controllerFile);
    controller.setup(app);
  }
});


app.get('/', function(req, res) {
  res.render('index.html', {});
});

var server = http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {
  console.log('webrtc server listening on port ' + app.get('port'));
});

server.on('close', function() {
  console.log('webrtc server closed on port ' + app.get('port'));
});
