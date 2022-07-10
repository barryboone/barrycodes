// @barrycodes on TikTok
// Video 2
// Perlin clouds.
// Written using javascript and p5js.

function setup() {
	// Create a canvas to draw in, 600 pixels wide by 600 high.
	createCanvas(600, 600);

	// Make the background white.
	background(255);

	// Don't draw a border on the rectangle.
	noStroke();

	// These variables will help us draw our image.
	var currentPixelColor;

	// For perlin noise in the y direction
	var noiseIncrementY = 0;

	for (var y = 0; y < height; y++) {

		// For perlin noise in the x direction.
		var noiseIncrementX = 0;

		// Move along the y axies for each x.
		for (var x = 0; x < width; x++) {

			// Get our pixel color to draw at this location. 
			// We will get a value between 0 and 1, so multiply by 255
			// to get the full range of black and white values (0 is black,
			// 255 is white).
			currentPixelColor = floor(noise(noiseIncrementX, noiseIncrementY) * 255);

			// Make the drawing color this color.
			fill(currentPixelColor);

			// Draw a tiny rectangle right at this pixel.
			rect(x, y, 1, 1);

			// The noise values needs to be incremented just a little
			// so we find the next slightly different value
			// that Perlin noise will generate.
			// Higher increments will be more random, lower increments
			// less-so.
			noiseIncrementX += 0.008;
		}
		noiseIncrementY += 0.008;
	}
}