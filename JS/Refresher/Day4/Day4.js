// Scope
/* JavaScript has 3 types of scope:
- Block Scope
- Function Scope (AKA Local)
- Global Scope
*/

//Block Scope:
// Variables declared inside a { } block cannot be accessed from outside the block

let num = true;

if (num == true) {
  let age = 20;
  console.log(age);
} else {
  const age = 21;
  console.log(age);
}

// console.log(age);
// age --> this is undefined

// the variable age can't be used outside of block scope { }

/* Function/Local Scope:
Variables declared within a JavaScript function
become LOCAL to
*/

function legal() {
  var ageLegal = 18;
  // other code inside function CAN use ageLegal variable
  console.log(ageLegal); //18
}
// console.log(ageLegal); // returns error as it can't be accessed outside the scope
legal();

/*Global Scope:
Variables declared globally (outside any function) have Global Scope.
Global Variables can be accessed from anywhere in the JavaScript program.

Do NOT create global 
Your global variables (or functions) can overwrite window variables (or functions).
Any function, including the window object, can overwrite your global variables and function
*/

const atheleteAge = 31;
let bodyweight = 100;

// General rules on variables-

// var:global
// const: block scope (unless declare outside {}) and the value inside wil not change programtically.
// let: block scope (unless declare outside {}) but value can change inside.
// variables not preceeded with var, let or const can be used inside a function.

function calculateMaxHR() {
  let stageOne = 214 - 0.5 * atheleteAge - 0.11 * bodyweight; // 187.5
  console.log(stageOne); // displaying twice
  return stageOne; // dsplay to the user on the frontend
}

const z = 1; // Global scope

if (z === 1) {
  const z = 23; // Block scope
  console.log(z); // returns: 23 from block scope
} else {
  console.log("False");
}
console.log(z); // returns: 1 from global scope

// TODO - Build an if else statement
const n = Math.random();
console.log(n);

if (n >= 0.5) {
  console.log("Big Number");
  //   return true;
} else {
  console.log("Small Number");
  //   return false;
}

var age2 = 19;

// age is greater than 18
if (age2 > 18) {
  console.log("You can enter the club!");
}
// == comparison operator, = assignment operator
else if (age2 == 18) {
  // elif - else if
  console.log("ID Checked - Permission granted");
} else {
  console.log("Denied!");
}

let age = 10;
// 5-13 range using AND operator - Both conditions must be met
if (age >= 5 && age <= 13) {
  //5,6,7,8,9,10,11,12,13
  console.log(
    "The age is more than or equal to 5 and less than or equal to 13"
  );
}
// Less than 5, more than 13 range using OR operator - Either condition must be met
if (age <= 5 || age >= 13) {
  //...1,2,3,4,5,13,14,15,16,17...
  console.log(
    "The age is more than or equal to 13 and less than or equal to 5"
  );
}

// Cinema Films Age Checker
const customerAge = Number(prompt("What is the customer's age?"));
let filmRating = Number(prompt("What certificate rating is the film?"));
let PG = Boolean(prompt("Accompanied with an adult?", "True or False?"));

if (customerAge >= 18 && customerAge > filmRating) {
  //18
  console.log("Customer is eligible to view all films");
} else if (
  customerAge >= 15 &&
  (customerAge >= filmRating || filmRating !== 18)
) {
  //15
  console.log("Customer is eligible to view all films, except 18 rated");
} else if (
  customerAge >= 12 &&
  (customerAge >= filmRating || filmRating !== 15 || filmRating !== 18)
) {
  //12
  console.log("Customer is eligible to view all films, except 15 & 18 rated");
} else if ((customerAge >= 8 || customerAge <= 11) && PG === true) {
  //PG
  console.log(
    "Customer is eligible to view U and PG films (if accompanied by an adult)"
  );
} else {
  //U
  console.log("Customer is eligible to view U rated films only");
}

// TODO - Build an if else statement that checks age for an exclusive nightclub
// Need to apply an age range for 18-25 to check ID
// ID Check will be true/false an enables access depending on the results
const clubgoerAge = Number(
  prompt("Welcome to the Iceberg Lounge", "What is your age?")
);
let IDcheck = Boolean(prompt("Do you have a valid ID?"));

if (clubgoerAge > 25) {
  // Over 25
  console.log("Come on in.");
} else if (clubgoerAge >= 18 && clubgoerAge <= 25) {
  // 18-25 and valid ID
  if (IDcheck === true) {
    console.log("Your ID is valid. Come on in.");
  } else {
    // 18-25 and invalid ID
    console.log("Your ID is no longer valid.");
  }
} else {
  // Under 18
  console.log("This club is for 18 and over.");
}

let customer = {
  age: 19,
  creditScore: 500,
  homeOwner: true,
  citizenship: "no",
  visa: true,
};

if (customer.homeOwner === true) {
  console.log("You're Approved");
} else if (customer.age >= 18) {
  if (customer.creditScore >= 360) {
    if (customer.visa === true || customer[citizenship] !== "no") {
      // You're Approved
      console.log("You're Approved");
    } else {
      // Failed check 3
      console.log("Sorry, you must have a valid Visa");
    }
  } else {
    // sorry you don't have the required credit rating
    console.log("Sorry, you don't have the required credit rating");
  }
} else {
  //sorry you dont meet the required age!
  console.log("Sorry, you dont meet the required age!");
}

// If more than 3 else if statements in an if statement, use a switch case statement instead
// switch case - if/else

let scenario = 4;
switch (scenario) {
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
    console.log("Sorry, no match.");
    break;
}

// TODO - switch case statement to display the days of the week
let dayOfTheMonth = Number(
  prompt(
    "What day in August 2023 is it?",
    "Type in the Number for the day of the month"
  )
);
let dayOfTheWeek = dayOfTheMonth % 7;

switch (dayOfTheWeek) {
  case 1:
    console.log("It is a Tuesday");
    document.write(`It is Tuesday, ${dayOfTheMonth} August 2023`);
    break;
  case 2:
    console.log("It is a Wednesday");
    document.write(`It is Wednesday, ${dayOfTheMonth} August 2023`);
    break;
  case 3:
    console.log("It is a Thursday");
    document.write(`It is Thursday, ${dayOfTheMonth} August 2023`);
    break;
  case 4:
    console.log("It is a Friday");
    document.write(`It is Friday, ${dayOfTheMonth} August 2023`);
    break;
  case 5:
    console.log("It is a Saturday");
    document.write(`It is Saturday, ${dayOfTheMonth} August 2023`);
    break;
  case 6:
    console.log("It is a Sunday");
    document.write(`It is Sunday, ${dayOfTheMonth} August 2023`);
    break;
  default:
    console.log("It is a Monday");
    document.write(`It is Monday, ${dayOfTheMonth} August 2023`);
    break;
}
