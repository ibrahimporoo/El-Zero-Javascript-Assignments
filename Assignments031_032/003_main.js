let b = 30;
let a = 20;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b || a < c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true