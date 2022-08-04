let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let result = mix.map(function (el) {
	// return typeof el === 'string';
	if (typeof el === 'string') {
		return el;
	}
	return "";
}).reduce(function (cu, acc) {
	return cu + acc;
})
console.log(result);

// Elzero

