var r = 1;
function nextPage2() {
	r++
	let s = r - 1
	let newIda = r + "A"  
	let prevIda = s + "A";
	let nwa = document.getElementById(prevIda);
	nwa.id = newIda;	
	let newIdb = r + "B"
	let prevIdb = s + "B";
	let nwb = document.getElementById(prevIdb);
	nwb.id = newIdb;	
	let newIdc = r + "C"
	let prevIdc = s + "C";
	let nwc = document.getElementById(prevIdc);
	nwc.id = newIdc;	
	let newIdd = r + "D"    
	let prevIdd = s + "D";
	let nwd = document.getElementById(prevIdd);
	nwd.id = newIdd;
	if ( r === 2) {
		document.getElementById("iframe2").src = "BIOS2.html";
	}
	if ( r === 3) {
		document.getElementById("iframe2").src = "BIOS3.html";
	}
	if ( r === 4) {
		document.getElementById("iframe2").src = "BIOS4.html";
	}
	if ( r === 5) {
		document.getElementById("iframe2").src = "BIOS5.html";
	}
	if ( r === 6) {
		document.getElementById("iframe2").src = "BIOS6.html";
}
	if ( r === 7) {
		document.getElementById("iframe2").src = "BIOS7.html";
}
	if ( r === 8) {
		document.getElementById("iframe2").src = "BIOS8.html";
}
	if ( r === 9) {
		document.getElementById("iframe2").src = "BIOS9.html";
}
	if ( r === 10) {
		document.getElementById("iframe2").src = "BIOS10.html";
}
	if ( r === 11) {
		document.getElementById("iframe2").src = "BIOS11.html";
}
	if ( r === 12) {
		document.getElementById("iframe2").src = "BIOS12.html";
		
}
	if ( r === 13) {
		document.getElementById("iframe2").src = "BIOS13.html";
		
	}
	if ( r === 14) {
		document.getElementById("iframe2").src = "BIOS14.html";
		
	}
	if ( r === 15) {
		document.getElementById("iframe2").src = "BIOS15.html";
	}
	if ( r === 16) {
		document.getElementById("iframe2").src = "BIOS16.html";
		
	}
	if ( r === 17) {
		document.getElementById("iframe2").src = "BIOS17.html";
	}
	if ( r === 18) {
		document.getElementById("iframe2").src = "BIOS18.html";
	}
	if ( r === 19) {
		document.getElementById("iframe2").src = "BIOS19.html";
	}
	if ( r === 20) {
		document.getElementById("iframe2").src = "BIOS20.html";
	}
	if ( r === 21) {
		document.getElementById("iframe2").src = "BIOS21.html";
	}
	if ( r === 22) {
		document.getElementById("iframe2").src = "BIOS22.html";
	}
	if ( r === 23) {
		document.getElementById("iframe2").src = "BIOS23.html";
	}
	if ( r === 24) {
		document.getElementById("iframe2").src = "BIOS24.html";
	}
	if ( r === 25) {
		document.getElementById("iframe2").src = "BIOS25.html";
	}
	if ( r === 26) {
		document.getElementById("iframe2").src = "BIOS26.html";
	}
	if ( r === 27) {
		document.getElementById("iframe2").src = "BIOS27.html";
	}
	if ( r === 28) {
		document.getElementById("iframe2").src = "BIOS28.html";
	}
	if ( r === 29) {
		document.getElementById("iframe2").src = "BIOS29.html";
}
	if ( r === 30) {
		document.getElementById("iframe2").src = "BIOS30.html";
	}
	if (r < 2) {
	document.getElementById("back").style.display = "none"	
} else { 
	document.getElementById("back").style.display = "block"
}
if (r > 29) {
	document.getElementById("next").style.display = "none"
	document.getElementById("submit").style.display = "block"
} else {
	document.getElementById("next").style.display = "block"
	document.getElementById("submit").style.display = "none"
}
}
function previousPage2() {
    r-- 
	let s = r + 1
	let newIda = r + "A"  
	let prevIda = s + "A";
	let nwa = document.getElementById(prevIda);
	nwa.id = newIda;
	let newIdb = r + "B"
	let prevIdb = s + "B";
	let nwb = document.getElementById(prevIdb);
	nwb.id = newIdb;	
	let newIdc = r + "C"
	let prevIdc = s + "C";
	let nwc = document.getElementById(prevIdc);
	nwc.id = newIdc;	
	let newIdd = r + "D"    
	let prevIdd = s + "D";
	let nwd = document.getElementById(prevIdd);
	nwd.id = newIdd;
	if ( r === 1) {
		document.getElementById("iframe2").src = "BIOS1.html";
	}
	if ( r === 2) {
		document.getElementById("iframe2").src = "BIOS2.html";
	}
	if ( r === 3) {
		document.getElementById("iframe2").src = "BIOS3.html";
	}
	if ( r === 4) {
		document.getElementById("iframe2").src = "BIOS4.html";
	}
	if ( r === 5) {
		document.getElementById("iframe2").src = "BIOS5.html";
	}
	if ( r === 6) {
		document.getElementById("iframe2").src = "BIOS6.html";
}
	if ( r === 7) {
		document.getElementById("iframe2").src = "BIOS7.html";
}
	if ( r === 8) {
		document.getElementById("iframe2").src = "BIOS8.html";
}
	if ( r === 9) {
		document.getElementById("iframe2").src = "BIOS9.html";
}
	if ( r === 10) {
		document.getElementById("iframe2").src = "BIOS10.html";
}
	if ( r === 11) {
		document.getElementById("iframe2").src = "BIOS11.html";
}
	if ( r === 12) {
		document.getElementById("iframe2").src = "BIOS12.html";
		
}
	if ( r === 13) {
		document.getElementById("iframe2").src = "BIOS13.html";
		
	}
	if ( r === 14) {
		document.getElementById("iframe2").src = "BIOS14.html";
		
	}
	if ( r === 15) {
		document.getElementById("iframe2").src = "BIOS15.html";
	}
	if ( r === 16) {
		document.getElementById("iframe2").src = "BIOS16.html";
		
	}
	if ( r === 17) {
		document.getElementById("iframe2").src = "BIOS17.html";
	}
	if ( r === 18) {
		document.getElementById("iframe2").src = "BIOS18.html";
	}
	if ( r === 19) {
		document.getElementById("iframe2").src = "BIOS19.html";
	}
	if ( r === 20) {
		document.getElementById("iframe2").src = "BIOS20.html";
	}
	if ( r === 21) {
		document.getElementById("iframe2").src = "BIOS21.html";
	}
	if ( r === 22) {
		document.getElementById("iframe2").src = "BIOS22.html";
	}
	if ( r === 23) {
		document.getElementById("iframe2").src = "BIOS23.html";
	}
	if ( r === 24) {
		document.getElementById("iframe2").src = "BIOS24.html";
	}
	if ( r === 25) {
		document.getElementById("iframe2").src = "BIOS25.html";
	}
	if ( r === 26) {
		document.getElementById("iframe2").src = "BIOS26.html";
	}
	if ( r === 27) {
		document.getElementById("iframe2").src = "BIOS27.html";
	}
	if ( r === 28) {
		document.getElementById("iframe2").src = "BIOS28.html";
	}
	if ( r === 29) {
		document.getElementById("iframe2").src = "BIOS29.html";
}
	if ( r === 30) {
		document.getElementById("iframe2").src = "BIOS30.html";
	}
	if (r > 29) {
	document.getElementById("next").style.display = "none"
	document.getElementById("submit").style.display = "block"
} else {
	document.getElementById("next").style.display = "block"
	document.getElementById("submit").style.display = "none"
}
if (r < 2) {
	document.getElementById("back").style.display = "none"	
} else {
	document.getElementById("back").style.display = "block"
}
}function save() {
    if (r === 1) {
        let g = document.getElementById('answerbox').innerHTML
        document.getElementById('demo').innerHTML = g
    }
}
