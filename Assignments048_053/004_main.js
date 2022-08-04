let index = 10;
let jump = 2;
let end = 0;

for (;;) {
  // Write Your Code Here
  console.log(index);
  if (index === jump + jump) {
	  break;
	}
	index -= jump;
}

// Output
// 10
// 8
// 6
// 4