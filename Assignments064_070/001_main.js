function getDetails(zName, zAge, zCountry) {
	function namePattern(name) {
		let fName, lName;
		fName = name.slice(0, name.indexOf(" "));
		lName = name.substr(name.indexOf(" ") + 1, 1).toUpperCase();
		return `${fName } ${lName}.`;
	}
	function ageWithMessage(age) {
		return `Your Age IS : ${Number.parseInt(age)}`;
	}
	function countryTwoLetters(country) {
		let neededCountry = country.substr(0, 2).toUpperCase();
		return `You Live In ${neededCountry}`;
	}
	function fullDetails() {
		return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
	}
	return fullDetails();
}

// -----------
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

