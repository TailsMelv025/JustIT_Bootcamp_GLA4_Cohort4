// Declare global unchanging variables

// Set multipliers
const secsMulti = 1000; // seconds multiplier
const minsMulti = secsMulti * 60; // minutes multiplier
const hrsMulti = minsMulti * 60; // hours multiplier

// Declare countDown as empty variable
let countDown;

// Start the start script after the button is pressed
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startTimer);

// Function when the start button is pressed
function startTimer() {
  // Clear countdown if started
  clearInterval(countDown);

  // Declare values from input
  const hrsVal = document.getElementById("hrsVal").value;
  const minsVal = document.getElementById("minsVal").value;
  const secsVal = document.getElementById("secsVal").value;
  console.log(secsVal); // check that we have the correct values

  // Get time counting towards
  let countTo =
    parseInt(secsVal) * secsMulti +
    parseInt(minsVal) * minsMulti +
    parseInt(hrsVal) * hrsMulti;
  console.log(countTo); // check value of secs + mins + hrs
  countTo += new Date().getTime(); // add value to current datetime in milliseconds

  // Start countdown
  countDown = setInterval(countTimer(countTo), secsMulti);
}

// Make countdown function
function countTimer(countTo) {
  // Get current datetime in milliseconds
  const nowMs = new Date().getTime();

  // Find the difference between now and the input
  const countDif = countTo - nowMs;
  console.log(countDif); // check that the value is increasing every second

  // Time calculations for hours, minutes and seconds
  const hrsDisp = Math.floor(countDif / hrsMulti);
  const minsDisp = Math.floor((countDif % hrsMulti) / minsMulti);
  const secsDisp = Math.floor((countDif % minsMulti) / secsMulti);

  // Display the result
  const countDisplay = document.getElementById("display");
  countDisplay.innerHTML = hrsDisp + "h " + minsDisp + "m " + secsDisp + "s ";

  // When the countdown hits 0, stop
  if (countDif <= 0) {
    clearInterval(countDown);
  }
}

// Start the reset script after the button is pressed
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetTimer);

// Function when the reset button is pressed
function resetTimer() {
  // Stop countdown
  clearInterval();

  // Change HTML values to 0
  hrsVal = "000";
  minsVal = "00";
  secsVal = "00";
  console.log(minsVal); // check that we have the correct values

  // Changes display to 0
  hrsDisp = 0;
  minsDisp = 0;
  secsDisp = 0;
}
