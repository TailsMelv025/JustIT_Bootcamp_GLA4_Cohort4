let variableOne = 0;
var variableTwo = 2;

if (variableOne == 1) {
  let variableThree = 3; // Block Scope can only be seen inside {}
  console.log(variableThree + variableOne);
} else {
  var variableFour = 4;
  // var can't have block scope (means it's global if use inside {})
  function localScope() {
    var variableFive = 5; // Variables inside a function can't be seen outside
    let variableSix = 6;
    console.log(variableFive + variableOne);
    console.log(variableSix + variableOne);
    return variableFive;
  }

  console.log(localScope() + variableTwo);
  console.log(localScope() + variableFive);
}

console.log(variableOne);
console.log(variableTwo);
//console.log(variableThree); // This hasn't got a value
console.log(variableFour);
