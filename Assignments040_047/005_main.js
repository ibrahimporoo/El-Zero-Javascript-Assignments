let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// Solution 1
if (haystack.includes(needle)) {
	console.log("Found");
}else {
	console.log("Not Found");
}

// Solution 2
for(let i = 0; i < haystack.length; i++) {
	if (haystack[i] === needle) {
		console.log("Found");
	}
}
// Solution 3
console.log(haystack.includes(needle)? "Found": "Not Found");

