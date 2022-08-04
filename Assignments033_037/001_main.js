// Test Case 1
let num = 9; // "009"
console.log(num < 10 ? `00${num}` : num > 10 && num < 100 ? `0${num}` : num);
// Test Case 2
num = 20; // "020"
console.log(num < 10 ? `00${num}` : num > 10 && num < 100 ? `0${num}` : num);

// Test Case 3
num = 110; // "110"
console.log(num < 10 ? `00${num}` : num > 10 && num < 100 ? `0${num}` : num);