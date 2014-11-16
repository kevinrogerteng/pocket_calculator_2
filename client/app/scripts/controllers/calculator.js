'use strict';

angular.module('pocketCalculatorApp')
  .controller('CaculatorCtrl', function ($scope, $http, CalculatorObject) {


    var calculator = new CalculatorObject();
    $scope.current = false;
    $scope.value = calculator.value;

    $scope.sample = function(){
      // $http.post('/api/plus', {'hello': 'cool'}).then(function(data){
      //   console.log(data);
      // });
    };

    $scope.clearPress = function(){
      console.log('cleared everything');
    };

    $scope.pressValue = function(value){
      if($scope.current === true){
        calculator.value = value;
        setDisplayValue(calculator.value);
        $scope.current = false;
      } else {
        if(calculator.value.length < 18){
          addValue(value);
        }
      }
    };

    function addValue(number){
      calculator.value += number;
      setDisplayValue(calculator.value);
    }

    $scope.pressDot = function(dot){
      if(dot === '.' && calculator.point === false && calculator.value.length < 18){
        calculator.point = true;
        calculator.value += dot;
        setDisplayValue(calculator.value);
      }
    };

    $scope.pressOperations = function(operation){

      if(calculator.prevBool === false && calculator.operBool === false){
        calculator.prevBool = true;
        calculator.operBool = true;
        calculator.prevNumber = calculator.value;
        calculator.operation = operation;
        $scope.current = true;
      } else {

        // var intValue = parseInt(calculator.prevNumber) + parseInt(calculator.value);
        // setDisplayValue(intValue.toString());

        calculator.calculate(calculator.operation).then(function(data){
          console.log(data)
          setDisplayValue(data);
        });

        // calculator.prevNumber = intValue;
      }
    };

    $scope.pressEqual = function(){
      // do somthing
    };

    function setDisplayValue(value){
      $scope.value = value;
    }
    // todo
});
