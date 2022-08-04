let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result = numsAndStrings.filter(function (el) {
	return typeof el === 'number';
}).map(function(el) {
	return -el;
})
console.log(result);

// [-1, -10, 10, 20, -5, -3]