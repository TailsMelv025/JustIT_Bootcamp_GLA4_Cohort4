// Declare global unchanging variables

// set multipliers
let secsMulti = 1000; // seconds multiplier
let minsMulti = secsMulti * 60; // minutes multiplier
let hrsMulti = minsMulti * 60; // hours multiplier

// Get values from HTML
let hrsVal = document.getElementById("hrsVal").value;
let minsVal = document.getElementById("minsVal").value;
let secsVal = document.getElementById("secsVal").value;

// Set countdown and display to empty variables
let countdown;
let hrsDisp = 0;
let minsDisp = 0;
let secsDisp = 0;

// Display the result
let countDisplay = document.getElementById("display");
countDisplay.innerHTML = hrsDisp + "h " + minsDisp + "m " + secsDisp + "s ";
console.log(countDisplay);

// Start the reset script after the button is pressed
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetTimer);

// Function when the reset button is pressed
function resetTimer() {
  // Stop countdown
  clearInterval(countdown);

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

// Start the start script after the button is pressed
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startTimer);

// Function when the start button is pressed
function startTimer() {
  // // Stop countdown
  // clearInterval(countdown);

  // Redeclare HTML values and convert to number
  hrsVal = parseInt(document.getElementById("hrsVal").value);
  minsVal = parseInt(document.getElementById("minsVal").value);
  secsVal = parseInt(document.getElementById("secsVal").value);
  console.log(secsVal); // check that we have the correct values

  let countTo = secsVal * secsMulti + minsVal * minsMulti + hrsVal * hrsMulti;
  console.log(countTo); // check value of secs + mins + hrs
  countTo = new Date().getTime() + countTo; // add value to current datetime in milliseconds

  // Update the countdown every second
  let countdownCalc = setInterval(function () {
    // Get current datetime in milliseconds
    let nowMs = new Date().getTime();
    // check(nowMs); // check that the value is increasing every second

    // Find the difference between now and the input
    let countDif = countTo - nowMs;

    // Time calculations for days, hours, minutes and seconds
    hrsDisp = Math.floor(countDif / hrsMulti);
    minsDisp = Math.floor((countDif % hrsMulti) / minsMulti);
    secsDisp = Math.floor((countDif % minsMulti) / secsMulti);
    countDisplay.innerHTML = hrsDisp + "h " + minsDisp + "m " + secsDisp + "s ";

    // When the countdown hits 0, stop
    if (countDif == 0) {
      clearInterval(countdown);
    }
  }, secsMulti); // 1000 milliseconds = 1 second
}
