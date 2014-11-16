exports.plus = function(req, res){
  var firstNumber = req.body.firstNumber,
      secondNumber = req.body.secondNumber;
  var intValue = parseInt(firstNumber) + parseInt(secondNumber);
  res.send(intValue);

};

// exports.minus = function(req, res){
//   console.log(req);
//   res.send('hola');
// }

// exports.divide = function(req, res){
//   console.log(req);
//   res.send('hola');
// }

// exports.multiply = function(req, res){
//   console.log(req);
//   res.send('hola');
// }

