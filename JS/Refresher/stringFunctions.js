let str1 = "This is a string";
// index    0123456789ABCDEF

console.log(str1.indexOf("is")); // returns 2 from "thIS is a string" - first IS

console.log(str1.lastIndexOf("is")); // returns 5 from "this IS a string" - last IS

// Substring from a String
// slice, substr(substrate), substring

let str2 = "This is a string";
// index    0123456789ABCDEF

console.log(str2.slice(1, 4)); // returns: "his"
console.log(str2.slice(5, 9)); // returns: "is a"
console.log(str2.slice(9, 15)); // returns: " strin"

let str3 = "This is a string";
// index    0123456789ABCDEF
console.log(str3.substr(1, 6));
