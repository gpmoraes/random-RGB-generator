"use strict";

/**
 * This simple function generates a random color by generating random values for the Red, Green and Blue components.
 * The function then sets the color in the DOM by using the generated RGB and HEX values.
 */
function generateNewColor() {

  // Generate random values for the color components
  let red   = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue  = Math.floor(Math.random() * 256);

  // Create the RGB color pattern
  let color = `rgb(${red},${green},${blue})`;

  // Convert the color components to hexadecimal
  red   = red.toString(16);
  green = green.toString(16);
  blue  = blue.toString(16);

  // Add a leading zero if the hex value is less than 15
  if (red.length == 1) {
    red = `0${red}`;
  }
  if (green.length == 1) {
    green = `0${green}`;
  }
  if (blue.length == 1) {
    blue = `0${blue}`;
  }

  // Create the HEX color pattern
  let colorHex = `#${red}${green}${blue}`;

  // Set the new background color in the DOM
  document.getElementById("bc").style.backgroundColor = color;

  // Set the RGB color pattern in the DOM
  document.querySelector("#infoDec").textContent = color;
  document.getElementById("infoDec").style.backgroundColor = "white";

  // Set the HEX color pattern in the DOM
  document.querySelector("#infoHex").textContent = colorHex;
  document.getElementById("infoHex").style.backgroundColor = "white";
}
