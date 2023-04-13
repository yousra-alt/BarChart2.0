"use strict";

window.addEventListener("load", start);

const data = [
17, 23, 8, 30, 3, 28, 12, 13, 26, 0, 13, 21, 30, 17, 6, 18, 1, 20, 8, 21,
  11, 19, 14, 19, 3, 7, 28, 9, 9, 15, 31, 24, 6, 12, 0, 17, 6, 30, 28, 31, 3
];

function start() {
  console.log("Hello");

  setInterval(update,1000);
  displayAllBars()

}


function update() {
displayAllBars()
updateData()
}


function getNumberOfCustomers() {
  // FAKE: gives a completely random number
  return Math.floor(Math.random() * 32);
}
function displayAllBars() {
  const bars = document.querySelectorAll(".bar");
  // querySelectorAll vælger alle div class.
  // her udvælger man hvilken bar det er.

  for (let i = 0; i <40; i++) {
      const bar = bars[i];
    let h = data[i] / 32 * 100;
    // udvælger højde
    bar.style.height = `${h}px`;
  }
}


function updateData () {
    // data.push(Math.floor(Math.random()*32));
    // data.shift();
      // add new value to array
const queueSize = getNumberOfCustomers();
  data.push(queueSize);
  data.shift();
       
      }

    

