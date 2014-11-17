'use strict';

/**
 * @ngdoc overview
 * @name pocketCalculatorApp
 * @description
 * # pocketCalculatorApp
 *
 * Main module of the application.
 */
angular
  .module('pocketCalculatorApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/pocket.html',
        controller: 'CaculatorCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
