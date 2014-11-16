'use strict';

angular.module('pocketCalculatorApp')
  .controller('CaculatorCtrl', function ($scope, $http) {

    $scope.value = '';
    $scope.prevNumber = '';
    $scope.operation = '';
    $scope.prevBool = false;
    $scope.point = false;
    $scope.operBool = false;

    $scope.sample = function(){
      $http.get('/sample').then(function(data){
        console.log(data);
      });
    };

    $scope.clearPress = function(){
      console.log('cleared everything');
    };

    $scope.pressValue = function(value){
      if($scope.operBool === true){
        $scope.value = value;
      } else {
        addValue(value);
      }
    };

    function addValue(number){
      $scope.value = $scope.value + number;
    }

    $scope.pressDot = function(dot){
      if(dot === '.' && $scope.point === false && $scope.value.length < 18){
        $scope.point = true;
        $scope.value = $scope.value + dot;
      }
    };

    $scope.pressOperations = function(operation){

      if($scope.prevBool === false && $scope.operBool === false){
        $scope.prevBool = true;
        $scope.operBool = true;
        $scope.prevNumber = $scope.value;
        $scope.operation = operation;
      } else {
        var intValue = parseInt($scope.prevNumber) + parseInt($scope.value);
        $scope.value = intValue.toString();
        $scope.prevNumber = $scope.value;
      }
    };

    $scope.pressEqual = function(){
      // do somthing
    };

    // todo
});
