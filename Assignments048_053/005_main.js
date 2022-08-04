let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// console.log(friends.indexOf("Ahmed"))
let newFriends = [];
for(let i = letter.length - true; i < friends.length; i++){
	if (friends[i].startsWith(letter.toUpperCase())) {
		continue;
	}else {
		newFriends.push(friends[i]);
	}
}
for(let j = 0; j < newFriends.length; j++){
	console.log(`${j + 1} => ${newFriends[j]}`);
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"