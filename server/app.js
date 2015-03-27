'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/gulp-adventures-dev');

// Setup server
var app = express();
var server = require('http').createServer(app);

//config express and routing
require('./config/express')(app);
require('./routes')(app);

var port = process.env.PORT;
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Express Server listening at http://%s:%s in %s mode', host, port, app.get('env'))
});

// Expose app
exports = module.exports = app;