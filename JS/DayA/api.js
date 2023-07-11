const dataOutput = document.querySelector("#outputData");

// Asynchronous function to fetch data
async function getData() {
  // await the response from the API
  const response = await fetch("https://hp-api.onrender.com/api/characters");
  //   wait on the response and convert to JSON upon receiving it
  const apiData = await response.json();
  // return and work with converted data
  return apiData;
}
document.addEventListener("DOMContentLoaded", async () => {
  let arrayApiData = [];

  for (let { name, image } of arrayApiData) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("cardContainer");
    const imageContainer = document.createElement("div"); //image container
    imageContainer.classList.add("cardContainer");
    const characterName = document.createElement("h2");
    characterName.innerText = `${name}`;
    cardContainer.append(characterName);
    cardContainer.append(imageContainer);
    const characterImage = document.createElement("img");
    characterImage.setAttribute("src", image);
    imageContainer.append(characterImage);
    dataOutput.append(cardContainer);
  }
});
