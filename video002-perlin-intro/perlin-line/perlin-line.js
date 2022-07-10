// @barrycodes on TikTok
// Video 2
// A random line.
// This is Javascript code based on p5js.

function setup() {
	// Create a canvas to draw in, 600 pixels wide by 200 high.
	createCanvas(600, 200);

	// Set some drawing parameters.
	strokeWeight(1); 	// A thin line.
	stroke(0);			// Draw in black

	// Make the background white.
	background(255);

	// This variable will help us use the Perlin noise function.
	var noiseIncrement = 0;

	// These variables will help us draw our line.
	var prevX;
	var prevY;
	var y;

	// Let's move along the x axis adding a new point
	// to our line every 5 pixels.
	for (var x = 0; x < width; x += 5) {

		// Get our y value for the line.
		// Our y value will use p5's built-in function
		// for getting numbers based on Perlin noise.
		// The noise() function will generate a value between 0.0 and 1.0.
		// Multiply this value by the height of the canvas to
		// get the full range of possible values. 
		y = noise(noiseIncrement) * height;

		// The noise value needs to be incremented just a little
		// so we find the next slightly different value
		// that Perlin noise will generate.
		// Higher increments will be more random, lower increments
		// less-so.
		noiseIncrement += 0.05;

		// Don't draw a line until we have two points.
		if (x > 0) {
			line(prevX, prevY, x, y);
		}

		// Save the current point as the previous point.
		prevX = x;
		prevY = y;
	}
}