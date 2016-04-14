'use strict';

// socket service that provides the socket service
angular.module('app.core').factory('Socket', ['socketFactory',
    function(socketFactory) {
        return socketFactory({
            prefix: '',
            ioSocket: io.connect('http://localhost:3001')
        });
    }
]);
