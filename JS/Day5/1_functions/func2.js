// declare a function with parameter
function lifeInYears1(age){
    let averageAge = 70;
    let yrsRemaining = averageAge - age;
    document.write(`You have ${yrsRemaining} more to live for, based on your age.`,`<br/>`);
};
// A function that is declared with parameters must be called with a matching argument
lifeInWeeks(19)

function lifeInYears2(age,averageAge){
    let yrsRemaining = averageAge-age
    document.write(`You have ${yrsRemaining} more to live for, based on your age of ${age} years`,`<br/>`)
};
lifeInYears2(20, 50);

function bmiCalculator(weight, height){
    return (weight/height**2).toFixed(2);
};

// assign the function to a variable
let userBMI = bmiCalculator(69,1.8);
document.write(`Your BMI is:`,userBMI,`<br/>`);
document.write(`Your BMI is:`,bmiCalculator(88,1.5),`<br/>`);

function getUserInfo(fName, lName, age){
    return ` ${fName} ${lName} ${age}`;
};

let userDetails = getUserInfo("Paul", `Smith`, 21);
document.write(`Welcome,`,userDetails,`<br/>`);

// Ask for user input, store it in the respective variables
// Pass the variables as arguments when you call the function
let userFName = prompt(`Enter your first name: `);
let userLName = prompt(`Enter your last name: `);
let userAge = parseInt(prompt(`Enter your age: `));

let userDetails2 = getUserInfo(userFName, userLName, userAge);
document.write(`Welcome,`,userDetails2,`<br/>`);