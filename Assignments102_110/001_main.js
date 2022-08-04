
let msg = window.prompt("Print Number From - To", "Example: 5-20")
let nums = msg.trim().split("-");
nums.sort( (a , b) => a - b);
for(let i = nums[0]; i <= nums[1]; i++) {
	console.log(+i);
}