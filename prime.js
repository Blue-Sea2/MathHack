console.log('%c This is the prime number checker ', 'background: #222; color: #ffff00; padding: 10px;');
var done = new Audio("done.mp3");
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
		output.innerHTML = number+"is prime!";
	} else {
		output.innerHTML = number+"is not prime.";
	}
	done.play();
}
