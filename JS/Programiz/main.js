// GETTING STARTED WITH JAVASCRIPT
console.log("hello world");

// JAVASCRIPT VARIABLES AND CONSTRAINTS

// A variable is a container (storage area) to hold data
let num = 5; // num is a variable storing 5

// We use var or let to declare variables
var a; // variable declared with var - function scoped
let b; // variable declared with let - block scoped
// it is usually recommended to use let instead of var, but some browsers may not support let

let c;
c = 3; // equal (=) to assign a value to a variable
console.log(c); //returns: 3

let d = 4; // variable initialised during its declaration (given a value when made)
let e = 5,
  f = 6,
  g = 7; // multiple values declared in a single line

// if you use a variable without initialising it, it will have an undefined value
let h; // h is the name of the variable without a value
console.log(h); //returns: undefined

// It is possible to change the value stored in the variable
let i = 5; // 5 is assigned to variable i
console.log(i); //returns: 5
i = 3; // value of variable i is changed
console.log(i); //returns: 3

// valid
let j = "hello"; // variable names can start with a letter
let _j = "hello"; // variable names can start with an underscore (_)
let $j = "hello"; // variable names can start with a dollar sign ($)
// invalid
//* let 1j="hello"; //returns error as variable names cannot start with numbers
//* let new = 5; //returns error as "new" is a keyword

// variable names are case sensitive
let k = "hi";
let K = "hello";
console.log(k); //returns: hi
console.log(K); //returns: hello

// It is best to name your variables apples or numberOfApples rather than x or n
// camelCase is often used by programmers to write two words as oneWord i.e. firstName, annualSalary

const l = 11; // constants cannot change value once initialised
//* l = 12; //return error as constants cannot be changed
console.log(l);

//* const m; //return error as missing initialiser in declaration
m = 13;
console.log(m);

// Only use const if you're sure the value of a variable won't change throughout the program

// JAVASCRIPT CONSOLE.LOG()

// console.log() writes messages to the console
let sum = 44;
console.log(sum); //returns: 44

//* console.log(message); // the usual syntax of console.log() where message is a variable or value
// program to print a sentence
console.log("I love JS"); //passing string, return: I love JS
// program to print variable values
const greet0 = "Hello"; // storing values
const name0 = "Melvin"; // storing values
console.log(greet0 + " " + name0);

// JAVASCRIPT DATA TYPES

const n = 5; // integer data - integer or floating-point number (decimals and exponentials) - 3, 3.234, 3e-2, etc.
const o = "Hello"; // string data - textual data - 'hello', "hello world", etc.
// BigInt - integer value based on something else - 900719925124740999n , 1n, etc.
// boolean - only two values: true or false, 1 or 0, yes or no
// undefined - a data type whose variable has not been given - let a;
// null - no value - let a = null;
//? symbol - data that is unique and unable to change - let value = Symbol("hello");
// object - key-value pairs - let student = {}; key=student, value={}
// Apart from object which is non-primitive, all other data types are primative, as object can store collections of data

// String is used to store text and is surrounded by quotes
const name1 = "Melvin"; // single quotation mark
const name2 = "Osei"; // double quotation mark
const name3 = `He is ${name1} ${name2}.`; // backtick
// backticks are generally used when you need to include variables or expressions in a string ${like this}

// Number is an integer or floating number
const number1 = 3; // integer 3
const number2 = 3.14; // floating number, decimal 3.14
const number3 = 3e5; // floating number, exponential 3 * 10^5
// Number can also be +infinity, -infinity, and NaN (Not a Number)
const number4 = 3 / 0;
console.log(number4); // infinity
const number5 = -3 / 0;
console.log(number5); // -infinity
const number6 = "abc" / 3; // strings can't be divideed by numbers
console.log(number6); // NaN (Not a Number)

// BigInt is a number bigger than (2^53 - 1) and smaller than -(2^53 - 1)
// This is done by adding n to the end of an integer, as regular integers must be within that range
const value1 = 900719925124740998n; // BigInt value (2^53 - 1)n
const result1 = value1 + 1n; //adding two big integers to get (2^53)n
console.log(result1); //returns: "900719925124740999n"
//* const value2 = 900719925124740998n;
//* const result2 = value2 + 1;
//* console.log(result2); //returns: error, BigInt and Number cannot be added

