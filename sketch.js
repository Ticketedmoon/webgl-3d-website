// Public Canvas Variable
// Global as can be accessed from different functins.
var canvas;

// Let Variables
let angle;
let radius;

// Setup function, called once.
function setup() {
	// Put setup code here
	canvas = createCanvas(400, 300, WEBGL);
	centreCanvas(canvas);

	angle = 0;
	radius = 80;
}

// Draw function, called constantly.
function draw() {
	// Put drawing code here
	background(51);
	rectMode(CENTER);
	fill(195);

	// Translates
	translate(0, 0, 0);

	// Rotates
	rotateX(angle);
	rotateY(angle);
	rotateZ(angle);

	// 3D Objects
	sphere(radius) // Creates a sphere in 3D space.

	angle += 0.02;
}

// Refactoring, move all positioning into function
function centreCanvas(canvas) {
	canvas.style('display', 'block');
  	var x = (windowWidth - width) / 2;
  	var y = (windowHeight - height) / 2;
  	canvas.position(x, y);
}

function windowResized() {
	centreCanvas(canvas);
}
