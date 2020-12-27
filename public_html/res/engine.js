console.log('start engine.js');

const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

var timerId;

window.onload = function() {
	if (!isMobile) {
		document.getElementById("background").classList.add("desktop");
		document.getElementById("low-control-div").classList.add("desktop");
		document.getElementById("debug-area").classList.add("desktop");

		document.getElementById("debug-area").addEventListener("click", plotMark);
	};
	timerId = setInterval(putRandomPixel, 200);
}

function plotMark() {
	putPixel(159, 119);
	//putPixel(159, 119);
}

function putRandomPixel() {
	var canvas = document.getElementById("screen");

	putPixel( 
		Math.random() * canvas.width | 0, 
		Math.random() * canvas.height | 0, 
		new Uint8ClampedArray([Math.random() * 256 | 0, Math.random() * 256 | 0, Math.random() * 256 | 0, 255])
	);

}

function putPixel(x, y, color) {

	if (color === undefined)
		color = new Uint8ClampedArray([255, 255, 255, 255]);

	var canvas = document.getElementById("screen");
	var ctx = canvas.getContext("2d");
	
	var pixel = ctx.createImageData(1, 1);
	
	pixel.data.set(color);
	ctx.putImageData(pixel, x | 0, y | 0);

}

console.log('finish engine.js');