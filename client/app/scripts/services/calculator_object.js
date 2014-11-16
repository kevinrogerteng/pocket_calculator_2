angular.module('pocketCalculatorApp')
  .factory('CalculatorObject', function($http){

    var CalculatorObject = function(){
      this.prevNumber = '';
      this.value = '';
      this.operation = null;
      this.prevBool = false;
      this.point = false;
      this.operBool = false;
    };

    CalculatorObject.prototype.calculate = function(operation){
      var self = this,
          numberObject = {
            'firstNumber': this.prevNumber,
            'secondNumber': this.value
          };

      return $http.post('/api/' + operation, numberObject).then(function(data){
        console.log(data);
        // return data.data;
      })
    }

    return CalculatorObject;
});