let nums = [2, 12, 11, 5, 10, 1, 99];
let result = nums.reduce((acc , cu, index, arr) => {
	if (cu % 2 === 0) {
		return acc * cu;
	}else {
		return acc + cu;
	}
},1);

console.log(result);
// 500


