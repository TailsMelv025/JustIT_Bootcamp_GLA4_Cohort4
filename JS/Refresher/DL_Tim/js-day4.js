/* Scope - JavaScript has 3 types of scope:

-Block scope
-Function scope (aka local)
-Global scope

Block Scope:
Before ES6 (ECMAScript6, 2015), JavaScript had only Global Scope and Function Scope.
ES6 introduced two important new JavaScript keywords: let and const / block scope variables
These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block.
Example 1:*/

let num = false;

if (num == true) {
  let age = 20; // block scope
  console.log(age);
} 

else {
  const age = 21;
  console.log(age);
};

console.log(age);
//age --> this is undefined

// the variable age can't be used outside of block scope { }






/* However ...
Variables declared with var can NOT have block scope, so when used inside block scope { },
they can still be accessed from outside the block

Example 2:*/

const car = false;
if (car === false){
    var age = 20;
    console.log(age);
};

if (car === true){
  let age = 30;
  console.log(age);
};

console.log(age); 

// This age variable can be accessed outside the block scope

/*Why could we want access to a variable outside of block scope?










Function/Local Scope:
Variables declared within a JavaScript function, become LOCAL to the function

//https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/

// Other JS code pre function */

function legal() {
  var ageLegal = 18;
  // Other code inside function CAN use ageLegal variable
  console.log(ageLegal); // 18
  //let legal = ageLegal === 18; // true
};
//console.log(ageLegal); // local scope can't be accessed outside the scope
// Other JS code post function



/*Global Scope:
Variables declared Globally (outside any function) have Global Scope.

Global variables can be accessed from anywhere in a JavaScript program.

NB// Do NOT create global variables unless you intend to -
Your global variables (or functions) can overwrite window variables (or functions).
Any function, including the window object, can overwrite your global variables and functions.


Example working out Max Heart Rate and Training Zone for a Cardio machine:*/

const athleteAge = 31; 
let bodyweight = 100;

// General rules on variables- 
// var:global
// const: block scope (unless declare outside {}) and the value inside wil not change programtically.
// let: block scope (unless declare outside {}) but value can change inside. 
// variables not preceeded with var, let or const can be used inside a function.

function calculateMaxHR() {
  let stageOne = 214 - (0.5 * athleteAge) - (0.11 * bodyweight); // 187.5
  console.log(stageOne); // displaying twice
  return stageOne // display to the user on the frontend
};
calculateMaxHR();
//

//
var cardioZone = 70;

function trainingZone() {
  console.log(bodyweight);
  one = calculateMaxHR(); // value of stageOne
  console.log(one); // displaying third //187.5
  zone = one / 100 * cardioZone; 
  console.log(zone); // displays the fourth value
  return zone; // display to the user on the frontend
};

//
calculateMaxHR();
trainingZone();
//







//If-else conditionals & Switch case

console.log('If else if / switch');
// Conditionals = if/else (if) AND SWITCH




// if( 1st condition){
//   If condition met then code that you would like to execute here.
// }
// else if (2nd condition) {
//    If condition met then code that you would like to execute here.
// }
// else if (3rd condition) {
//    If condition met then code that you would like to execute here.
// }
// else {
//   If not met then code that you would like to execute here.
// };



const z = 1; //Global scope

if ( z === 1){
  let z = 23; //Block scope
  console.log(z); // What Value Will I get? 23
} 
else {
  console.log("false");
};
console.log(z); 

// Comparison Operators
// ==	equal to (value)
// ===	equal value and equal data type (e.g. number, string)
// !=	not equal
// !==	not equal value or not equal data type
// >	greater than 
// <	less than
// >=	greater than or equal to
// <=	less than or equal to

// let (we can change the value in the code) and const (we can't change the value in the code)

//const age = 17;
//age = 17;
let age3 = Number("17"); // user input - typically will be a string

//let age2 = 19;
//const age4 = 5;
//const age4 = 23; 

var age2 = 19;

// age is greater than 18
if(age2>18){
  console.log('You can enter the club!');
}
// == comparison operator, = assignment operator
else if(age2==18){   //elif - else if 
  console.log("ID Checked - Permission granted")
}
else{
  console.log("Denied!");
};



//5-13 range using AND operator - Both conditions must be met
//if(age >=5 && age <=13) // 5,6,7,8,9,10,11,12,13

//5-13 OR - Only 1 condition must be met
//if(age <=5 || age >=13) //

// Create your own If Statement, Try to include 2 conditions (else if), 
//  outcomes must be console logged.

//Cinema Films Age Checker
let customerAge = Number(prompt("What the customer's age?"));
let filmRating = Number(prompt("What certificate rating is the film?"));
let PG = Boolean(prompt("Accompanied with an Adult?", "true or false?"));

