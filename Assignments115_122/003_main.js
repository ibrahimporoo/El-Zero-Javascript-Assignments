let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

arr1.push(arr2, arr3);

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

let [c, , , [, , ], [, a, b]] = arr1;
// console.log(arr1);
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed



