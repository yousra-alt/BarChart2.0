"use strict";

window.addEventListener("load", start);

const data = 
  [
    10, 17, 23, 8, 30, 3, 28, 12, 13, 26, 0, 13, 21, 30, 17, 6, 18, 1, 20, 8,
    21, 11, 19, 14, 19, 3, 7, 28, 9, 9, 15, 31, 24, 6, 12, 0, 17, 6, 30, 28, 31,
  ];


function start() {
  console.log("Hello");

  const bars = document.querySelectorAll(".bar");
  // querySelectorAll vælger alle div class.
  const fristBar = bars[0];
  // her udvælger man hvilken bar det er.

  let h = data[0] / 32 * 100;
  // udvælger højde
  fristBar.style.height = `${h}px`;
}
