var express = require('express');
var app = express();

var restify = require('restify');
var restifyServer = restify.createServer();

app.set('port', process.env.PORT || 3001);

if ('development' == app.get('env')) {
  console.log('in dev environemnt');
  app.set('db_url','mongodb://localhost/shannos-rasoi');
  app.set('db_name','shannos-rasoi');
}

if ('production' == app.get('env')) {
  console.log('in prod environemnt');
  app.set('db_url','http://shannos-rasoi.iriscouch.com');
  app.set('db_name','shannos-rasoi');
}

var mongoose = require('mongoose');

mongoose.connect(app.get('db_url'));


restifyServer
  .use(restify.fullResponse())
  .use(restify.bodyParser());
require('./service/routes.js')(restifyServer);

restifyServer.listen(app.get('port'), function () {
    console.log('%s running on %s', restifyServer.name, restifyServer.url);
});

app.use(express.static(__dirname+'/client/app'));

app.listen(3000, function () {
    console.log('%s running on %s', app.name, app.url);
});
