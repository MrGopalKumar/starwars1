'use strict';

/**
 * @ngdoc overview
 * @name parts360App
 * @description
 * # parts360App
 *
 * Main module of the application.
 */
angular
  .module('searchApp', [
    'ngResource',
    'ngRoute',
    'apiService'    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
