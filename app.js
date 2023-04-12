"use strict"

window.addEventListener("load", start)

function start () {
console.log("Hello");

const bars = document.querySelectorAll(".bar")
// querySelectorAll vælger alle div class.
const fristBar = bars[0];
// her udvælger man hvilken bar det er.

let h =40;
// udvælger højde
fristBar.style.height= `${h}px`;
}