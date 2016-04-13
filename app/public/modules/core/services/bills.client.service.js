'use strict';

//Bills service used for communicating with the bills REST endpoints
angular.module('app.core').factory('Bills', ['$resource',
	function($resource) {
		return $resource('/bills');
	}
]);
