console.log('%c This is the prime number checker ', 'background: #222; color: #ffff00; padding: 10px;');
function check(){
	input = document.getElementById("input");
	output = document.getElementById("output");
	number = input.value;
	
	for (let counter = 1; counter <= number; counter++) {
		console.log(Math.round(number/counter) == number/counter);
	}
}
