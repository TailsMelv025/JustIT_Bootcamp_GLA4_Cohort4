// High order function is a function that takes in other functions a parameter

function add(paraNum1, paraNum2){
    return paraNum1+paraNum2;
};
function mult(paraNum1, paraNum2){
    return paraNum1*paraNum2;
};

// this is the high order function
function calculator(paraNum1, paraNum2, operator){
    return operator(paraNum1, paraNum2);
}

let argNum1=parseInt(prompt(`Enter first number: `));
let argNum2=parseInt(prompt(`Enter second number: `));

// call the high order function and pass in function add/mult as parameter
let myCalculator1 = calculator(argNum1, argNum2, add)
document.getElementById(`highOrder1`).innerHTML+=myCalculator1;

let myCalculator2 = calculator(20, 2, mult)
document.getElementById(`highOrder2`).innerHTML+=myCalculator2;
