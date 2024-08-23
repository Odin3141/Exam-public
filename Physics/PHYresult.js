var a = 'D'
var b = 'A'
var c = 'A'
var d = 'B'
var e = 'C'
var f = 'B'
var g = 'C'
var h = 'D'
var i = 'C'
var j = 'D'
var k = 'A'
var l = 'D'
var m = 'C'
var n = 'D'
var o = 'A'
var p = 'B'
var q = 'B'
var r = 'C'
var s = 'C'
var t = 'A'
var u = 'D'
var v = 'C'
var w = 'B'
var x = 'A'
var y = 'C'
var z = 'A'
var aa = 'A'
var ab = 'C'
var ac = 'C'
var ad = 'A'
var ae = 'Archimedes'
var afi = 'vibrational'
var afii = 'oscillatory'
var afiii = 'vibratory'
var ag = 'centripetal'
var ah = 'static'
var ai = 'hydrometer'
var aj = '2400J'
var ak = '360 degree'
var al = 'kinematics'
var am = 'work'
var ani = 'vibrational'
var anii = 'oscillatory'
var aniii = 'vibratory'
var ao = '5m due West'
var ap = 'uniform'
var aq = 'friction'
var ari = 'ball bearings'
var arii = 'roller bearings'
var as = '25m/s'
var at = 'centrifugal'
var aui = 'four'
var auii = '4'
var av = 'halved'
var awi = 'double'
var awii = '2'
var awiii = 'twice'
var ax = 'B'
var ayi = 'candela'
var ayii = 'cd'
var ayiii = 'Candela'
var az = 'William Gilbert'
var ba = 'volume'
var bb = 'Ampere'
var bc = 'retardation'
var bd = '10m/s'
var be = 'direction'
var bfi = 'gravity'
var bfii = 'gravitational'
var bg = 'mass'
var bh = 'relative'
var t1A = '350'
var t1B = '28.8'
var t1C = '1.75'
var t1D = '35'
var t4A = '60'
var t4B = '0.33'
var t4C = '1.33'
var t5A = '48.2'
var t5B = 'yes'
var t6B = '1'
var t6C = '0.00000667'
var t6D = '0.00000445'
var t6E = '0.004'
var t6F = '0.04'
var t6G = '0.96'
var t7B = '2.67'
var t7C = '2'
var t7D = '100'
var t10 = '68000'
var t11 = '17.3'
var sc = 0;
var scd;
var sd = 0;
var sde;
var sa = 0;
var sb = 0;
var sg = 0;
var sf = 0;
function mcReview() {
    var yy = document.getElementById("multic")
	if (yy.style.display === "block") {
		yy.style.display = "none";;
	}  else {
		yy.style.display = "block";
	}
}
function subjReview() {
    var hh = document.getElementById("subj")
	if (hh.style.display === "block") {
		hh.style.display = "none";;
	}  else {
		hh.style.display = "block";
	}
}
function review() {
    for(var zz = 1;zz < 31;zz++) {
    var Q = localStorage.getItem(zz)
    var qq = zz + Q;
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
    } else {
        if (Q === "empty") {
            sa++
            let tt = zz + S;
        document.getElementById(tt).style.background = "green";
        let ff = "state";
        let ww = ff + zz
        document.getElementById(ww).innerHTML = "Unanswered";
        } else {
            sb++
        let cc = zz + Q;
        let tt = zz + S;
        document.getElementById(cc).style.background = "red";
        document.getElementById(tt).style.background = "green";
        let ff = "state";
        let ww = ff + zz
        document.getElementById(ww).innerHTML = "Incorrect";
    }
    }
    document.getElementById("multicscore").innerHTML =  ": " + sc + " correct, " + sb + " incorrect and " + sa + " unanswered." 
		var scd = (Math.floor((sc / 300) * 100)*10)
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
    }
	for(var pp = 31;pp < 61;pp++) {
	    var R = localStorage.getItem(pp);
	    if (pp === 31) {
	        var T = ae;
	    }
	    if(pp === 32) {
	        var T = afi;
	        var U = afii;
	        var V = afiii;
	    }
	    if(pp === 33) {
	        var T = ag;
	    }
	    if(pp === 34) {
	        var T = ah;
	    }
	    if(pp === 35) {
	        var T = ai;
	    }
	    if(pp === 36) {
	        var T = aj;
	    }
	    if(pp === 37) {
	        var T = ak;
	    }
	    if(pp === 38) {
	        var T = al;
	    }
	    if(pp === 39) {
	        var T = am;
	    }
	    if(pp === 40) {
	        var T = ani;
	        var U = anii;
	        var V = aniii;
	    }
	    if(pp === 41) {
	        var T = ao;
	    }
	    if(pp === 42) {
	        var T = ap;
	    }
	    if(pp === 43) {
	        var T = aq;
	    }
	    if(pp === 44) {
	        var T = ari;
	        var U = arii;
	    }
	    if(pp === 45) {
	        var T = as;
	    }
	    if(pp === 46) {
	        var T = at;
	    }
	    if(pp === 47) {
	        var T = aui;
	        var U = auii;
	    }
	    if(pp === 48) {
	        var T = av;
	    }
	    if(pp === 49) {
	        var T = awi;
	        var U = awii;
	        var V = awiii;
	    }
	    if(pp === 50) {
	        var T = ax;
	    }
	    if(pp === 51) {
	        var T = ayi;
	        var U = ayii;
	        var V = ayiii;
	    }
	    if(pp === 52) {
	        var T = az;
	    }
	    if(pp === 53) {
	        var T = ba;
	    }
	    if(pp === 54) {
	        var T = bb;
	    }
	    if(pp === 55) {
	        var T = bc;
	    }
	    if(pp === 56) {
	        var T = bd;
	    }
	    if(pp === 57) {
	        var T = be;
	    }
	    if(pp === 58) {
	        var T = bfi;
	        var U = bfii;
	    }
	    if(pp === 59) {
	        var T = bg;
	    }
	    if(pp === 60) {
	        var T =bh;
	    }
	    document.getElementById(pp).innerHTML = T;
		if ((R.includes(T)) === true || (R.includes(U)) === true || (R.includes(V)) === true) {
	        sd++
	        let tt = "state" + pp;
	        document.getElementById(tt).innerHTML = "Correct";
	   }   else { 
	       if (R === "") {
	           sf++
	        let tt = "state" + pp;
	        document.getElementById(tt).innerHTML = "Unanswered";
	       } else {
	           sg++
	           let tt = "state" + pp;
	           document.getElementById(tt).innerHTML = "Incorrect";
	       }
	       }
	       document.getElementById("subjscore").innerHTML =  ": " + sd + " correct, " + sg + " incorrect and " + sf + " unanswered.";
	    var sde = (Math.floor((sd/30)*10)*10);
		if (sde === 0) {
			localStorage.setItem("y", "0")
		}
		if (sde === 10) {
			localStorage.setItem("y", "10")
		}
		if (sde === 20) {
			localStorage.setItem("y", "20")
		}
		if (sde === 30) {
			localStorage.setItem("y", "30")
		}
		if (sde === 40) {
			localStorage.setItem("y", "40")
		}
		if (sde === 50) {
			localStorage.setItem("y", "50")
		}
		if (sde === 60) {
			localStorage.setItem("y", "60")
		}
		if (sde === 70) {
			localStorage.setItem("y", "70")
		}
		if (sde === 80) {
			localStorage.setItem("y", "80")
		}
		if (sde === 90) {
			localStorage.setItem("y", "90")
		}
		if (sde === 100) {
			localStorage.setItem("y", "100")
	    }   
	    }
		var si = 15;
		var sj = 0;
		var sk = 0;
	    var sef = (Math.floor((si/30)*10)*10);
		if (sef === 0) {
			localStorage.setItem("z", "0")
		}
		if (sef === 10) {
			localStorage.setItem("z", "10")
		}
		if (sef === 20) {
			localStorage.setItem("z", "20")
		}
		if (sef === 30) {
			localStorage.setItem("z", "30")
		}
		if (sef === 40) {
			localStorage.setItem("z", "40")
		}
		if (sef === 50) {
			localStorage.setItem("z", "50")
		}
		if (sef === 60) {
			localStorage.setItem("z", "60")
		}
		if (sef === 70) {
			localStorage.setItem("z", "70")
		}
		if (sef === 80) {
			localStorage.setItem("z", "80")
		}
		if (sef === 90) {
			localStorage.setItem("z", "90")
		}
		if (sef === 100) {
			localStorage.setItem("z", "100")
	    }   
		let PHY = ((sc + sd + si)/3);
		localStorage.setItem("new1", "phy1");
		localStorage.setItem("sco", PHY);
		let date1 = new Date();
		localStorage.setItem("date1", date1)
}
var speed = 0;
var prevSpeed = 0;
var currentScale = 1;
const timer = setInterval(function() {
  let m = Number(localStorage.getItem("v"))
  if (m === 0) {
      clearInterval(timer);
  }
  if (m > 0) {
    speed = speed + 10;
  addClass();
  currentScale= currentScale + 1;
  changeActive();
  changeText();
  }
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
  let n = Number(localStorage.getItem("y"))
  if (n === 0) {
      clearInterval(timer2)
  }
  if (n > 0) {
    speed2 = speed2 + 10;
  addClass2();
  currentScale2 = currentScale2 + 1;
  changeActive2();
  changeText2();
  }
  
  if (speed2 === n) {
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
  let o = Number(localStorage.getItem("z"))
  if (o === 0) {
      clearInterval(timer3);
  }  
  if (o > 0) {
    speed3 = speed3 + 10;
  addClass3();
  currentScale3 = currentScale3 + 1;
  changeActive3();
  changeText3();
  }
  if (speed3 === o) {
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




