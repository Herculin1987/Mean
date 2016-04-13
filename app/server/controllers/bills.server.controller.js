'use strict';

/**
 * Module dependencies.
 */
var errorHandler = require('./errors.server.controller'),
    _ = require('lodash');

/**
 * List of Bills
 */
exports.list = function(req, res) {

    var socketio = req.app.get('socketio');  // tacke out socket instance from app container

    var spawn = require('child_process').spawn,
        ls = spawn('python',['main.py', "/dev/ttyUSB0"]);

    ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
        socketio.sockets.emit('credit', { credit: data.toString() });
    });
    res.json([]);
};
