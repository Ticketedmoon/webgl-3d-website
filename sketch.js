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
	canvas = createCanvas(200, 200, WEBGL);
	canvas.parent('sketch-holder');
}

// Draw function, called constantly.
function draw() {

	// Translates
	translate(0, 0, 0);

	// Rotates
	rotateX(angle);
	rotateY(angle);
	rotateZ(angle);

	// Vectors
	let v = createVector(-1, 0, 0);
	let x = createVector(1, 0, 0)
	v.normalize();

	// Lights
	directionalLight(30, 120, 0, v);
	directionalLight(30, 150, 10, x);


	// Materials

	// 3D Objects
	box(80, 80, 80) // Creates a sphere in 3D space.

	angle += 0.01;
}