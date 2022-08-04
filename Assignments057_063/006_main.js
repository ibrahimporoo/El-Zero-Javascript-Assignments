function multiply(...nums) {
	let result = 1;
	for(let i = 0; i < nums.length; i++) {
		if (typeof nums[i] !== 'number') {
			continue;
		}else {
			result *= Number.parseInt(nums[i]);
		}
	}
	if (nums.length === 0) {
		console.log("There is No Numbers to Perform Multiplication");
	}else {
		console.log(result);
	}
}

multiply();
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000