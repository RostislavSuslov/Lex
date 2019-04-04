/*var colors = [];
while (colors.length < 100) {
    do {
        var color = Math.floor((Math.random()*1000000)+1);
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + ("000000" + color.toString(16)).slice(-6));
}
console.log(colors);
*/

function randomColor() {
    return '#'+ ('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6)
}
function setColor(){
    document.body.style.backgroundColor = randomColor();
    setTimeout(setColor, 2000);
}
setColor();


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
