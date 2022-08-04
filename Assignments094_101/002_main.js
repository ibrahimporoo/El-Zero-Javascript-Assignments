let add = document.querySelectorAll("input")[0];
let remove = document.querySelectorAll("input")[1];
let result = document.querySelector(".assign .classes-list div");
let allSpans;
function addClass () {
	if(add.value !== "") {
		add.value = add.value.toLowerCase();
		add.value.trim().split(" ").forEach(val => {
			// Create Span Element And Put The Value of User Input in it.
			let mySpan = document.createElement("span");
			let myText = document.createTextNode(val);
			mySpan.appendChild(myText);
			add.classList.add(val);
			result.appendChild(mySpan);
		});
	}
	add.value = "";
	// Start Sorting All Elements inside the Added Element.
	let sortedArr = [];
	allSpans = document.querySelectorAll(".assign .classes-list div span");
	for(let i = 0; i < allSpans.length; i++) {
		sortedArr.push(allSpans[i].innerHTML);
	}
	sortedArr.sort();
	for(let i = 0; i < allSpans.length; i++) {
		allSpans[i].innerHTML = sortedArr[i];
	}
}
function removeClass () {
	if(remove.value !== "") {
		remove.value = remove.value.toLowerCase();
		remove.value.trim().split(" ").forEach(val => {
			// Create Span Element And Put The Value of User Input in it.
			let mySpan = document.createElement("span");
			let myText = document.createTextNode(val);
			mySpan.appendChild(myText);
			if (add.classList.contains(val)) {
				add.classList.remove(val);
			}
			for(let i = 0; i < result.children.length ; i++) {
				if (result.children[i].innerHTML === mySpan.innerHTML) {
					result.removeChild(result.children[i]);
				}
			}
		});
	}
	remove.value = "";
}
// Content of Current Element
let myP = document.createElement("p");
let text = document.createTextNode("There Is No Classes To Show");
myP.id = "el";
myP.appendChild(text);
let el = myP;
result.prepend(el);
function checker() {
	if (allSpans.length > 0) {
		if(result.firstElementChild === el) {
			result.removeChild(result.firstElementChild);
		}
	} else {
		result.prepend(el);
	}
}
