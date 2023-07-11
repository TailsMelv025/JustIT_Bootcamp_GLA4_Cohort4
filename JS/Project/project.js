// // Update hours to current value
// var hrs = document.getElementById("hours");
// console.log(hrs);
// hrs.textContent = "Test String";
// var hrsVal;
// hrs.onchange = function () {
//   hrsVal = hrs.value;
//   console.log(hrsVal + " h");
// };

// // Update minutes to current value
// var mins = document.getElementById("minutes");
// var minsVal;
// mins.onchange = function () {
//   minsVal = mins.value;
//   console.log(minsVal);
// };

// // Update seconds to current value
// var secs = document.getElementById("seconds");
// var secsVal;
// secs.onchange = function () {
//   secsVal = secs.value;
//   console.log(secsVal);
// };

const check = console.log;

const floor = Math.floor;

check("Constants named");

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startTimer);
function startTimer() {
  let secs = document.getElementById("seconds").value;
  let mins = document.getElementById("minutes").value;
  let hrs = document.getElementById("hours").value;
  check("Variables declared");

  let countdownTo =
    now +
    floor(secs * 1000) +
    floor(mins * 60 * 1000) +
    floor(hrs * 60 * 60 * 1000);
  check("Countdown declared");

  let interval = setInterval(() => {
    let now = new Date().getTime();

    let toZero = countdownTo - now;

    document.getElementById("display").innerHTML = toZero;
  }, 1000);
}

// // Clear before starting
// clearInterval(x);

// // Update the count down every 1 second
// var x = setInterval(function () {
//   // Find the distance between now and the count down date
//   var distance = countdown - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = floor(distance / (1000 * 60 * 60 * 24));
//   var hours = floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="display"
//   document.getElementById("display").innerHTML =
//     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     // document.getElementById("display").innerHTML = "EXPIRED";
//   }
// }, 1000);

// reset button
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetInput);
function resetInput() {
  document.getElementById("hours").value = "00";
  document.getElementById("minutes").value = "00";
  document.getElementById("seconds").value = "00";
  check("Input Reset");
}

// Collect ID of start timer
// Add Event Listener of Click to Start Timer
// function startTimer(){
//   pick up values
// }
// Collect ID of reset button
// Add Event Listener of Click to Reset Timer
// function resetTimer(){
// set all values to 0
// }
