//Defined Variables
let btn = document.getElementById("sumbtn");
const numberOne = document.getElementById("numberone"); //INPUT 1
const numberTwo = document.getElementById("numbertwo"); //INPUT 2
const result = document.getElementById("result"); //Output

// add Function
function add(valueOne, valueTwo) {
  return Number(valueOne) + Number(valueTwo); //convert strings to numbers and add together
}
// minus Function
function minus(valueOne, valueTwo) {
  return Number(valueOne) - Number(valueTwo); //convert strings to numbers and subtract
}
// multiply Function
function multiply(valueOne, valueTwo) {
  return Number(valueOne) * Number(valueTwo); //convert strings to numbers and multiply together
}
// divide Function
function divide(valueOne, valueTwo) {
  return Number(valueOne) / Number(valueTwo); //convert strings to numbers and divide
}

//   Calculate Function
function calculate() {
  let sum; // define sum as a block scope empty variable
  const operations = document.getElementById("operations");
  if (operations.value === "divide") {
    sum = divide(numberOne.value, numberTwo.value);
  } else if (operations.value === "multiply") {
    sum = multiply(numberOne.value, numberTwo.value);
  } else if (operations.value === "minus") {
    sum = minus(numberOne.value, numberTwo.value);
  } else {
    sum = add(numberOne.value, numberTwo.value);
  }

  // numberOne.value = will get the input from the user for that box (2, 67, 890)
  result.value = sum.toString();
  //result is converted to a string and applied to the value property of our result input
}

// Change Operand onChange
function changeOperand() {
  let operand = document.getElementById("operand");
  switch (document.getElementById("operations").value) {
    case "divide":
      operand.innerHTML = "÷";
      break;
    case "multiply":
      operand.innerHTML = "×";
      break;
    case "minus":
      operand.innerHTML = "-";
      break;
    default:
      operand.innerHTML = "+";
      break;
  }
}

/*Multi-Arithmetic Calc considerations:
- How can the user choose their operation?
// Option to select the operation

- How does the calculating function know which operation is chosen?
// If Else Statement which checks operator value

- Are all the operations supported arithmetically?
// All the operators have arithmetic code to support them

- Does our calculating function need any information fed to it?
// Fed with the operations (select) value. */
