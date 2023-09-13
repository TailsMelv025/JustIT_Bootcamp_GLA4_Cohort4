// Variables
//What are they? - Containers for storing information

// Four ways we can declare a JS Variable:
var numberA = 5; // * added in 1995 scope - global
let numberB = 6; // * added in 2015 scope - block
const numberC = 7; // * added in 2015 // can't be change programatically
numberD = 8; // to do this it must have been declared previously

//numberB = 9  re-declaring

console.log(numberA);
console.log(numberB);
// camelCase
//newSchoolCalenderDate




//If you want a general rule: always declare variables with const.
//If you think the value of the variable can change, use let.
// e.g. :

const car1 = 25000; //constant value, can't be changed programatically
const car2 = 35000; //constant value, can't be changed programatically
let total = car1 + car2; // Value can change programatically
console.log(total); //60000

let daysOfTheWeek = 4;




// JavaScript variables must be identified with unique names called identifiers.
// they can be short e.g. x and y or descriptive e.g. total, age. 
// Names that are more than one word must be typed in camelCase, where the first letter of the new word is a capital eg. breakfastOptions
// The capital letter signifies a 'camel hump.





// Data Types
const height = 200;                        // Number value

const weight = 85;



// String - text inside a pair of quotation marks, common practice is double quotation (" "), 
// but single quotation also works (' ')
let lName1 = 'Jones';                     // String value

const lName2 = "James"; //convention
console.log(lName2);





// Objects - value pairs separated by commas inside a set off curly braces 
// e.g {name:"Tim"} or {cost:24000} 
let profile = {fName:"Tim", lName:"Jones", age:27, color:"green"};

console.log(profile.color);
console.log(profile.age);

// Challenge - Can you log the age only?
console.log(profile.age);




//Boolean - returns either true or false value:

const x = 7;
const y = 7;
const z = 9;

let p = (x == y);       // Returns true (1, TRUE)
let q = (x == z);       // Returns false(0, FALSE)

console.log(p); //true
console.log(q); //false





                  // [0]    [1]     [2]     [3]      [4]
const transport = ["Car", "Train", "Bus", "Plane", "Lorry"]
console.log(transport)


//Arrays - a comma separated list inside square brackets:
                    //0         //1         //2           //3
const flavours = ["Vanilla", "Chocolate", "Strawberry", "Mint"];
// They are index zero-based, so that means the first item 
// (Vanilla in the above) is [0], the second (Chocloate) is [1].
// This is important when we want to target items inside an array!

console.log(flavours[2] + "",flavours[3]);
console.log(flavours)


flavours.push("lemon");
console.log(flavours);

flavours.push("orange", "rocky road", "truffles");
console.log(flavours);

console.log(flavours [6]);

console.log(flavours[1]); // At this point Chocolate was at index 1

flavours[1] = "caramel"; // We redfine the value 

console.log(flavours[1]); // Now index 1 value is caramel

console.log(flavours);

flavours.pop(); // removes the last item from the array
console.log(flavours);










//Operators

//Arthmetic Operators:
// + = Addition 
let add = 7 + 9; // 'jam' + 'cake' = 'jamcake'

// - = Subtraction
let subtract = 7 - 9;

// * = Multiplication
let multiply = 7 * 9; 

// ** = Exponentiation (power of)
let powerOf = 3 ** 4; // 3x3x3x3

// / = Division
let divide = 12 / 3; //4

// % = Modulus (Division Remainder)
let remainder = 12 % 7;
let remainder1 = 12 % 2;

console.log(remainder);


// ++ = Increment
// 1++ OUTCOME = 1 2 3 4 5 6 etc.

// -- = Decrement
// 1-- OUTCOME = 0 -1 -2 -3 -4 etc. 







// Comparison Operators

// ==	equal to
// ===	equal value and equal type  
a="7";  b=7;  
console.log(a==b);//(true)
console.log(a===b);//(false)

console.log(a==="7");
console.log(b===7);

console.log(a === ("7"||"8")); //true "OR"
console.log(a === ("7"&&"8")); //false "AND"

// !=	 not equal
// !== not equal value or not equal type


// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to

console.log('saniele' < 'timothy');


let town="York"; 
let city="york";
//let city2 = city.charAt(0).toUpperCase() + city.slice(1);
console.log(city);
console.log(town==city); //false



//Task 1  - type out the following into code, 
// you can replace the word "num" with your own variables, e.g:
let c = 3;
let d = 4;
let e = 5;

// BIDMAS or BODMAS - *square brackets = extra information to complete the line*

//1) num equal to (num plus num)
   console.log(e == (d+c));
//2) num not equal to (num plus num) 

//3) num equal to (num divided num)

//4) num equal [value and type] to num

//5) num greater than num

//6) (num subtract num) less than or equal to (num plus num) 

//7) (num times num) greater than num






/* Extension - Create 3 variables with string values, 
       join them together using operators*/
let value1 = "lazy"
let value2 = "jump"
let value3 = "mouse"








console.log( value1 + " " + value3);
console.log( value1 + " " + value2);
console.log( value2 + " " + value3);




// https://www.w3schools.com/js/js_operators.asp
