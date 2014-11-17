exports.plus = function(req, res){
  var firstNumber = req.body.firstNumber !== null ? req.body.firstNumber: 0,
      secondNumber = req.body.secondNumber !== null > 0 ? req.body.secondNumber: 0;
  var intValue = firstNumber + secondNumber;

  res.send(intValue.toString());

};

exports.minus = function(req, res){
  var firstNumber = req.body.firstNumber,
      secondNumber = req.body.secondNumber;
  var intValue = firstNumber - secondNumber;
  
  res.send(intValue.toString());
}

exports.divide = function(req, res){
  var firstNumber = req.body.firstNumber,
      secondNumber = req.body.secondNumber;
  var intValue = firstNumber / secondNumber;
  
  res.send(intValue.toString());
}

exports.multiply = function(req, res){
  var firstNumber = req.body.firstNumber,
      secondNumber = req.body.secondNumber;
  var intValue = firstNumber * secondNumber;
  
  res.send(intValue.toString());
}

