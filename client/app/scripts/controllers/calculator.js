'use strict';

angular.module('pocketCalculatorApp')
  .controller('CaculatorCtrl', function ($scope, $http, CalculatorObject) {


    var calculator = new CalculatorObject();
    $scope.current = false;
    $scope.equal = false;
    $scope.displayValue = '';

    $scope.clearPress = function(){
      console.log('cleared everything');
    };

    $scope.pressValue = function(value){
      calculator.currentNumber += value;
      setDisplayValue(calculator.currentNumber);
    };

    $scope.pressDot = function(dot){
      if(dot === '.' && calculator.point === false && calculator.currentNumber.length < 18){
        calculator.point = true;
        calculator.currentNumber += dot;
        setDisplayValue(calculator.currentNumber);
      }
    };

    $scope.pressOperations = function(operation){

      if(calculator.operBool === false){
        calculator.prevNumber = calculator.currentNumber
        calculator.currentNumber = '';
        calculator.operBool = true;
        calculator.operation = operation;
      } else if($scope.equal){
        calculator.operation = operation;
        calculator.currentNumber = '';
        $scope.equal = false;
      } else {
        calculator.calculate(calculator.operation).then(function(data){
          calculator.prevNumber = data;
          calculator.currentNumber = '';
          setDisplayValue(data);
        });
      }
      // if(calculator.operBool === false){
      //   calculator.operBool = true;
      //   calculator.prevNumber = calculator.currentNumber;
      //   calculator.currentNumber = '';
      //   calculator.operation = operation;
      //   $scope.current = true;
      // } else {
      //   calculator.calculate(calculator.operation).then(function(data){
      //     $scope.current = true;
      //     setDisplayValue(data);
      //   });
      // }
    };

    $scope.pressEqual = function(){
      calculator.calculate(calculator.operation).then(function(data){
        calculator.prevNumber = data;
        $scope.equal = true;
        setDisplayValue(data);
      });
    };

    function setDisplayValue(value){
      $scope.displayValue = value;
    }
    // todo
});
