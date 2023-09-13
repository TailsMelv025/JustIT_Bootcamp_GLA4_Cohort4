// Arrays and Objects in JavaScript
/* An Array is essentially a list, we write them like this: */

const fruits = ["apple", "banana", "pear", "grapes", "cherries", "plum", "pineapple"];

// In the above we have a list of fruits, each fruit will have an index number starting at [0]

/* Identify the fruit:
    fruits[0] = apple - as first item therefore takes index value zero
    fruits[1] Answer = ? 
    fruits[4] Answer = ? 
    fruits[6] Answer = ? 
*/


// Objects - What differences can you see from an array?

const owner = {firstName:"Joe", lastName:"Bloggs", company:"Blogs by Bloggs",
                age:45, value:34000000, passport:true, values:[1,2,3,4,5,6]}
// objects contain pair values e.g. firstName:"Joe" 
// owner.values[3]

/* Task - Find the query to match the answer (answer, query = ?):
    "Joe",  query = ? 
    45,  query = ? 
*/

console.log(owner.age);









//Functions in JavaScript
/* A JavaScript function is defined with the function keyword, followed by a name,
//  followed by parentheses ()
 paratheses () may contain values inside known as "parameters".
 The executable code is placed inside a pair of curly braces {}
 When JavaScript reaches a "return" statement, the function will stop executing
*/

// A simple example -
let totalPrice = till(3, 15); //45
// for the purpose of the demo, the first number = quantity (x), second = price(y)
console.log(totalPrice); //45
let a = 6;
let b = 8;
let totalPrice2 = till(a,b); // a = 6, b = 8

function till(quantity, price){
  //console.log(quantity); //3 //5
  console.log(price); //15 //25
  return quantity * price; 
  // price and quantity are fed into the function in the form of x and y. 
  // 3 will replace quantity, 15 price
  // return statement stops function running, it will also provide a value if specified. 
  // in example, return stops the function, and then gives the value of x * y
};
// 3 * 15 = 45
console.log(totalPrice); // 3*15  45
console.log(totalPrice2); // 6*8  48

let money = 20; 

function compound(){
  let compound = money + (money * 0.02);
  console.log(compound);
  return
};
compound(); //20.4

function netPay(quan, cost){
  let grossPay = till(quan, cost); //125
  // inside we have called the till function --> take values to till function
  // --> returns caluculated number 
  let calculateVat = grossPay * 0.8; // this will give us 80% of the gross value. 
  //Effectively taking 20% VAT 
  console.log(calculateVat);
  return calculateVat; // this will stop the function running and output the value of calculateVat. 
};
//netPay();

//netPay(5,15); // 1
console.log(netPay(5, 25)); // (96) - returns value (paid - 20% vat) // 2 3


//Csaba's code
function retro(){
  let car = "VW";
  return car
};

function myfavourite(VW){
  console.log(VW)
  let make = retro() + VW; // "VW" + "Golf" //VWGolf
  return make;
};

myfavourite("Golf");


//Kieran's Code
function double(number){
  let result = number * 2;
  console.log(result);
  return result;
};

double(50);


//Joanna's Code
let number = 20;

function addOne(number){
let equalsTo = number + 1;
console.log(equalsTo);
return equalsTo;
};

addOne(3);



//
function sumAway(valueOne, valueTwo) {
  //convert strings to numbers and add together  
  return Number(valueOne) - Number(valueTwo); // convert string value to a number value
};

//
function sumDiv(valueOne, valueTwo) {
  //convert strings to numbers and add together  
  return Number(valueOne) / Number(valueTwo); // convert string value to a number value
};

//
function sumMulti(valueOne, valueTwo) {
  //convert strings to numbers and add together  
  return Number(valueOne) * Number(valueTwo); // convert string value to a number value
};



// Basic Calculator - 
//an example to how we can link functions to HTML elements and get user input values

// sumUp will take 2 values and add them together
function sumUp(valueOne, valueTwo) {
  //convert strings to numbers and add together  
  return Number(valueOne) + Number(valueTwo); // convert string value to a number value
};
// valueOne in the above acts in the same way as x or y. 

