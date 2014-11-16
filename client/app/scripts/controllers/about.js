'use strict';

/**
 * @ngdoc function
 * @name pocketCalculatorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pocketCalculatorApp
 */
angular.module('pocketCalculatorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
