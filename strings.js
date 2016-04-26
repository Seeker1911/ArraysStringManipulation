/*
In your HTML, create an text input and a button.
The text input should only accept letters. No numbers.


Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, 
display the text "Your string is a palidrome" in the DOM, below the text input.
When the user presses the enter key in the text input, or clicks the button, set the value of the testString 
variable (see below) to the value of the input.
The output of each of the functions should immediately appear as well. */



// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs 
// the result in the DOM, below the text input. 

var input = document.getElementById("input").value;
var button = document.getElementById("submit");

function reversal(string) {	
	var reverse = document.getElementById("answer");
	reverse.innerHTML = string.split("").reverse().join("");
	}
/*return the characters in alphabetical order, and output the result in the DOM, below the text input.*/
function alphabits(string) {
	var alphabet = document.getElementById("answer2");
	alphabet.innerHTML = string.split("").sort().join("");
}

function palindrome(string) {
	var reversed = string.split("").reverse().join("");
	if (reversed.indexOf(string) === 0) {
		answer3.innerHTML = string + " " + "is a palindrome!"
	} else {
		answer3.innerHTML = string + " " + "is not a palindrome."
	}
}

function start() {
	var testString = document.getElementById("input").value;
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
}

button.addEventListener("click", start);

document.addEventListener("keyup", function(key){
	if(key.which === 13){
		start(key);
	}
});