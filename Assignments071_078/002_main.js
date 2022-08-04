let myString = "EElllzzzzzzzeroo";

let result = myString.split("").filter(function (el, index) {
	return el !== myString[index + 1];
}).reduce(function (cu, acc) {
	return cu + acc;
});
console.log(result);
// Elzero

