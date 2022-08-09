"use strict";
/**
 * This simple function randonly generates  
 * the values for the colors Red, Green and Blue.
 * And sets the values in the DOM.
 */
function generateNewColor() {

  // Random generated colors
  let red   = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue  = Math.floor(Math.random() * 256);

  // Saving the RGB pattern
  let color = `rgb(${red},${green},${blue})`;

  // conversion of the values to hexadecimal
  red   = red.toString(16);
  green = green.toString(16);
  blue  = blue.toString(16);

  // adds zero if the hex number is below 15
  if (red.length == 1) {
    red = `0${red}`;
  }
  if (green.length == 1) {
    green = `0${green}`;
  }
  if (blue.length == 1) {
    blue = `0${blue}`;
  }

  // Saving the HEX pattern
  let colorHex = `#${red}${green}${blue}`;

  // Set the new background color
  document.getElementById("bc").style.backgroundColor = color;

  // Set the RGB pattern
  document.querySelector("#infoDec").textContent = color;
  document.getElementById("infoDec").style.backgroundColor = "white";

  // Set the HEX pattern
  document.querySelector("#infoHex").textContent = colorHex;
  document.getElementById("infoHex").style.backgroundColor = "white";
}
