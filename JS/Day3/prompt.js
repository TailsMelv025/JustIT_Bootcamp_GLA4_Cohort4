let num1a = 10;
let num1b = 20;

let total = num1a + num1b;

document.write(`The answer to ${num1a} + ${num1b} is ${total}`,`<br/>`);
document.write(`${num1a}+${num1b}=${num1a+num1b}`,`<br/>`);
document.write(`The answer to ${num1a} x ${num1b} is ${num1a*num1b}`,`<br/>`);

// The default data type for prompt is string
let user = prompt(`Enter your username: `);
document.write(`Welcome, ${user}`,`<br/>`);

// Use ParseInt for numberic whole number
let num2a = parseInt(prompt(`Enter the first number: `));
let num2b = parseInt(prompt(`Enter the second number: `));
document.write(`${num2a}+${num2b}=${num2a+num2b}`,`<br/>`);

// Use ParseInt for numberic whole number
let num3a = parseFloat(prompt(`Enter the first number: `));
let num3b = parseFloat(prompt(`Enter the second number: `));
document.write(`${num3a}+${num3b}=${num3a+num3b}`,`<br/>`);


// document.write(,`<br/>`)