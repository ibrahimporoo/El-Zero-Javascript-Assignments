function checker(zName) {
	return function (status) {
		return function (salary) {
				return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
		};
	};
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// After Conversion

let result = (zName) => {
	return (status) => {
		return (salary) => {
			return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Available`;
		}
	}
}

console.log(result("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(result("Ahmed")("Not Available")()); // Iam Not Avaialble


