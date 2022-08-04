let myDiv = document.createElement("div");
myDiv.textContent = 10;
let num;
function countDown() {
	myDiv.textContent -= 1;
	if (+myDiv.textContent === 0) {
		clearInterval(id);
	}
}
let id = setInterval(countDown, 400)

document.body.prepend(myDiv);