// Boolean is one of two values: true or false
const p = true;
const q = false;

// Undefined is a data type where the value is not assigned
let name4;
console.log(name4); //returns: undefined
let name5 = undefined;
console.log(name5); //returns: undefined
// it is recommended to assign "null" to an unknown or empty variable instead of explicitly assigning "undefined"

// Null is an empty or unknown variable
const number0 = null; // null is not the same as NULL or Null

// Symbol values are immutable primative values that are unique
const value3 = Symbol("Hello");
const value4 = Symbol("Hello");
if (value3 === value4) {
  console.log("Same Value");
} else {
  console.log("Different Value");
}
// value3 and value4 are different values

// Objects can store arrays (a collection of data)
const student0 = {
  firstName: "Melvin",
  lastName: "Osei",
  age: 25,
};
console.log(student0);

// JavaScript is a dynamically typed (loosely typed) language
// JavaScript will automatically determine the variables' data type for you
let data0; // undefined data type
console.log(data0); //returns: undefined
data0 = 5; // integer data type
console.log(data0); //returns: 5
data0 = "JavaScript Programming"; // string data type
console.log(data0); //returns: JavaScript Programming

// typeof can be used to find the data type
let r;
console.log(r + " is " + typeof r);
r = "ram";
console.log(r + " is " + typeof r);
r = 4;
console.log(r + " is " + typeof r);
r = true;
console.log(r + " is " + typeof r);
r = null;
console.log(r + " is " + typeof r); // typeof returns "object" for a null value, which is a known issue

// JAVASCRIPT OPERATORS

// Operators are symbols used to perform operations on operands (values and variables)
console.log(2 + 3); //returns: 5

// Assignment operators
s = 7; // assignment operator s = 7
s += 5; // addition assignment s = s + 5
s -= 2; // subtraction assignment s = s - 2
s *= 3; // multiplication assignment s = s * 3
s /= 2; // division assignment s = s / 2
s %= 2; // remainder assignment s = s % 2
s **= 2; // exponentiation assignment s = s^2
// ++s or s++ increment by 1
// --s or s-- decrement by 1

// Arithmetic Operators
let u = 5;
let v = 2;
console.log(u + v); // returns: 7 - addition
console.log(u - v); // returns: 3 - subtraction
console.log(u * v); // returns: 10 - multiplication
console.log(u / v); // returns: 2.5 - division
console.log(u % v); // returns: 1 - remainder (5/2)=2r1
console.log(u ** v); // returns: 25 - exponential

console.log(v); // returns: 2
console.log(v++); // returns: 2 then adds 1 - increment
console.log(v); // returns: 3
console.log(++v); // adds 1 then returns: 4 - increment
console.log(v); // returns: 4

console.log(u); // returns 5
console.log(u--); // returns: 5 then takes 1 - decrement
console.log(u); // returns: 4
console.log(--u); // takes 1 then returns: 3 - decrement
console.log(u); // returns: 3

// Comparison Operators
// == equal to
// != not equal to
// === strict equal to (equal AND same data type)
// !== strict not equal to
// > greater than
// >= greater than or equal to
// < less than
// <= less than or equal to
// returns: true or false

// Logical Operators
// && AND
// || OR
// ! NOT
console.log(true && true); // returns: true
console.log(true && false); // returns: false
console.log(false && true); // returns: false
console.log(false && false); // returns: false
console.log(true || false); // returns:
console.log(false || true); // returns:
console.log(!true); // returns: false
console.log(!false); // returns: true

// Bitwise Operators (base 2)
// & Bitwise AND
// | Bitwise OR
// ^ Bitwise XOR
// ~ Bitwise NOT
// << Left Shift - push left and add 0 to right end i.e. 0100 to 1000 in 4-bit
// >> Sign-propagating right shift - push right and add leftmost bit to left end i.e. 1000 to 1100 in 4-bit
// >>> Zero-fill right shift - push right and add 0 to left end - i.e. 1000 to 0100 in 4-bit

