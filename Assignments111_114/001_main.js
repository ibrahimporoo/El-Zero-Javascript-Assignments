
let fontFamilies = document.getElementById("fontFamilies");
let colors = document.getElementById("colors");
let fontSizes = document.getElementById("fontSizes");

let myP = document.getElementById("myP");

if (localStorage.getItem("fColor")) {
	colors.value = localStorage.getItem("fColor");
	localStorage.setItem("fColor", localStorage.getItem("fColor"));
	myP.style.color = colors.value;
}
if (localStorage.getItem("fSize")) {
	fontSizes.value = localStorage.getItem("fSize");
	localStorage.setItem("fSize", localStorage.getItem("fSize"));
	myP.style.fontSize = fontSizes.value;
}
if (localStorage.getItem("fFamily")) {
	fontFamilies.value = localStorage.getItem("fFamily");
	localStorage.setItem("fFamily", localStorage.getItem("fFamily"));
	myP.style.fontFamily = fontFamilies.value;
}

// Select's Box Events
fontFamilies.onchange = function () {
	myP.style.fontFamily = fontFamilies.value;
	localStorage.setItem("fFamily", fontFamilies.value);
};
fontSizes.onchange = function () {
	myP.style.fontSize = fontSizes.value;
	localStorage.setItem("fSize", fontSizes.value);
};
colors.onchange = function () {
	myP.style.color = colors.value;
	localStorage.setItem("fColor", colors.value);
};