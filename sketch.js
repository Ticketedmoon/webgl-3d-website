// Public Canvas Variable
// Global as can be accessed from different functins.
var canvas;

// Let Variables
let angle;
let radius;
let myImage;

function preExecute() {
	angle = 0;
	radius = 135;
	myImage = loadImage("zelda_app_icon.jpg");
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
	// let mX = mouseX - width / 2;
	// let mY = mouseY - height / 2;
	// let v = createVector(-1, 0, 0);
	// v.normalize();

	// Materials
	texture(myImage);

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
