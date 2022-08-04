function ageInTime(theAge) {
	// Your Code Here
	if (theAge > 10 && theAge < 100) {
		let months, weeks, days, hours, minutes, seconds;
		months = theAge * 12;
		weeks = months * 4;
		days = months * 30;
		hours = days * 24;
		minutes = hours * 60;
		seconds = minutes * 60;
		console.log(`Months => ${months} m`);
		console.log(`Weeks => ${weeks} w`);
		console.log(`Days => ${days} d`);
		console.log(`Hours => ${hours} h`);
		console.log(`Minutes => ${minutes} m`);
		console.log(`Seconds => ${seconds} s`);
	}else {
		console.log(`The Age "${theAge}" IS Out of Range`);
	}
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months