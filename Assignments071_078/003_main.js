let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray.reduce((cu, acc) => cu.concat(acc), []).reduce(function (cu, acc) {
	return cu + acc;
});

console.log(result);

// Elzero

