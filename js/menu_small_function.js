function openNav() {
	document.getElementById("myNav")
	.style.height="100%";
	document.getElementById('strelka').style.display = "none";
	document.getElementById('carousel').style.display = "none";
}

function closeNav() {
	document.getElementById("myNav")
	.style.height = "0%";
	document.getElementById('strelka').style.display = "block";
	document.getElementById('carousel').style.display = "block";
}