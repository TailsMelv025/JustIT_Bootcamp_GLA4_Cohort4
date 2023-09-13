//Type Conversion and Coercion

/*
Conversion -
In programming languages, conversion is the fundamental 
aspect used to deal with situations facing the code.
The conversion is the way in which the variable of one type 
is compatible with the variable of 
another type to perform a particular task.

Conversion can be used by 3 types of data - string, number 
and boolean(true(1) or false(0))

String:
Syntax = String(ValueToConvert)*/

//Example 1:
//String(902) = Output >> "902"

//How would the following convert? ~ TRY THEM OUT IN A JS FILE!! Then ask why?

let a = String(1 + 1);
console.log(typeof a); // tell us the data type
console.log(1+1); // this will confirm we get 2
console.log(a); // this should give us the conversion

//repeat above for the items below:
let c = String(-12.123);

let d = String(true);

String(false);

String(undefined);

let b = String(NaN);
console.log(b);






/*Number:
Syntax = Number(ValueToConvert)

Example 2:
Number('902') = Output >> 902

How would the following convert? ~ TRY THEM OUT IN A JS FILE!! Then ask why?*/
let e = Number('1abc');
console.log(e);  //NaN

let f = Number(true);
console.log(f);  //1

let g = Number(false);
console.log(g);  //0

let h = Number(undefined);
console.log(h);  // NaN

let i = Number(null);
console.log(i);  //0;

let ab = Number("4-5"); // string "45", number, NaN, boolean "True"
console.log(ab);

let test; 
console.log(test);



/*
Boolean:
Syntax = Boolean(ValueToConvert)

Example 3:
Boolean('902') = Output >> true //1

How would the following convert? ~ TRY THEM OUT IN A JS FILE!! Then ask why?*/
let j = Boolean(1); //true
console.log(j);

let k = Boolean(0); //false
console.log(k);

let l = Boolean('');//false
console.log(l);

let m = Boolean(' ');//true
console.log(m);

let n = Boolean(null);//false
console.log(n);


x = 905;
//h = x>903;
//console.log(h); 
s = Boolean(x); //? what is the issue?
console.log(s>903);


x = "902"
if (x == true){
    s = Boolean(x) 
}else{
    false
}





/*
Coercion - Type coercion is similar to type conversion, but the only key difference 
// is the coercion performed automatically or implicitly by the JavaScript engine.






Number Coercion: Math operations such as -(subtract), *(multiply), /(divide), % (modulus)
We don't use + (plus) in number coercion as it is used in string coercion (below)

TRY THESE IN YOUR JS FILE:*/
console.log('12' / 2); //6
console.log(2 * '2');  //4
console.log('10' / 2); //5
console.log('10' % 2); //0
console.log(true * 7); //7
console.log(true + 10);//11
/*


String Coercion: When a string is added with the number or 
non-string value using the plus(+) 
operator then the output of the expression is always a string*/

//TRY THESE IN YOUR JS FILE:
console.log('1' + 2); // 12
console.log('1' + 2 + true);// 12true
console.log('12' + undefined); // 12undefined
console.log('12' + null); // 12null
console.log(2 +'1'); //21
console.log(2 + true); //3

// For + operator number + number/boolean = number, 
// however in coercion number + string = string.

/*
If the first operand = string and the second a non-operand, then result prints a string.
The '+' operator acts as concatenation (joins together) the operands.




Boolean Coercion: The boolean values such as true and false 
are converted to a number, true = 1 and false = 0*/

console.log(true + 2); // 3
console.log(false + 2); // 2
console.log(20 * true); // 20
console.log(4 / false); // Infinity





/*
https://medium.com/theleanprogrammer/type-conversion-and-coercion-8974afe03b85#:~:text=Type%20coercion%20is%20similar%20to,string%20and%20display%20the%20result.
*/
value = Boolean('902');
console.log(value);
console.log("hello world!");




