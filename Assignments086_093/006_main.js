let elCount = document.querySelector("[name = 'elements']");
let userText = document.getElementsByName("texts")[0];
let userOpt = document.getElementsByName("type")[0];
let userResult = document.getElementsByClassName("results")[0];
let zForm = document.forms[0];
let submit = document.getElementsByName("create")[0];

zForm.onsubmit = function (event) {
	submit.onclick = function() {
		for(let j = 0;j < allEl.length;j++) {
			userResult.removeChild(allEl[j]);
		}
	}
	let allEl = [];
	for(let i = 0;i < elCount.value;i++) {
		let el = document.createElement(`${userOpt.value}`);
		el.className = "box";
		el.setAttribute("title", "Element");
		el.setAttribute("id", `id-${i + 1}`);
		el.innerHTML = `${userText.value}`;
		allEl.push(el);
	}
	for(let j = 0;j < allEl.length;j++) {
		allEl[j].style.cssText = "color: white;background-color:red;border: 4px solid red;border-radius: 4px;margin: 5px";
		userResult.appendChild(allEl[j]);
	}
	event.preventDefault();
}
// // Style Elements
zForm.style.display = "flex";
zForm.style.justifyContent = "center";
zForm.style.flexWrap = "wrap";
zForm.style.minWidth = "200px";
zForm.style.maxWidth = "500px";
zForm.style.margin = "auto";


elCount.style.width = "100%";
elCount.style.margin = "8px";
elCount.style.padding = "10px";
elCount.style.display = "inline-block";

userText.style.width = "100%";
userText.style.margin = "8px";
userText.style.padding = "10px";
userText.style.display = "inline-block";

userOpt.style.width = "100%";
userOpt.style.margin = "8px";
userOpt.style.padding = "10px";
userOpt.style.display = "inline-block";

submit.style.width = "97%";
submit.style.padding = "12px";
submit.style.backgroundColor = "red";
submit.style.color = "white";
submit.style.border = "2px solid red";
submit.style.borderRadius = "4px";

userResult.style.display = "grid";
userResult.style.gridTemplateColumns = "repeat(auto-fill, minmax(150px, 1fr))";
userResult.style.gap = "15px";
userResult.style.width = "120%";


// ====================




