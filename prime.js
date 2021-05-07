console.log('%c This is the prime number checker ', 'background: #222; color: #ffff00; padding: 10px;');
var prime = new Audio("https://github.com/Blue-Sea2/MathHack/releases/download/Sounds/win.mp3");
var notPrime = new Audio("https://github.com/Blue-Sea2/MathHack/releases/download/Sounds/lose.mp3");
function check(){
	input = document.getElementById("input");
	output = document.getElementById("output");
	number = input.value;
	var factors = 0;
	
	for (let counter = 1; counter <= number; counter++) {
		if (Math.round(number/counter) == number/counter) {
			factors++;
		}
	}
	if (factors == 2) {
		output.innerHTML = number+" is prime!";
		prime.play();
	} else {
		output.innerHTML = number+" is not prime.";
		notPrime.play();
	}
}