// String Operators
console.log("hello" + "world"); // concatenation operator, returns: helloworld
let t = "JavaScript";
t += " tutorial"; // t = t + ' tutorial'
console.log(t); // returns: JavaScript tutorial

// Other Operators
let w = (1, 3, 4); // , evaluates multiple operands and returns the value of the last operand
console.log(w); // returns: 4
console.log(w > 3 ? "success" : "error"); // returns: success, ?: returns value based on condition (similar to if? else:)
console.log(typeof w); // returns: number, returns data type as a string
void w; // discards the expression's return value
console.log(w);

// in, returns true if the specified property is in the object
// instanceof, returns true if the specified object is of the specified object type
delete w; // deletes an object's property or an element of an array

// JAVASCRIPT COMMENTS
// Single Line Comment
/*
Multi-Line Comment
*/

// JAVASCRIPT TYPE CONVERSIONS

// Implicit Conversion - Automatic type conversion

// numeric string with + gives string type
let x;

x = "3" + 2;
console.log(x); // returns: 32
console.log(typeof x); // returns: string

x = "3" + true;
console.log(x); // returns: 3true
console.log(typeof x); // returns: string

x = "3" + undefined;
console.log(x); // returns: 3undefined
console.log(typeof x); // returns: string

x = "3" + null;
console.log(x); // returns: 3null
console.log(typeof x); // returns: string

// numeric string used with -, /, * results number type
let y;

y = "4" - "2";
console.log(y); // returns: 2
console.log(typeof y); // returns: number

y = "4" - 2;
console.log(y); // returns: 2
console.log(typeof y); // returns: number

y = "4" * 2;
console.log(y); // returns: 8
console.log(typeof y); // returns: number

y = "4" / 2;
console.log(y); // returns: 2
console.log(typeof y); // returns: number

// non-numeric string used with -, /, * results NaN (Not a Number)
let z;

z = "hello" - "world";
console.log(z); // returns: NaN
console.log(typeof z); // returns: number

z = "4" - "world";
console.log(z); // returns: NaN
console.log(typeof z); // returns: number

// if boolean is used, true = 1, false = 0
let aa;

aa = "4" - true; // 4 - 1
console.log(aa); // returns: 3
console.log(typeof aa); // returns: number

aa = 4 + true; // 4 + 1
console.log(aa); // returns: 5
console.log(typeof aa); // returns: number

aa = 4 + false; // 4 + 0
console.log(aa); // returns: 4
console.log(typeof aa); // returns: number

// null is 0 when used with number
let ab;

ab = 4 + null; // 4 + 0
console.log(ab); // returns: 4
console.log(typeof ab); // returns: number

ab = 4 - null; // 4 - 0
console.log(ab); // returns: 4
console.log(typeof ab); // returns: number

// arithmetic operation of undefined with number, boolean, or null gives NaN
let ac;

ac = 4 + undefined;
console.log(ac); // returns: NaN

ac = 4 - undefined;
console.log(ac); // returns: NaN

ac = true + undefined;
console.log(ac); // returns: NaN

ac = null + undefined;
console.log(ac); // returns: NaN

// Explicit Conversion - Manual type conversion

// Convert to Number
let ad;

ad = "324";
console.log(typeof ad); // returns: string
ad = Number(ad); // string to number
console.log(ad); // returns: 324
console.log(typeof ad); // returns: number

ad = "324e-1";
console.log(typeof ad); // returns: string
ad = Number(ad); // string to number
console.log(ad); // returns: 32.4
console.log(typeof ad); // returns: number

ad = true;
console.log(typeof ad); // returns: boolean
ad = Number(true); // boolean to number
console.log(ad); // returns: 1
console.log(typeof ad); // returns: number

ad = Number(false); // boolean to number
console.log(ad); // returns: 0
console.log(typeof ad); // returns: number

ad = Number(null);
console.log(ad); // returns: 0

ad = Number("  ");
console.log(ad); // returns: 0
