let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += 10) {
	if (i === exclude) {
		continue;
	}else {
		console.log(i);
	}
}


// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100