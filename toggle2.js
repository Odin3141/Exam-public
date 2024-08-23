function toggle2() {
	var x = document.getElementById("timer2")
	if (x.style.display === "block") {
		x.style.display = "none";
		document.getElementById("show2").innerHTML = "Show";
	}  else {
		x.style.display = "block";
		document.getElementById("show2").innerHTML = "Hide";
	}
};
