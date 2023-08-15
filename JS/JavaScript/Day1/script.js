// A Variable is a container that holds value (of any datatype)

// !Var = old syntax - Don't use
var firstPerson = "Melvin";
// You can define a the same variable with var as many times as you would like

// let method for declaring variables that we may want redeclare/reassign the value
let secondPerson = "Abdul"; //declare secondPerson variable for the first time
// let secondPerson = "Osei"; We can't redeclare a let variable
secondPerson = "Osei"; //redeclare/reassign the value associated with secondPerson variable

// Declared user variable but with no value, which leads to undefined
let user; // It's "undefined" because once defined with let, it can't be defined with let again, 
// but it CAN be defined as just the variable without "let"

console.log("My name is",firstPerson);
console.log("Your name is",secondPerson);

document.write("My name is",firstPerson);
document.write("<br/>Your name is",secondPerson);
document.write("<br/>This variable is declared but not initialised<br/>",user);

console.log(user);

// use const to declare vairables with value(s) that will never change
const daysInWeek = 7; 
document.write("<br/> Modified value:", daysInWeek);

// We cannot overwrite the values of a constant variable
daysInWeek = 5;
document.write("<br/> Modified value:", daysInWeek);

// JavaScript Datatypes
document.write("<br/> JavaScript Datatypes <br/>");
let strVariable = "Hello";
document.write("<br/> This is a string");
document.write("<br/>", strVariable);

// numbers
    // float/decimal
    // integer/number
    // long
let num1 = 10;
let myFloat = 12.6;
let longVariable = 123456789012345; 
document.write("<br/>", num1);
document.write("<br/>", myFloat);

// Boolean
    // TRUE or FALSE
let myBool1 = true;
let myBool2 = false;
document.write("<br/>", myBool1);
document.write("<br/>", myBool2);

document.write("<br/>undefined ", undefined);

let firstName = "Melvin";
let lastName = "Osei";

// Use the plus operator to concatenate(to join)
let fullName1 = firstName + " " + lastName;
let fullName2 = "Melvin"+" "+"Osei";

// JavaScript using Template
document.write("<br/> JavaScript using Template Literals");

let breakfast = "Toast";
let lunch = "Bread";
let dinner = "Rice";

document.write(`Today, ${fullName1} had ${breakfast} for breakfast, is having ${lunch} for lunch, and will have ${dinner} for dinner.`);
document.write(`<br/> ${firstName}`);

let $ = "I am a dollar";
document.write(`<br/>${$}`);

let cashAtBank = 10000;
document.write(`<br/> $${cashAtBank}`);
