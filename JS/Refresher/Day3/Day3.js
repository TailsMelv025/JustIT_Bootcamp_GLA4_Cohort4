/* Coercion
Type coercion is similar to type conversion
The only key difference is the coercion performed automatically or implicitly by the JavaScript engine
*/

/* Number Coercion
Math operators such as subtract(-), multiply(*), divide(/), modulus(%)
We don't use plus (+) in number coercison as it is used in string coercion
*/

console.log("12" / 2); // returns: 6
console.log(2 * "2"); // returns: 4
console.log("10" / 2); // returns: 5
console.log("10" % 2); // returns: 0
console.log(true * 7); // returns: 7
console.log(true + 10); // returns: 11

/* String Coercion
When a string is added with the number or non-string value using
the plus(+) operator, then the output of the expression is always a string
*/

// If the first operand is a string and the second a non-operand,
// Then the +

console.log(true + 2); // returns: 3
console.log(false + 2); // returns: 2
console.log(20 * true); // returns: 20
console.log(4 / false); // returns: Infinity
