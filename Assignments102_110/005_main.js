
let myDiv = document.createElement("div");
myDiv.textContent = 10;

function countDown() {
	myDiv.textContent -= 1;
	if (+myDiv.textContent === 0) {
		// window.location = "http://elzero.org";
		window.open("http://elzero.org","","width = 360, height= 400,left = 300, top = 20");
		clearInterval(id);
	}
}


let id = setInterval(countDown, 400);
document.body.appendChild(myDiv);
