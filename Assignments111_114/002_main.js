let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let selection = document.getElementById("selection");


if (window.sessionStorage.getItem("userValOne")) {
	one.value = window.sessionStorage.getItem("userValOne");
}
if (window.sessionStorage.getItem("userValTwo")) {
	two.value = window.sessionStorage.getItem("userValTwo");
}
if (window.sessionStorage.getItem("userValThree")) {
	three.value = window.sessionStorage.getItem("userValThree");
}
if (window.sessionStorage.getItem("Select")) {
	selection.value = window.sessionStorage.getItem("Select");
}
one.onblur = function () {
	valOne = this.value;
	window.sessionStorage.setItem("userValOne", this.value);
}
two.onblur = function () {
	valTwo = this.value;
	window.sessionStorage.setItem("userValTwo", this.value);
}
three.onblur = function () {
	valThree = this.value;
	window.sessionStorage.setItem("userValThree", this.value);
}
selection.onchange = function () {
	window.sessionStorage.setItem("Select", selection.value);
}
