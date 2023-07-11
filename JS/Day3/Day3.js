// Arrays
document.write(`<br/><h1> Arrays </h1>`);

let a = "A";
let b = "B";
let c = "C";
let d = "D";
let e = "E";
let f = "F";
let g = "G";

let letters = ["A", "B", "C", "D", "E", "F", "G"];
document.write(letters,`<br/>`);

// In JavaScript, we start counting from 0 (array is a zero-index)

// Access items in an array using the index value
document.write(letters[0],`<br/>`);
document.write(letters[2],`<br/>`);
document.write(letters[6],`<br/>`);
document.write(letters[7],`<br/>`);
document.write(letters[8],`<br/>`);
document.write(letters[-1],`<br/>`);

// Array Property: Length
document.write(`<br/><h2> Array Property: Length </h2>`);
// Check the total number of items in an array using the dot notation followed by length
document.write(letters.length,`<br/>`);

// Array Methods
document.write(`<br/><h2> Array Methods </h2>`);

// Add an item to an array using the push method
letters.push("H");
document.write(letters,`<br/>`);
document.write(letters.length,`<br/>`);

// Remove the last item to an array using the pop method
letters.pop();
document.write(letters,`<br/>`);
document.write(letters.length,`<br/>`);

// Update an item in an array using their index value
letters[4] = "?";
document.write(letters,`<br/>`);
document.write(letters.length,`<br/>`);

letters.splice();
letters.shift();
letters.unshift();

// You can create an empty array 
let emptyArray = []


// Objects
document.write(`<br/><h1> Objects </h1>`);

// Syntax: let object{key:value}
let lettersObject = {
    L:"12", 
    M:"13", 
    N:"14", 
    O:"15", 
    P:"16"
};

// Access object data using the bracket notation
document.write(lettersObject[`L`],`<br/>`);

// Access object data using the dot notation
document.write(lettersObject.P,`<br/>`);

document.write(lettersObject.N,`<br/>`);
lettersObject[`N`] = `Nn`;
document.write(lettersObject[`N`],`<br/>`);
document.write(lettersObject.Nn,`<br/>`);
document.write(lettersObject[`O`],`<br/>`);
lettersObject.O = `Oo`;
document.write(lettersObject.O,`<br/>`);

// Add new property to an object data using the bracket notation
lettersObject.M = [`m`,`Middle`];
document.write(lettersObject.M,`<br/>`);
document.write(lettersObject.M[0],`<br/>`);




// document.write(,`<br/>`);