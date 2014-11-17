angular.module('pocketCalculatorApp')
  .factory('CalculatorObject', function($http){

    var CalculatorObject = function(){
      this.prevNumber = '';
      this.currentNumber = '';
      this.operation = null;
      this.point = false;
      this.decimalPoint = false;
      this.operBool = false;
    };

    CalculatorObject.prototype.calculate = function(operation){
      var self = this,
      numberObject = {
        'firstNumber': parseFloat(this.prevNumber),
        'secondNumber': parseFloat(this.currentNumber)
      };

      return $http.post('/api/' + operation, numberObject).then(function(data){
        self.prevNumber = data.data;
        self.point = false;
        if(self.decimalPoint){
          return parseFloat(data.data);
        } else {
          return parseInt(data.data);
        }
      })
    };
    return CalculatorObject;
});