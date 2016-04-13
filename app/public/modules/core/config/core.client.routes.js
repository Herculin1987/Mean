(function() {
    'use strict';

    angular
        .module('app.core')
        .config(appRoutes)
        ;
    appRoutes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function appRoutes($stateProvider, $locationProvider, $urlRouterProvider, helper){

      // Set the following to true to enable the HTML5 Mode
      // You may have to set <base> tag in index and a routing configuration in your server
      $locationProvider.html5Mode(false);

      // default route
      $urlRouterProvider.otherwise('/welcome');

      //
      // Application Routes
      // -----------------------------------
      $stateProvider
        .state('app', {
            // url: '/',
            abstract: true,
            templateUrl: 'modules/core/views/core.client.view.html',
            resolve: helper.resolveFor('fastclick', 'modernizr')
        })
        .state('app.welcome', {
            url: '/welcome',
            templateUrl: 'modules/core/views/welcome.client.view.html'
            //resolve: helper.resolveFor('angularFileUpload', 'filestyle', 'moment', 'fullcalendar', 'ui.select', 'textAngular', 'datatables', 'ngWig'),
        })
        .state('app.insert', {
            url: '/insert',
            templateUrl: 'modules/core/views/insert.client.view.html'
        })
        .state('app.bill', {
            url: '/bill',
            templateUrl: 'modules/core/views/bill.client.view.html'
        })
        .state('app.thanks', {
            url: '/thanks',
            templateUrl: 'modules/core/views/thanks.client.view.html'
        })
        // CUSTOM RESOLVES
        ;

    }
})();
