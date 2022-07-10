// @barrycodes on TikTok
// Video 2
// Random grayscale image.
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

	for (var y = 0; y < height; y++) {

		// Move along the y axies for each x.
		for (var x = 0; x < width; x++) {

			// Get a completely random pixel color (grayscale)
			currentPixelColor = floor(random(0, 255));

			// Make the drawing color this color.
			fill(currentPixelColor);

			// Draw a tiny rectangle right at this pixel.
			rect(x, y, 1, 1);
		}
	}
}