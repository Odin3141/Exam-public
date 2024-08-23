function review() {
	let m = document.getElementById("reviewBox")
	if (m.style.display === "none") {
		m.style.display = "block";
	}  else {
		m.style.display = "none";
	}
var a1 = document.getElementById("A").checked;
var b1 = document.getElementById("B").checked;
var c1 = document.getElementById("C").checked;
var d1 = document.getElementById("D").checked;
if(a1 === true ||b1 === true || c1 === true||d1 === true) {
	document.getElementById("Q1").style.background= "purple";
	document.getElementById("Q1").style.border= "solid";
	document.getElementById("Q1").style.border= "black";
}

}