let userInput = document.getElementsByName("dollar")[0];
let userResult = document.getElementsByClassName("result")[0];

userInput.oninput = function() {
	if (userInput.value.length === 0) {
		userResult.innerHTML = `{0} USD Dollar = {0} Egyptian Pound`;
	} else {
		userResult.innerHTML = `{${+userInput.value}} USD Dollar = {${(+userInput.value * 15.6).toFixed(2)}} Egyptian Pound`;
	}
}


