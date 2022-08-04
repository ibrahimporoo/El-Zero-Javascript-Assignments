let el = document.querySelectorAll("[src = '#']");
for (let i = 0; i < el.length; i++) {
	el[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
	el[i].setAttribute("alt", "Elzero Logo");
}

document.body.style.backgroundColor = "#791f12";