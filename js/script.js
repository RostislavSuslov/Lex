window.onload = function() {
	const red = document.querySelector('.red');
	const yellow = document.querySelector('.yellow');
	const green = document.querySelector('.green');

	red.addEventListener('click', toggleRed);
	yellow.addEventListener('click', toggleYellow);
	green.addEventListener('click', toggleGreen);
	

	function toggleRed() {

		var timerId = setInterval(function() {
		  	document.querySelector('.red').classList.toggle("opacity-red");
		}, 250);
		setTimeout(function() {
			clearInterval(timerId);
		}, 1750);
	}

	function toggleYellow() {
		var timerId = setInterval(function() {
		  	document.querySelector('.yellow').classList.toggle("opacity-yellow");
		}, 250);
		setTimeout(function() {
			clearInterval(timerId);
		}, 1750);
	}

	function toggleGreen() {
		var timerId = setInterval(function() {
		  	document.querySelector('.green').classList.toggle("opacity-green");
		}, 250);
		setTimeout(function() {
			clearInterval(timerId);
		}, 1750);}
	}