if(customerAge>=18 && customerAge>=filmRating){
  //18
  console.log("Customer is eligible to view all films")
}
else if(customerAge>=15 && (customerAge>=filmRating || filmRating !== 18)){
  //15
  console.log("Customer is eligible to view all films, except 18 rated")
}
else if(customerAge>=12 && (customerAge>=filmRating || (filmRating !== 15 ||filmRating !== 18))){
  //12
  console.log("Customer is eligible to view all films, except 15 & 18 rated")
}
else if((customerAge>=8 || customerAge<=11) && (PG === true || String(filmRating)== "PG")){
  //PG 
  console.log("Customer is eligible to view U and PG films(if accompanied by an adult)")
}
else{
  //U
  console.log("Customer is eligible to view U rated films only")
}






//Range 18-25 - need to check.
let person= Number(prompt("How old is the person?"));
//let person = 22;
// age is greater than OR equal to 18
if(person>25){
  console.log('You can enter the club!');
}
// == comparison operator, = assignment operator
else if(person>17 && person<=25){  //person need to be older than 17, younger or equal to 25
  // 18,19,20,21,22,23,24,25
  let id = confirm("Has the person shown ID?");
  if(id === true){
    console.log('permission granted');
  }
  else {
    console.log('sorry no ID, no entry!');
  };
}
else{
  console.log("denied!");
};





/* Checking procedure
if(Condition){

  if(condition){

    if(condition){

      if(condition){
         // You're Approved 
      } else {
        // Failed check 4
      }
    } else {
     // Failed check 3
    }
  } else {
    // sorry you don't have the required credit rating
  }
} else {
  //sorry you dont meet the required age!
};
*/


let customer = {age:19, creditScore:500, homeOwner:true, citizenship:"no", visa:true};
let customer1 = {age:Number(prompt("what is your age?")), creditScore:Number(prompt("what is your credit score?")), homeOwner:Boolean(prompt("are you a home owner?")), citizenship:prompt(" Do you have UK Citizenship?"), visa:prompt("Do you have a UK Visa?")};

const customer2 = 23;
console.log(customer)
customer.age = 17;
console.log(customer)
customer.address = "18 windall cresent";
console.log(customer);


if(customer.age > 18){
  console.log("Excellent you meet our age requirement!")
  if(customer.creditScore >= 499){
    console.log("Excellent you meet our credit score requirement!")
    if(customer.citizenship === "yes" || customer.visa === true){
      console.log("Excellent you have UK citizenship or a valid visa!")
      if(customer.homeOwner === true){
        console.log("Excellent you're a home owner and approved!")
      }
      else {
        console.log("sorry you are not a home owner")
      }
    }else {
      console.log("sorry you don't have UK citizenship or a visa")
    }
  }
  else {
    // sorry you don't have the required credit rating
    console.log("sorry you don't have the required credit rating")
  }
}
else {
  //sorry you dont meet the required age!
  console.log("sorry you dont meet the required age!")
};










// more the 3 else if in an if statement - use a switch case statement instead
// switch case - if/else

let cups = 50;
// Problem - the program should exit as and when it finds the right case.
switch(cups){
  // case 10: if the value of cups is 10.
  case "Ten": console.log('Answer is 10'); 
            break; // required otherwise we can't exit the case.
  case 20: console.log('Answer is 20');
            break;
  case 30: console.log('Answer is 30');
            break;
  case 40: console.log('Answer is 40');
           break;
  // if our value doesn't match our case numbers it will revert to our default value.
  default: console.log("The value doesn't match with any cases");
            break;
};


let scenario = 4;

switch(scenario){
  case 1: 
          console.log(1);
          break;
  case 2: 
          console.log(2);
          break;
  case 3: 
          console.log(3);
          break;
  default: 
          console.log("Sorry No Match!!");
          break;
};





// Task - use a switch statement to display the days of the week.
// 1 - Sunday, 2 Monday.... 7 = Saturday

let day = 'monday'; 

switch(day){
 
  case 'monday': console.log('Answer is Monday'); 
            break; // required otherwise we can't exit the case.

  case 'tuesday': console.log('Answer is Tuesday');
          break;

  case 'wednesday': console.log('Answer is Wednesday');
            break;

  case 4: console.log('Answer is Thursday');
            break;

  case 5: console.log('Answer is Friday');
            break;
  
  case 6: console.log('Answer is Saturday');
            break;
  
  case 7: console.log('Answer is Sunday');
            break;
  // if our value doesn't match our case numbers it will revert to our default value.
  default: console.log("Sorry we don't have a day on that value!");
            break;
};


let numbers = [1,5,8,4,6]
          // i 0 1 2 3 4 5 6 7 8

switch(numbers[1]){ 
case 1:
  //code 1
case 5:
  // code 2
};







console.log(athleteAge + bodyweight);