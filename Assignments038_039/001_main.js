var day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
// console.log(day);
var day = "Friday";
var day = "Saturday";
var day = "Sunday";
// Output => "No Appointments Available"

var day = "Monday";
var day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

var day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

var day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

var day = "World";
// Output => "Its Not A Valid Day"

day = `${day.trim().charAt(0).toUpperCase()}${day.trim().slice(1)}`;
switch (day) {
	case "Friday":
	case "Saturday":
	case "Sunday":
		console.log("No Appointments Available");
		break;
	case "Monday":
	case "Thursday":
		console.log("From 10:00 AM To 5:00 PM");
		break;
	case "Tuesday":
		console.log("From 10:00 AM To 6:00 PM");
		break;
	case "Wednesday":
		console.log("From 10:00 AM To 7:00 PM");
		break;
	default:
		console.log("Its Not A Valid Day");
		break;
}
