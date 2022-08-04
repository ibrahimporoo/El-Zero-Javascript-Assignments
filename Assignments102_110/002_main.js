let myPop = document.createElement("div");
let welcome = document.createElement("h3");
let desc = document.createElement("p");
let close = document.createElement("button");

function createPop() {
	myPop.className = "pop";
	welcome.innerHTML = "Welcome";
	desc.innerHTML = "Welcome To Ibrahim Academy";
	// Content of Close;
	let myIcon = document.createElement("i");
	myIcon.className = "fa-solid fa-xmark";
	myIcon.style.color = "white";
	close.appendChild(myIcon);
	// Close Style
	close.style.cssText = "background-color: red;width: 30px;height:30px;border-radius: 50%;position: absolute;top: -15px;right:-12px;cursor:pointer";
	// Start Content OF Popup
	myPop.appendChild(welcome);
	myPop.appendChild(desc);
	myPop.appendChild(close);
	myPop.style.cssText = "background-color: #DDD;padding: 20px 120px;line-height: 2;text-align:center;width: fit-content;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);box-shadow: 2px 2px 10px 2px rgba(0 0 0 / 20%), -2px -2px 5px 0px rgba(0 0 0 / 20%)";
	document.body.appendChild(myPop);
}
// let mybtn = document.getElementsByTagName("button")[0];
close.addEventListener("click", function(e){
	myPop.remove();
})
setTimeout(createPop, 4000);