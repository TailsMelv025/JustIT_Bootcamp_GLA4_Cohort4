// getElementById
const title = document.getElementById("title");
console.log(title);

title.style.color = "cyan";

// getElementsByClassName
const listItems = document.getElementsByClassName("listItems");
console.log(listItems);

// getElementsByTagName
const listElements = document.getElementsByTagName("li");
console.log(listElements);

// querySelector
const ulElement = document.querySelector("ul");
console.log(ulElement);

// create an element (list item)
const newListItem = document.createElement("li");
console.log(newListItem);

// Add the created list item
ulElement.append(newListItem);

// Add content in newListItem
newListItem.innerText = prompt("Add a new list item");
