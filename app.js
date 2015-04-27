var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

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

var apiRouter = express.Router();
require('./service/routes.js')(apiRouter);

app.use(express.static(__dirname+'/client/app'));
app.use('/recipe-api', apiRouter);

app.listen(port, function () {
    console.log('%s running on %s', app.name, app.url);
});
