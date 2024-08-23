function toggle() {
	var x = document.getElementById("timer")
	if (x.style.display === "block") {
		x.style.display = "none";
		document.getElementById("show").innerHTML = "Show";
	}  else {
		x.style.display = "block";
		document.getElementById("show").innerHTML = "Hide";
	}
};
