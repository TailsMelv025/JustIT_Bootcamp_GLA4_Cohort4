let age = prompt("How old are you? (numeric value)", "");
// If using Internet Explorer, we need to add a second paremeter (Q, "")
console.log(age);

// confirm - confirm("query");
let check = confirm("Are you sure?");
console.log(check);

let year = new Date();

// alert - alert("query");
let outcome = alert(`You were born around ${year.getFullYear() - age}`);
console.log(outcome);

// TODO - Design a system that deals with age verification for purchasing items online
const conf = confirm(
  "You need to be at least 18 to purchase this item\nCan you confirm your age?"
);
console.log(conf);

if (confirm === true) {
  const year = prompt("Enter your year of birth: ");
  const now = new Date();
  const age = now.getFullYear - year;
  if (age < 18) {
    console.log("Cancel purchase - underage");
  } else {
    console.log("Continue purchase");
  }
} else {
  console.log("Cancel purchase");
}

// for, while, foreach, do-while loops

// for - loops through a block of code a number of times

/* for (statement1; statement2; statement3){
    code block to be executed
} 
*/
// Statement 1 is executed (one time) before the execution of the code block
// Statement 2 defines the condition for executing the code block
// Statement 3 is executed (every time) after the code block has been executed

let i = 3; // this value would be redefined
for (i; i <= 10; i++) {
  console.log(i); // returns: 3, 4, 5, 6, 7, 8, 9, 10
}

for (let i = 0; i <= 10; i++) {
  console.log(i); // returns: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

// x=0, check that against condition (x < 10), if true, console.log(x), then increment and

// TODO - build a for loop
for (
  let i = Number(prompt("Enter a number greater than 0 to start from"));
  i > 0;
  i--
) {
  console.log(i);
}

const fruits = ["apple", "banana", "pear", "grapes", "cherries"];
let data = ""; // empty string
for (let fruit in fruits) {
  console.log(fruit);
  data += fruits[fruit] + " ";
  console.log(data);
}
console.log(data);

// TODO - create a for in loop that prints each item in the array
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
for (let letter in alphabet) {
  console.log(alphabet[letter]);
}

// forEach
const fruitsA = ["apple", "banana", "pear", "grapes", "cherries"];
fruitsA.forEach(fruitsB);

function fruitsB(item) {
  let text = "I choose a " + item;
  console.log(text);
}

// TODO - build a forEach loop
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

letters.forEach((letter) => {
  let text = "This is the letter " + letter;
  console.log(text);
});

// While loop
let content = "The number"; // content variable

while (i < 15) {
  content = " " + i + " is less than 15";
  i++; // increment inside the while loop
  console.log(content);
}

let z = 0;
while (z <= 5) {
  let content2 = z;
  z++;
  // increment inside the while loop
  console.log(content2);
}

// TODO - build a while loop using a decrement
let guess = Number(
  prompt(
    "I'm thinking of a number between 1 and 5 inclusive. Can you guess what it is?"
  )
);
let rand = Math.ceil(Math.random() * 5);
while (guess != rand) {
  console.log(`Incorrect. The number was ${rand}`);
  rand = Math.ceil(Math.random() * 5);
  guess = Number(prompt("Try again?"));
}
console.log("That is the right number!");

// Do-While loop
let contentB = "the number ";
let b = 13; // because of code order, do loop will always run once
do {
  contentB += b + " is less than 15 ";
  b++;
  console.log(contentB);
} while (b <= 15); // if false, it will stop running
// The code above will run until b = 16, since it runs once more after the condition is met due to code order

// All loops will run while condition == true, once false they will stop

// TODO - Create a for loop where the output will display only the array item that matches the username(array) .value(array-items)
const username = ["item1", "item2", "item3", "item4", "item5", "item6"];
for (item in username) {
  console.log(username[item]);
}

// TODO -  Check if a string contains the letter 'y'
// Print 'yes' if it does and 'no' if it does not
let string2 = prompt("Type a word with the letter 'y': ").toUpperCase();
if (string2.indexOf("Y") >= 0) {
  console.log(string2.indexOf("Y")); // for troubleshooting
  console.log(`Yes! '${string2}' contains the letter 'y'!\n(I love you!)`);
} else {
  console.log(string2.indexOf("Y")); // for troubleshooting
  console.log(
    `No! '${string2}' does not contain the letter 'y'!\n(I hate you!)`
  );
}

// TODO - Write code that prints the Fibonacci sequence (0,1,1,2,3,5,8,13)
let n1 = 0;
let n2 = 1;
let n3;
while (n1 < 1000000000000000000000) {
  console.log(n1);
  n3 = n2 + n1;
  n1 = n2;
  n2 = n3;
}
