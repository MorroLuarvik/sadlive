console.log('start engine.js');

const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

var timerId;

window.onload = function() {
	if (!isMobile) {
		document.getElementById("background").classList.add("desktop");
		document.getElementById("low-control-div").classList.add("desktop");
		document.getElementById("debug-area").classList.add("desktop");

		//document.getElementById("debug-area").addEventListener("click", putPixel);
	};
	timerId = setInterval(putRandomPixel, 200);
}

function putRandomPixel() {
	var canvas = document.getElementById("screen");
	var ctx = canvas.getContext("2d");
	
	var pixel = ctx.createImageData(1, 1);
	var pixelData = pixel.data;
	
	/*pixelData = [
		Math.random() * 256 | 0,
		Math.random() * 256 | 0,
		Math.random() * 256 | 0,
		255];*/
	
	//pixelData = [100, 100, 100, 255];
	
	pixelData[0] = Math.random() * 256 | 0;
	pixelData[1] = Math.random() * 256 | 0;
	pixelData[2] = Math.random() * 256 | 0;
	pixelData[3] = 255;

	ctx.putImageData(pixel, Math.random() * canvas.width | 0, Math.random() * canvas.height | 0);

}

console.log('finish engine.js');