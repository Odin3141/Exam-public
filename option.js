function clickOption() {
if (r === 1) {
let a1 = document.getElementById("A").checked;
let b1 = document.getElementById("B").checked;
let c1 = document.getElementById("C").checked;
let d1 = document.getElementById("D").checked;
if(a1 === true ) {
	document.getElementById("A1").style.background= "orange";
	localStorage.setItem("1", "A");
}
if(b1 === true ) {
	document.getElementById("B2").style.background= "orange";
	localStorage.setItem("1", "B");
}
if(c1 === true ) {
	document.getElementById("C3").style.background= "orange";
	localStorage.setItem("1", "C");
}
if(d1 === true ) {
	document.getElementById("D4").style.background= "orange";
	localStorage.setItem("1", "D");
}  
if (a1 === false && b1 === false && c1 === false && d1 === false)
	localStorage.setItem("1", "empty")
}
}
