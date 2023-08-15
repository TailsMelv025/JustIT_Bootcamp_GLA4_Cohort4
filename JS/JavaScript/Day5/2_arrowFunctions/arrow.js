// function functionName()
function greet(){
    // function: code goes here
    document.getElementById(`greetings1`).innerHTML = `Good afternoon`;
};
greet();

function greet2(){
    // function: code goes here
    let aValue = prompt(`Enter a message: `);
    document.getElementById(`greetings2`).innerHTML = aValue;
};
greet2();

// It's a shorthand way of writing a function

/* syntax : let functionVariable = () =>{
    Arrow function body
};
*/

let greet3 = () =>{
    document.getElementById("greetings3").innerHTML += `Melvin`;
};

let greet4 = (paraGreet) =>{
    return paraGreet;
};

// method 1
let myGreetings = greet4(`Bonjour`);
document.getElementById().innerHTML += myGreetings;

// method 2
document.getElementById(`greetings5`).innerHTML += greet4(`Hola`);

// method 3
let wknd = `here`; //prompt(`Enter your value`);
document.getElementById(`greetings6`).innerHTML += greet4(wknd);


// arrow function without a return statement: Only use when the function has one statement
let greet5=()=>`It's a Friday`;
document.getElementById(`greetings7`).innerHTML+=greet5();

// arrow function without a return statement but with parameter and argument:
// Only use when the function has only one statement
let greet6 = (age) => `My age is `+age;
document.getElementById(`pAge`).innerHTML+=greet6(25);

let greet7 = (userName, age) => userName +` age is `+age;
document.getElementById(`pAge1`).innerHTML+=greet7(`Melvin`,`24`);


let oddEvenNum=(num)=>{
    if (num%2===0){
        return `Even`;
    }else{
        return `Odd`;
    };
};
document.getElementById(`oddEven`).innerHTML+=oddEvenNum(11);
document.getElementById(`oddEven`).innerHTML+=oddEvenNum(12);
