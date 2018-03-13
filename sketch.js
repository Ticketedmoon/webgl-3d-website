function setup() {
	// Put setup code here
	var cnv = createCanvas(400, 300);
	cnv.style('display', 'block');
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
  	cnv.position(x, y);
}

function draw() {
	// Put drawing code here
	background(51);

	fill(255, 0, 150);
	rect(0, 0, 50, 50);
}