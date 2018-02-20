var img;

function preload() {
	img = loadImage("annmarie.jpg");
}

function setup() {
	createCanvas(img.width, img.height);
	background(0);
}

function draw() {
	image(img, 0, 0);
	loadPixels();
	for (var row = 0; row < height; row++) {
		for (var col = 0; col < width; col++) {
			var index = (col + row * width) * 4;
			
			var r = pixels[index];
			var g = pixels[index + 1];
			var b = pixels[index + 2];
			var a = pixels[index + 3];
			if (keyIsPressed) {
				if (key == "1") {
					black_white_filter(index, g, a);
				}
				if (key == "2") {
					red_filter(index, r, g, b, a);
				}
				if (key == "3") {
					blue_filter(index, b, a);
				}
				if (key == "4") {
					eclipse_filter(index, r, g, b, a);
				}
				if (key == "5") {
					beans_filter(index, r, g, b, a);
				}
				if (key == "6") {
					martin_filter(index, r, g, b, a);
				}
				if (key == "7") {
					tulip_filter(index, a);
				}
				if (key == "8") {
					daisy_filter(index, r, g, b, a);
				}
				if (key == "9") {
					lavender_filter(index, r, g, a);
				}
			}
		}
	}
	updatePixels();
}

function black_white_filter(index, g, a) {
	pixels[index] = g;
	pixels[index + 1] = g;
	pixels[index + 2] = g;
	pixels[index + 3] = a;
}

function red_filter(index, g, a) {
	pixels[index] = 255;
	pixels[index + 1] = 255;
	pixels[index + 2] = 0;
	pixels[index + 3] = a;
}

function blue_filter(index, g, a) {
	pixels[index] = g;
	pixels[index + 1] = g;
	pixels[index + 2] = g; // This is darker than the first funciton.
	pixels[index + 3] = a;
}

function eclipse_filter(index, a,) {
	pixels[index] = a;
	pixels[index + 1] = a;
	pixels[index + 2] = a;
	pixels[index + 3] = a;
}

function beans_filter(index, r, g, b, a) {
	pixels[index] = 255 - r; //This is from the packet, but I changed the sign because it wasnt working.
	pixels[index + 1] = 255 + g;
	pixels[index + 2] = 255 - b;
	pixels[index + 3] = a;
}

function martin_filter(index, r, g, b, a) {
	pixels[index] = r + row - 190; //This is from the packet.
	pixels[index + 1] = g + col - 190;
	pixels[index + 2] = b;
	pixels[index + 3] = a;
}

function tulip_filter(index, a) {
	pixels[index] = 255;
	pixels[index + 1] = 0; //This is from the packet.
	pixels[index + 2] = 255;
	pixels[index + 3] = a;
}

function daisy_filter(index, g, a) {
	pixels[index] = r * 2;
	pixels[index + 1] = g * 2; //This is from the packet.
	pixels[index + 2] = g * 2;
	pixels[index + 3] = a;
}

function lavender_filter(index, r, g, b, a) {
	pixels[index] = r / 2;
	pixels[index + 1] = g / 2; //This is from the packet.
	pixels[index + 2] = b / 2;
	pixels[index + 3] = a;
}


