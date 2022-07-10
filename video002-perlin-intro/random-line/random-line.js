// @barrycodes on TikTok
// Video 2
// A random line.
// Written using javascript and p5js.

function setup() {
	// Create a canvas to draw in, 600 pixels wide by 200 high.
	createCanvas(600, 200);

	// Set some drawing parameters.
	strokeWeight(1); 	// A thin line.
	stroke(0);			// Draw in black

	// Make the background white.
	background(255);

	// These variables will help us draw our line.
	var prevX;
	var prevY;
	var y;

	// Let's move along the x axis adding a new point
	// to our line every 5 pixels.
	for (var x = 0; x < width; x += 5) {

		// Get our y value for the line.
		// Our y value will be completely random,
		// and can be anything between 0 and the
		// height of our drawing canvas.
		y = random(0, height);

		// Don't draw a line until we have two points.
		if (x > 0) {
			line(prevX, prevY, x, y);
		}

		// Save the current point as the previous point.
		prevX = x;
		prevY = y;
	}
}