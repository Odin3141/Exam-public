function eliminate() {
	let m = document.getElementById("elimCheckBox")
	if (m.style.display === "block") {
		m.style.display = "none";
	}  else {
		m.style.display = "block";
	}
	let w = document.getElementById("elimA").checked;
	let x = document.getElementById("elimB").checked;
	let y = document.getElementById("elimC").checked;
	let z = document.getElementById("elimD").checked;
	if (w === true) {
		document.getElementById("A1").style.display = "none"
	}  else {
		document.getElementById("A1").style.display = "block"
	}
	if (x === true) {
		document.getElementById("B2").style.display = "none"
	}  else {
		document.getElementById("B2").style.display = "block"
	}
	if (y === true) {
		document.getElementById("C3").style.display = "none"
	}  else {
		document.getElementById("C3").style.display = "block"
	}
	if (z === true) {
		document.getElementById("D4").style.display = "none"
	}  else {
		document.getElementById("D4").style.display = "block"
	}
}