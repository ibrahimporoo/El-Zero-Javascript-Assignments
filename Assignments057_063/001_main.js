function sayHello(tName, tGender) {
	if(tGender === "Male") {
		console.log(`Hello MR.${tName}`);
	}else if(tGender === "Female") {
		console.log(`Hello Miss.${tName}`);
	}else {
		console.log(`Hello ${tName}`);
	}
}

sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
