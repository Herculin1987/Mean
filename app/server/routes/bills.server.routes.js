'use strict';

/**
 * Module dependencies.
 */
var bills = require('../../server/controllers/bills.server.controller');

module.exports = function(app) {
    // Bill Routes
    app.route('/bills')
        .get(bills.list);

};
