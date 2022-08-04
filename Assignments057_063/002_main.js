function calculate(firstNum, secondNum, operation) {
	// Your Code Here
	if (typeof secondNum === 'undefined') {
		console.log("Second Number is Not Found");
	}else {
		if (operation === 'multiply') {
			console.log(firstNum * secondNum);
		} else if (operation === 'subtract') {
			console.log(firstNum - secondNum);
		} else if (operation === 'add' || typeof operation === 'undefined') {
			console.log(firstNum + secondNum);
		} else {
			console.log("Unvalid Operation");
		}
	}
 }

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'multiply'); // 600