// variable call all_h1s = document.querySelectorAll("h1 element");
let all_h1s = document.querySelectorAll("h1"); // all h1s will be returned

let first_h1s = all_h1s[0]; // first h1 will be returned
let second_h1s = all_h1s[1]; // second h1 will be returned
let third_h1s = all_h1s[2]; // third h1 will be returned

first_h1s.style.fontSize = "5rem";
second_h1s.style.color = "red";
third_h1s.style.fontFamily = "cursive";

// apply style to multiple h1 elements
for (
  h1s = 0; // Variable h1s is assigned a number value of 0
  h1s < all_h1s.length; // all_h1s.length will return the total number of h1s found on the document(webpage)
  h1s++ // count from h1s which is 0, while it is lesser than all_h1s.length which is 3
) {
  all_h1s[h1s].style.backgroundColor = "yellow";
}

// asking for elments
let anElement = document.querySelectorAll(
  prompt("Search for a selector", "tag, #element, .class, etc.")
);

for (i = 0; i < anElement.length; i++) {
  anElement[i].style.fontStyle = "italic";
}
