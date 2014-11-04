var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);
var restify = require('restify');



app.use(express.static(__dirname+'/client/app'));

app.listen(3000);

