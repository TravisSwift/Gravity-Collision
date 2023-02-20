// creating a canvas object
var canvas = document.getElementById("canvas");
//Create a 2d drawing object  for the canvas object
var ctx = canvas.getContext("2d");
// Calculate the clock radius, using the height of the canvas
var radius = canvas.height / 2;
// Remap the (0,0) position (of the drawing object) to the center of the canvas:
ctx.translate(radius, radius);
// Reduce the clock radius (to 90%) to draw the clock well inside the canvas
radius = radius * 0.90
drawClock();


// Create a function to draw the clock:
function drawClock() {
  ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
}