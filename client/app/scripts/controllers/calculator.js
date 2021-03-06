'use strict';

angular.module('pocketCalculatorApp')
  .controller('CaculatorCtrl', function ($scope, $http, CalculatorObject) {

    var calculator = new CalculatorObject();
    $scope.current = false;
    $scope.equal = false;
    $scope.displayValue = '';
    $scope.sign = true;

    $scope.toggleSign = function(){

      if(calculator.currentNumber.length > 0){
        $scope.sign = !$scope.sign;
        if(!$scope.sign){
          calculator.currentNumber = '-' + calculator.currentNumber;
          setDisplayValue(calculator.currentNumber);
        } else {
          calculator.currentNumber = calculator.currentNumber.slice(1, calculator.currentNumber.length);
          setDisplayValue(calculator.currentNumber);
        }
      }
      
    }

    $scope.clearPress = function(){
      calculator = new CalculatorObject();
      $scope.displayValue = '';
    };

    $scope.pressValue = function(value){
      if($scope.equal){
        calculator = new CalculatorObject();
        $scope.equal = false;
        addValue(value);
        setDisplayValue(calculator.currentNumber);
      } else {
        addValue(value);
        setDisplayValue(calculator.currentNumber);
      } 
    };

    function addValue(number){
      if(calculator.currentNumber.length < 10){
        calculator.currentNumber += number;
      }
    }
    $scope.pressDot = function(dot){
      //point attribute is to keep track of current number making sure that you can only use one point
      //decimalPoint indicates to return a float rather than an integer
      if(dot === '.' && calculator.point === false && calculator.currentNumber.length < 10){
        calculator.point = true;
        calculator.decimalPoint = true;
        calculator.currentNumber += dot;
        setDisplayValue(calculator.currentNumber);
      }
    };

    $scope.pressPercentage = function(){
      $scope.point = true;
      calculator.decimalPoint = true;
      var percentageConversion = parseFloat(calculator.currentNumber) / 100;
      calculator.currentNumber = percentageConversion.toString();
      setDisplayValue(calculator.currentNumber);
    }

    $scope.pressOperations = function(operation){

      //this can definitely be better, will need to refactor later
      if(calculator.operBool === false){
        //if there is no operation value, we need to set it and add prevNumber
        //which is the first number
        calculator.prevNumber = calculator.currentNumber
        calculator.currentNumber = '';
        calculator.operBool = true;
        calculator.operation = operation;
        calculator.point = false;
      } else if($scope.equal){
        //if the equal operation was clicked and then an operation was clicked
        //set operation and set currentNumber to nothing
        calculator.operation = operation;
        calculator.currentNumber = '';
        $scope.equal = false;
      } else {
        //if operation
        calculator.calculate(calculator.operation).then(function(data){
          calculator.prevNumber = data;
          calculator.currentNumber = '';
          calculator.operation = operation;
          setDisplayValue(data);
        });
      }
    };

    $scope.pressEqual = function(){
      if(calculator.operation !== null && calculator.currentNumber.length > 0){
        calculator.calculate(calculator.operation).then(function(data){
          calculator.prevNumber = data;
          $scope.equal = true;
          setDisplayValue(data);
        });
      }
    };

    function setDisplayValue(value){
      $scope.displayValue = value;
    }
});
