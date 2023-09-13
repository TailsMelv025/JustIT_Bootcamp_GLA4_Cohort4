// storing our div to output API data
const dataOutput = document.querySelector(".dataOutput");

// Asynchronous function to fetch data
async function getData() {
  // Await the response from the API
  const response = await fetch("https://api.adviceslip.com/advice");

  // wait on response and convert data upon receiving it
  const apiData = await response.json();

  // once the converted data is received, it can then be used
  return apiData;
}

// add event listener to for
document.addEventListener("");

let apiData = [];

// try catch to catch an error if the request to get the data from the API fails
try {
  // if no error, data response is stored
  apiData = await getData();
} catch (error) {
  //if error, log it to the console
  console.log(error);
}

// log API data to console
console.log(apiData);

// display API data on webpage

// create a p tag element and add it to the body of the document
const adviceMsg = document.createElement("p");

// add the text/data from the API to the p tag element created
adviceMsg.innerText = `${apiData.slip.advice}`;

// add the p tag to the dataOutput so that the style in advice class can be applied
adviceMsg.classList.add("advice");

// add the p tag to the dataOutput
dataOutput.append(adviceMsg);

// accessing jsonObject
let objectName = { name: "Abdul", age: 21 };
objectName.name;
