'use strict';
/**
 * Module dependencies.
 */
var config = require('./config/config');

// Init the express application
var app = require('./config/express')();

// Start the app by listening on <port>
//app.listen(config.port);
app.get('server').listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('Application started on port ' + config.port);
