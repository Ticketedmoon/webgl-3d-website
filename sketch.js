// Public Canvas Variable
// Global as can be accessed from different functins.
var canvas;

// Let Variables
let angle;
let radius;

function preExecute() {
	angle = 0;
	radius = 135;
}

// Setup function, called once.
function setup() {
	// Put setup code here
	preExecute();
	canvas = createCanvas(540, 400, WEBGL);
	centreCanvas(canvas);
}

// Draw function, called constantly.
function draw() {
	// Default code
	background(51);

	// Translates
	translate(0, 0, 0);

	// Rotates
	rotateX(angle);
	rotateY(angle);
	rotateZ(angle);

	// Lights
	let dX = -1
	let dY = 0
	let v = createVector(dX, dY, 0);
	v.normalize();
	directionalLight(180, 120, 0, v);

	// Materials

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
