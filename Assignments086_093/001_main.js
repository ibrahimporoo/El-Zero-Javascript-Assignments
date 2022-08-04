

let myElement1 = document.querySelector("#elzero");
let myElement2 = document.querySelector(".element");
let myElement3 = document.querySelector("[name = 'js']");
let myElement4 = document.querySelector("div[name = 'js']");
// ############################################
let myElement5 = document.querySelectorAll("#elzero")[0];
let myElement6 = document.querySelectorAll(".element")[0];
let myElement7 = document.querySelectorAll("[name = 'js']")[0];
let myElement8 = document.querySelectorAll("div[name = 'js']")[0];
// ############################################
let myElement9 = document.getElementsByTagName("div")[0];
let myElement10 = document.getElementById("elzero");
let myElement11 = document.getElementsByClassName("element")[0];
let myElement12 = document.getElementsByName("js")[0];
let myElement13 = document.body.children[0];
let myElement14 = document.body.firstElementChild;
let myElement15 = document.body.childNodes[1];