// define some basic variables we need for the calculate function
let btn = document.getElementById('sumbtn');
// define some basic variables we need for the calculate function
const operator = document.getElementById('operations');
const numberOne = document.getElementById('numberone'); //INPUT 1
const numberTwo = document.getElementById('numbertwo'); //INPUT 2
const result = document.getElementById('result'); //Output
console.log(numberOne);



//console.log(numberOne);
//console.log(numberOne.type);

//Calculate - the fuction that brings it all together
/*function calculate(){
  //sum calls the sumUP function and valueOne and valueTwo are provided inside brackets
  let sum = sumUp(numberOne.value, numberTwo.value); //
  // numberOne.value = will get the input from the user for that box (2, 67, 890)
  result.value = sum.toString();
  //result is converted to a string and applied to the value property of our result input
};

/*
Multi-Arithmetic Calc consideratons:
- How can the user choose their operation?
// Option to select the operation
- How does the calculating function know which operation is chosen?
// If Else Statement which checks operator value
- Are all the operations supported arithmetically?
// All the operators have arithmetic code to support them
- Does our calculating function need any information fed to it?
// Fed with the operations (select) value.
*/






function calculate(){
  if( operator.value === "-"){
    var calc = sumAway(numberOne.value, numberTwo.value); 
  }
  else if (operator.value === "/"){
    var calc = sumDiv(numberOne.value, numberTwo.value); 
  }
  else if (operator.value === "x"){
    var calc = sumMulti(numberOne.value, numberTwo.value); 
  }
  else {
    var calc = sumUp(numberOne.value, numberTwo.value); 
  }

  result.value = calc.toString();
};


// If we used switch case to solve it would look like this:
  switch(operator.value){

  case "/":
    var calc = sumDiv(numberOne.value, numberTwo.value); 
    result.value = calc.toString();
  break;

  case "-":
    var calc= sumAway(numberOne.value, numberTwo.value);
    result.value = calc.toString();
  break;

  case "x":
    var calc = sumMulti(numberOne.value, numberTwo.value);
    result.value = calc.toString();
  break;
  
  case "+":
    var calc = sumUp(numberOne.value, numberTwo.value);
    result.value = calc.toString(); 
  break;

  default: 
  result.value = "Error";
  break;
};







/*
Create multi arthmetic calucaltor
HTML: you need to covert the p to a dropdown box (input type), id

JS:
function {
  operator logic = if statement 
  if value(ID = *) {
        1
  } else if (=/) {
        2
  } else if (= -) {
        3
  } else {
    +   4 (sumUp())
  }
}
Create 4 functions - which get called in the if statement
calculate() -still use
*/





// Example from previous lesson:

//let athleteAge = 31; //value from user
//let bodyweight = 100; // value from user



function inputVal(vOne, vTwo) {
  let athleteAge = vOne;
  let bodyweight = vTwo;
  let stageOne = 214 - 0.5 * athleteAge - 0.11 * bodyweight; // specific Max Heart Rate based on age and weight
  console.log(stageOne);
  return stageOne;
  };
  
  function age() {
   return prompt("Please enter your age:");

  };

  function weight(){
    return prompt("Please enter your weight in kg:");
  };
  
  document.getElementById("mhrSubmit").addEventListener("click", calculateMaxHR);

  function calculateMaxHR(){
    let numberUno = Number(age());
    console.log(numberUno);
    let numberDuo = Number(weight()); 
    let output = document.getElementById('mhr');
    console.log(output);
    // if statement here incase value from prompt === 0
    //if no issues, then run code below
    var max = inputVal(numberUno, numberDuo)
    output.value = max.toString();
    return
  };

  // SOLUTION TO TRY: Create a VAR in CalculateMaxHR that stores MHR value, 
  // then reuse that variable in cardioZone 
  // (if VAR value === 0 then run prompt else use VAR value)

  //let cardioZone = 70; // this value represent heart rate % for the target training zone //value from user

  function cardioZone() {
    return prompt("What is your target training zone in %?");
  }

  document.getElementById("bpmSubmit").addEventListener("click", trainingZone);

  function trainingZone() {
    console.log(max);
    if (Number(document.getElementById('mhr')) === 0) {
      one = prompt('What is your Max Heart Rate in bpm?')
    } else {
      one = document.getElementById('mhr').value
    };// this will become the value from user input or the value calculated by previous function
    training = Number(cardioZone());
    zone = one / 100 * training; 
    console.log(zone)
    return zone;
  };
  
