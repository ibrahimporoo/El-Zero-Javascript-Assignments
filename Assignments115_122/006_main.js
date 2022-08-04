let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
let title, age, available, skills;
switch(chosen) {
	case 1:
		({ title, age, available, skills } = myFriends[0]);
		console.log(title);
		console.log(age);
		console.log(available? "Avaialabe": "Not Available");
		console.log(skills[sk.length - 1]);
		break;
	case 2:
		({ title, age, available, skills } = myFriends[1]);
		console.log(title);
		console.log(age);
		console.log(available? "Avaialabe": "Not Available");
		console.log(skills[sk.length - 1]);
		break;
	case 3:
		({ title, age, available, skills } = myFriends[2]);
		console.log(title);
		console.log(age);
		console.log(available? "Avaialabe": "Not Available");
		console.log(skills[sk.length - 1]);
		break;
	default:
		console.log("The Number Is Not In The Range");
		break;
}



