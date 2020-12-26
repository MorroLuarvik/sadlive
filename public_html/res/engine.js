console.log('start engine.js');

const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

function initObjects() {
	if (!isMobile) {
		document.getElementById("background").classList.add("desktop");
		document.getElementById("low-control-div").classList.add("desktop");
		document.getElementById("debug-area").classList.add("desktop");
	};
}

console.log('finish engine.js');