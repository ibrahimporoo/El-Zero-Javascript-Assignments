let myDiv = document.createElement("div");
myDiv.textContent = 10;

function countDown() {
	myDiv.textContent -= 1;
	if (+myDiv.textContent === 0) {
		window.location = "http://elzero.org";
		clearInterval(id);
	}
}


let id = setInterval(countDown, 400);
document.body.appendChild(myDiv);
