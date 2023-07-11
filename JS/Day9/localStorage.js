// window.localStorage or localStorage
// localStorage.setItem() // saves key value pairs in the browser

localStorage.setItem("fName", "Melvin");
localStorage.setItem("lName", "Osei");

//   localStorage.getItem(key) //retrieves value based on the key provided in the browser console

console.log(localStorage.getItem("fName"));
console.log(localStorage.getItem("lName"));

document.getElementById("localStorage1").innerHTML =
  localStorage.getItem("fName");
document.getElementById("localStorage1").innerHTML +=
  localStorage.getItem("lName");

// localStorage.removeItem(key) //remove item from storage
//   localStorage.removeItem("lName");

// localStorage.clear() //remove item from storage
// localStorage.clear();

//   linking variables with the respective IDs in the
const itemKey = document.getElementById("itemKey");
const itemValue = document.getElementById("itemValue");
const btnSubmit = document.getElementById("btnSubmit");
const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");
const btnClearStorage = document.getElementById("btnClearStorage");

// save button to save data local storage
btnSubmit.addEventListener("click", () => {
  // get the key from the key field on the form
  const savedKey = itemKey.value;
  // get the key from the key field on the form
  const savedValue = itemValue.value;
  if (savedKey && savedValue) {
    localStorage.setItem(savedKey, savedValue);
  } else {
    alert("Ensure both the key and value field is not empty");
  }
});
console.log(localStorage);

// output/ retrieve all key value pairs from local storage to document(browser)
for (
  let keyValuePairs = 0;
  keyValuePairs < localStorage.length;
  keyValuePairs++
) {
  // get the first and assign it to storageKey, then get the second key and assign to storageKey, until you complete the loop
  const storageKey = localStorage.key(keyValuePairs);
  // pass the storageKey variable which now hold a copy as an argument inside the getItem method
  // localStorage.getItem("fName")
  const storageValue = localStorage.get(storageKey);
  // creates a p tag for every key value pairs and assigns it to the localStorageData variable
  let localStorageData = document.createElement(`p`);

  //   set the attribute
  localStorageData.setAttribute("id", `${storageKey}`, "<br/>");
  //   get the key value pairs data
  localStorageData.innerText = `Key: ${storageKey} | Value`;
  //   add to the body element of the document
  document.body.append(localStorageData);
}

// search local storage
btnSearch.addEventListener("click", (searchEvent) => {
  searchEvent.preventDefault();
  const searchKey = searchInput.value;
  //   localStorage.getItem("fName")
  const searchResult = localStorage.getItem(searchKey);
  //   creates a p tag for the specific key value pairs search result and assign it to the local storage
  let retrievedKeyValuePairs = document.createElement("p");
  retrievedKeyValuePairs.innerText = `Search Result: ${searchKey} | Value: ${searchResult}`;
  document.body.append(retrievedKeyValuePairs);
});
