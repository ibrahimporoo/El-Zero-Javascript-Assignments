let userName = "Elzero";
console.log(userName[3]); // e
console.log(userName.charAt(3)); // e
console.log(userName.charAt(userName.indexOf('e'))); // e
console.log(userName[userName.indexOf('e')]); // e
console.log(userName.slice(3, 4)); // e
console.log(userName.charAt(3).repeat(3)); // eee