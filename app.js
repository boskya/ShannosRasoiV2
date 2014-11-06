var express = require('express');
var app = express();
//var http = require('http');
//var httpServer = http.Server(app);
var restify = require('restify');
var restifyServer = restify.createServer();

restifyServer
  .use(restify.fullResponse())
  .use(restify.bodyParser())
require('./service/routes.js')(restifyServer);

restifyServer.listen(3001, function () {
    console.log('%s running on %s', restifyServer.name, restifyServer.url);
});

app.use(express.static(__dirname+'/client/app'));

app.listen(3000, function () {
    console.log('%s running on %s', app.name, app.url);
});

