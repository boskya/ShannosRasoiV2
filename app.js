var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

if ('development' == app.get('env')) {
  console.log('in dev environemnt');
  app.set('db_url','mongodb://localhost/shannos-rasoi');
  app.set('db_name','shannos-rasoi');
}

if ('production' == app.get('env')) {
  var uriUtil = require('mongodb-uri');
  var mongodbUri = "mongodb://admin:ShannosRasoi01@ds041238.mongolab.com:41238/heroku_app36280338";
  var mongooseUri = uriUtil.formatMongoose(mongodbUri);
  app.set('db_url',mongooseUri);
  app.set('db_name','shannos-rasoi');
}

var mongoose = require('mongoose');

mongoose.connect(app.get('db_url'));

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var apiRouter = express.Router();
require('./service/routes.js')(apiRouter);

app.use(express.static(__dirname+'/client/app'));
app.use('/recipe-api', apiRouter);

app.listen(port, function () {
    console.log('%s running on %s', app.name, app.url);
});
