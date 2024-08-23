var countDown = ((new Date().getTime()) + 1800000);
var update = setInterval(function () {
var now = new Date().getTime();
var diff = countDown - now;
var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((diff % (1000 * 60)) / 1000); 
document.getElementById("timer").innerHTML = hrs + " : " + minutes + " : " + seconds ;
if (diff < 0) {
    clearInterval(update);
document.getElementById("timer").innerHTML = "Session Expired!";
document.body.style.display = "none"
let count = 5;
const timer = setInterval(function() {
  count--;
  if (count === 0) {
    clearInterval(timer);
    window.location="BIOSque.html";
  }
}, 1000);;
}
if (minutes < 5) {
	var blink = document.getElementById("timer");
	setInterval(function() {
		blink.style.opacity = (blink.style.opacity == 1 ? 0 : 1);
	}, 1500);
	document.getElementById("timer").style.color = "red";
	document.getElementById("timer").style.display = "block";
	document.getElementById("hide").style.display = "none";
}
}, 1000);
