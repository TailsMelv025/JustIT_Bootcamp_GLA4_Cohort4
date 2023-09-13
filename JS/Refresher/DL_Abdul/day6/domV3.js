const addButton = document.querySelector("#btnAdd");
const delButton = document.getElementById("btnDel");

// Event Listener listens for event(action, click, etc.)

let txtVar = "This is a new element";
const myClick = "click";

// add an element to the document
addButton.addEventListener(myClick, () => {
  // create a new element using the createElement method
  let newElement = document.createElement("h1");
  newElement.innerText = txtVar;
  // add the element with its content to the html document
  document.body.appendChild(newElement);
});

// delete an element from the document
delButton.addEventListener("dblclick", () => {
  document.body.lastChild.remove();
});

// Mouse event
const firstID = document.getElementById(one);

firstID.addEventListener("mouseover", () => {
  firstID.style.fontStyle = "bold";
});

firstID.addEventListener("mouseout", () => {
  firstID.style.color = "blue";
});
