var a = 'C'
var b = 'C'
var c = 'A'
var d = 'D'
var e = 'C'
var f = 'B'
var g = 'C'
var h = 'A'
var i = 'C'
var j = 'B'
var k = 'D'
var l = 'C'
var m = 'D'
var n = 'D'
var o = 'B'
var p = 'A'
var q = 'C'
var r = 'B'
var s = 'A'
var t = 'B'
var u = 'D'
var v = 'D'
var w = 'B'
var x = 'C'
var y = 'D'
var z = 'C'
var aa = 'A'
var ab = 'B'
var ac = 'C'
var ad = 'C'
var sc = 0;
var scd
function clickReview() {
    var yy = document.getElementById("multic")
	if (yy.style.display === "block") {
		yy.style.display = "none";;
	}  else {
		yy.style.display = "block";
	}
}
function review() {
	for(var zz = 1;zz < 61;zz++) {
    let Q = localStorage.getItem(zz)
    let qq = zz + Q;
    if (zz === 1) {
        var S = a;
    }
    if (zz === 2) {
        var S = b
    }
    if (zz === 3) {
        var S = c
    }
    if (zz === 4) {
        var S = d
    }
    if (zz === 5) {
        var S = e
    }
    if (zz === 6) {
        var S = f
    }
    if (zz === 7) {
        var S = g
    }
    if (zz === 8) {
        var S = h
    }
    if (zz === 9) {
        var S = i;
    }
    if (zz === 10) {
        var S = j;
    }
    if (zz === 11) {
        var S = k;
    }
    if (zz === 12) {
        var S = l
    }
    if (zz === 13) {
        var S = m
    }
    if (zz === 14) {
        var S = n
    }
    if (zz === 15) {
        var S = o
    }
    if (zz === 16) {
        var S = p
    }
    if (zz === 17) {
        var S = q
    }
    if (zz === 18) {
        var S = r
    }
    if (zz === 19) {
        var S = s
    }
    if (zz === 20) {
        var S = t
    }
    if (zz === 21) {
        var S = u
    }
    if (zz === 22) {
        var S = v
    }
    if (zz === 23) {
        var S = w
    }
    if (zz === 24) {
        var S = x
    }
    if (zz === 25) {
        var S = y
    }
    if (zz === 26) {
        var S = z
    }
    if (zz === 27) {
        var S = aa
    }
    if (zz === 28) {
        var S = ab
    }
    if (zz === 29) {
        var S = ac
    }
    if (zz === 30) {
        var S = ad
    }
    if (Q === S) {
        document.getElementById(qq).style.background = "green";
        let ff = "state";
        let ww = ff + zz
        document.getElementById(ww).innerHTML = "Correct";
        sc++
		document.getElementById("score").innerHTML =  ": " + sc + " correct, " + (30 - sc) + " incorrect and " +(30-((30-sc) + sc)) + " unanswered." 
		var scd = Math.floor(((sc / 30) * 100))
		if (scd === 0) {
			localStorage.setItem("v", "0")
		}
		if (scd === 10) {
			localStorage.setItem("v", "10")
		}
		if (scd === 20) {
			localStorage.setItem("v", "20")
		}
		if (scd === 30) {
			localStorage.setItem("v", "30")
		}
		if (scd === 40) {
			localStorage.setItem("v", "40")
		}
		if (scd === 50) {
			localStorage.setItem("v", "50")
		}
		if (scd === 60) {
			localStorage.setItem("v", "60")
		}
		if (scd === 70) {
			localStorage.setItem("v", "70")
		}
		if (scd === 80) {
			localStorage.setItem("v", "80")
		}
		if (scd === 90) {
			localStorage.setItem("v", "90")
		}
		if (scd === 100) {
			localStorage.setItem("v", "100")
		}
    } else {
        var cc = zz + Q;
        var tt = zz + S;
        document.getElementById(cc).style.background = "red";
        document.getElementById(tt).style.background = "green";
        let ff = "state";
        let ww = ff + zz
        document.getElementById(ww).innerHTML = "Incorrect";
    }
	}  
}
var speed = 0;
var prevSpeed = 0;
var currentScale = 1;
const timer = setInterval(function() {
  if (speed >= 0) {
    speed = speed + 10;
  addClass();
  currentScale= currentScale + 1;
  changeActive();
  changeText();
  }
  let m = Number(localStorage.getItem("v"))
  if (speed === m) {
	clearInterval(timer);
  }
}, 190);
function addClass() {
  let newClass = "speed-" + speed;
  let prevClass = "speed-" + prevSpeed;
  let el = document.getElementsByClassName("arrow-wrapper")[0];
  if (el.classList.contains(prevClass)) {
      el.classList.remove(prevClass);
      el.classList.add(newClass);
  }
  prevSpeed = speed;
}
function changeActive() {
  let tempClass = "speedometer-scale-" + currentScale;
  let ev = document.getElementsByClassName(tempClass)[0];
  ev.classList.toggle("active");
}
function changeText() {
  let el = document.getElementsByClassName("km")[0];
  el.innerText = speed +"%";
}

var speed2 = 0;
var prevSpeed2 = 0;
var currentScale2 = 1;
const timer2 = setInterval(function() {
  if (speed2 >= 0) {
    speed2 = speed2 + 10;
  addClass2();
  currentScale2 = currentScale2 + 1;
  changeActive2();
  changeText2();
  }
  if (speed2 === 80) {
	clearInterval(timer2);
  }
}, 190);
function addClass2() {
  let newClass2 = "speed2-" + speed2;
  let prevClass2 = "speed2-" + prevSpeed2;
  let el2 = document.getElementsByClassName("arrow2-wrapper")[0];
  if (el2.classList.contains(prevClass2)) {
      el2.classList.remove(prevClass2);
      el2.classList.add(newClass2);
  }
  prevSpeed2 = speed2;
}
function changeActive2() {
  let tempClass2 = "speedometer2-scale-" + currentScale2;
  let ev2 = document.getElementsByClassName(tempClass2)[0];
  ev2.classList.toggle("active");
}
function changeText2() {
  let el2 = document.getElementsByClassName("km2")[0];
  el2.innerText = speed2 +"%";
}
var speed3 = 0;
var prevSpeed3 = 0;
var currentScale3 = 1;
const timer3 = setInterval(function() {
  if (speed3 < 100) {
    speed3 = speed3 + 10;
  addClass3();
  currentScale3 = currentScale3 + 1;
  changeActive3();
  changeText3();
  }
  if (speed3 === 80) {
	clearInterval(timer3);
  }
}, 190);
function addClass3() {
  let newClass3 = "speed3-" + speed3;
  let prevClass3 = "speed3-" + prevSpeed3;
  let el3 = document.getElementsByClassName("arrow3-wrapper")[0];
  if (el3.classList.contains(prevClass3)) {
      el3.classList.remove(prevClass3);
      el3.classList.add(newClass3);
  }
  prevSpeed3 = speed3;
}
function changeActive3() {
  let tempClass3 = "speedometer3-scale-" + currentScale3;
  let ev3 = document.getElementsByClassName(tempClass3)[0];
  ev3.classList.toggle("active");
}
function changeText3() {
  let el3 = document.getElementsByClassName("km3")[0];
  el3.innerText = speed3 +"%";
}




