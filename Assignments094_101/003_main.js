
let myEl = document.getElementsByClassName("our-element")[0];
let myP = document.querySelector("p");
myP.remove();


let start = document.createElement("div");
let end = document.createElement("div");
start.className = "start";
end.className = "end";
start.title = "Start Element";
end.title = "End Element";
start.setAttribute("data-value", "Start");
end.setAttribute("data-value", "End");
start.textContent = "Start";
end.textContent = "End";

myEl.before(start);
myEl.after(end);