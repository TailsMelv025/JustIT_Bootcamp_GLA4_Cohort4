// To access the DOM
window.document.body;
document.body;

// Returns all h1 elements
console.log(document.getElementsByTagName("h1")); // Returns all 3
// Returns specific h1 elements
console.log(document.getElementsByTagName("h1")[0]);
console.log(document.getElementsByTagName("h1")[1]);
console.log(document.getElementsByTagName("h1")[2]);

// InnterHTML vs InnerText
console.log(document.getElementsByTagName("h1")[0].innerHTML); // returns: Accessing the document object Model <b>Bolded</b>
console.log(document.getElementsByTagName("h1")[0].innerText); // returns: Accessing the document object Model Bolded

document.getElementsByTagName("h1")[2].innerHTML = "Hello";

// TODO - Replace the text for h1[1]
document.getElementsByTagName("h1")[1].innerHTML = "Welcome to JS";

// Returns the total number of h1 elements
console.log(document.getElementsByTagName("h1").length);

console.log(document.getElementsByClassName("myClass"));
document.getElementsByClassName("myClass")[0].innerHTML = "Testing";
document.getElementsByClassName("myClass")[1].innerHTML = "Jumping";

console.log(document.getElementById("one"));
console.log(document.getElementById("two"));
console.log(document.getElementById("alphabets"));
document.getElementById("one").innerHTML = "Monday";

console.log(document.getElementsByTagName("*")); // prints all elements with a tag name from 0
document.getElementsByTagName("*")[4] = "This is JS"; // Index 4 is Title, so changes the page title to "This is JS"

console.log(document.querySelector(".myClass")); // returns class="myClass"
console.log(document.querySelector("#one")); // returns id="one"
console.log(document.querySelector("h2")); // returns h2 tag
document.querySelector("h2").style.fontSize = "10rem";
document.querySelector("h2").style.color = "blue";
document.querySelector("h2").style.backgroundColor = "red";
document.getElementsByTagName("h1")[2].style.color = "green";
// document.getElementsByTagName("h1").style.backgroundColor = "yellow"; // returns error
document.querySelector("h1").style.backgroundColor = "yellow";

// firstChild vs firstChildElement
console.log(document.querySelectorAll("#three"));
console.log(document.getElementById("three")); // Since you are getting element by ID, you don't need to add #
console.log(document.getElementById("three").firstChild.nodeName); // returns: "#text"
console.log(document.getElementById("three").lastChild.nodeName); // returns: "#text"
console.log(document.getElementById("three").firstElementChild.nodeName); // returns: "p"

console.log(document.firstElementChild);
console.log(document.firstElementChild.firstChild); // returns comment
console.log(document.firstElementChild.firstElementChild); // returns head, skips whatever that's not an element

console.log(document.firstElementChild.lastElementChild.firstChild.nextSibling);

document.querySelector("h4").firstElementChild.innerHTML = "Code";
document.querySelector("h4 #secondSibling").innerHTML += " 35";
document.querySelector("h4 #thirdSibling").innerHTML += " JS";
