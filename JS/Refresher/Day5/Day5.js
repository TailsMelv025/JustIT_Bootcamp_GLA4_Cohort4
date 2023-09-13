/*When JavaScript reaches a "return" statement, the function will stop executing
 */

let totalPrice = till(3, 15); // returns: 45
console.log(totalPrice);

let a = 6;
let b = 8;
let totalPrice2 = till(a, b);

function till(quantity, price) {
  console.log(quantity, "x");
  console.log(`£${price}`);
  return quantity * price;
}

console.log(totalPrice);
console.log(totalPrice2);

let money = 20;

function compund() {
  let compound = money + money * 0.02;
  console.log(compound);
  return;
}

// TODO - build a basic function
function divide(num1, num2) {
  let ans = num1 / num2;
  let fans = Math.floor(ans);
  let rem = num1 % num2;
  console.log(`${num1} ÷ ${num2} = ${fans} r${rem}`);
  return;
}

divide(
  Number(prompt("Enter a big number")),
  Number(prompt("Enter a smaller number"))
);
