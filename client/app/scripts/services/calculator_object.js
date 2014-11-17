angular.module('pocketCalculatorApp')
  .factory('CalculatorObject', function($http){

    var CalculatorObject = function(){
      this.prevNumber = '';
      this.currentNumber = '';
      this.operation = null;
      this.point = false;
      this.operBool = false;
    };

    CalculatorObject.prototype.calculate = function(operation){
      var self = this,
          numberObject = {
            'firstNumber': parseInt(this.prevNumber),
            'secondNumber': parseInt(this.currentNumber)
          };
      return $http.post('/api/' + operation, numberObject).then(function(data){
        self.prevNumber = data.data;
        self.point = false;
        return data.data;
      })
    };
    return CalculatorObject;
});