// For Loop is used is used to interate over an object for a specific number of times
for(let startNum =1; startNum<21; startNum++);
// ++ is the increment operator
// startNum value = 1 > startNum(1) can't be bigger than 20, startNum + 1 +1 +1 +1 ... until startNum is 20

/* What we will write
document.write(1+1);
document.write(2+1);
document.write(3+1);
document.write(4+1);
document.write(5+1);
*/

for(let startNum =1; startNum<21; startNum++){
    document.write(startNum`, `);
};
document.write(`<br/>`);


let multiplesOfTwo = [];
let aNum = 11;
if (aNum % 2 === 0){
    multiplesOfTwo.push(aNum);
    document.write(multiplesOfTwo,`<br/>`);
}
else{
    document.write(`Empty List`,`<br/>`)
};


let letters1 = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`];
let letter1 =``;
for (let letter in letters){
    document.write(letters[letter],`<br/>`);
    document.write
}

let days = [`Sun`,`Mon`,`Tues`,`Wednes`,`Thurs`,`Fri`,`Satur`]
for (let day of days){
    document.write(day,`<br/>`)
}

// While iterates/repeats until a condition is met
let number = 20;
let userNum = 5;

while (userNum<=number){
    document.write(`The number is`,userNum,`<br/>`);
    userNum++;
}

let userData = prompt(`Enter user data: `);
let data = `Em`
while(data === userData){
    document.write(`Welcome and Goodbye`,`<br/>`);
    data++
}

let userPass = prompt("Enter a codeword: ");
let

// let letters2 = [`B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`];
lettersArray.foreach(addFunctionHere)
/* 
function nameOfTheFunction(parameters){
    functionBody: what you want the function to do;
    callFunction()
}
*/

// Pass in two parameters to get the index position and the value of the items in the array
function lettersFunc(arrayIndex, arrayItem){
    document.write(arrayItem, ` `, arrayIndex, `<br/>`)
}

// Do while run the loop first before checking for the condition
let number1 = 10;
let number2 = 11;

do{
    document.write(`Hello: This loop will execute once and then check the condition`);
}
while(number1>number2);

let x = 5;
let y = 0;
do{ //5=5+0
    x=x+y
    document.write(`Do while`,x,`<br/>`)
}
while

// document.write(,`<br/>`);