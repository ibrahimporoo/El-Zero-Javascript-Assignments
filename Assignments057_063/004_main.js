function checkStatus(a, b, c) {
	// Your Code Here
	let name, age, ava;
	typeof a === 'string' ? name = a : typeof a === 'number' ? age = a : ava = a;
	typeof b === 'string' ? name = b : typeof b === 'number' ? age = b : ava = b;
	typeof c === 'string' ? name = c : typeof c === 'number' ? age = c : ava = c;
	if (ava) {
		console.log(`Hello ${name}, Your Age is ${age}, Your Are Available For Hire`);
	}else {
		console.log(`Hello ${name}, Your Age is ${age}, Your Are Not Available For Hire`);
	}
}





// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(20, "Ibrahim", true); // "Hello Ibrahim, Your Age Is 20, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"