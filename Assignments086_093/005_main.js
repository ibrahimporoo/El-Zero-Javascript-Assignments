let imgs = document.images;

for (let i = 0; i < imgs.length; i++) {
	if (imgs[i].getAttribute("alt") !== null) {
		imgs[i].setAttribute("alt", "Old");
	} else {
		imgs[i].setAttribute("alt", "New One");
	}
}

