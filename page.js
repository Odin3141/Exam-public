var r = 1;
function nextPage() {
	r++
	document.getElementById("demo").innerHTML = r;
	var s = r - 1
	var newIda = r + "A"  
	var prevIda = s + "A";
	var nwa = document.getElementById(prevIda);
	nwa.id = newIda;
	var newIdb = r + "B"
	var prevIdb = s + "B";
	var nwb = document.getElementById(prevIdb);
	nwb.id = newIdb;	
	var newIdc = r + "C"
	var prevIdc = s + "C";
	var nwc = document.getElementById(prevIdc);
	nwc.id = newIdc;	
	var newIdd = r + "D"    
	var prevIdd = s + "D";
	var nwd = document.getElementById(prevIdd);
	nwd.id = newIdd;
	if ( r === 1) {
		document.getElementById("iframe").src = "BIOM1.html";
		document.getElementById("1A").innerHTML = localStorage.getItem("BIO1A");
		document.getElementById("1B").innerHTML = localStorage.getItem("BIO1B");
		document.getElementById("1C").innerHTML = localStorage.getItem("BIO1C");
		document.getElementById("1D").innerHTML = localStorage.getItem("BIO1D");
	}
	if ( r === 2) {
		document.getElementById("iframe").src = "BIOM2.html";
		document.getElementById("2A").innerHTML = localStorage.getItem("BIO2A");
		document.getElementById("2B").innerHTML = localStorage.getItem("BIO2B");
		document.getElementById("2C").innerHTML = localStorage.getItem("BIO2C");
		document.getElementById("2D").innerHTML = localStorage.getItem("BIO2D");
	}
	if ( r === 3) {
		document.getElementById("iframe").src = "BIOM3.html";
		document.getElementById("3A").innerHTML = localStorage.getItem("BIO3A");
		document.getElementById("3B").innerHTML = localStorage.getItem("BIO3B");
		document.getElementById("3C").innerHTML = localStorage.getItem("BIO3C");
		document.getElementById("3D").innerHTML = localStorage.getItem("BIO3D");
	}
	if ( r === 4) {
		document.getElementById("iframe").src = "BIOM4.html";
		document.getElementById("4A").innerHTML = localStorage.getItem("BIO4A");
		document.getElementById("4B").innerHTML = localStorage.getItem("BIO4B");
		document.getElementById("4C").innerHTML = localStorage.getItem("BIO4C");
		document.getElementById("4D").innerHTML = localStorage.getItem("BIO4D");
	}
	if ( r === 5) {
		document.getElementById("iframe").src = "BIOM5.html";
		document.getElementById("5A").innerHTML = localStorage.getItem("BIO5A");
		document.getElementById("5B").innerHTML = localStorage.getItem("BIO5B");
		document.getElementById("5C").innerHTML = localStorage.getItem("BIO5C");
		document.getElementById("5D").innerHTML = localStorage.getItem("BIO5D");
	}
	if ( r === 6) {
		document.getElementById("iframe").src = "BIOM6.html";
		document.getElementById("6A").innerHTML = localStorage.getItem("BIO6A");
		document.getElementById("6B").innerHTML = localStorage.getItem("BIO6B");
		document.getElementById("6C").innerHTML = localStorage.getItem("BIO6C");
		document.getElementById("6D").innerHTML = localStorage.getItem("BIO6D");
	}
	if ( r === 7) {
		document.getElementById("iframe").src = "BIOM7.html";
		document.getElementById("7A").innerHTML = localStorage.getItem("BIO7A");
		document.getElementById("7B").innerHTML = localStorage.getItem("BIO7B");
		document.getElementById("7C").innerHTML = localStorage.getItem("BIO7C");
		document.getElementById("7D").innerHTML = localStorage.getItem("BIO7D");
	}
	if ( r === 8) {
		document.getElementById("iframe").src = "BIOM8.html";
		document.getElementById("8A").innerHTML = localStorage.getItem("BIO8A");
		document.getElementById("8B").innerHTML = localStorage.getItem("BIO8B");
		document.getElementById("8C").innerHTML = localStorage.getItem("BIO8C");
		document.getElementById("8D").innerHTML = localStorage.getItem("BIO8D");
	}
	if ( r === 9) {
		document.getElementById("iframe").src = "BIOM9.html";
		document.getElementById("9A").innerHTML = localStorage.getItem("BIO9A");
		document.getElementById("9B").innerHTML = localStorage.getItem("BIO9B");
		document.getElementById("9C").innerHTML = localStorage.getItem("BIO9C");
		document.getElementById("9D").innerHTML = localStorage.getItem("BIO9D");
	}
	if ( r === 10) {
		document.getElementById("iframe").src = "BIOM10.html";
		document.getElementById("10A").innerHTML = localStorage.getItem("BIO10A");
		document.getElementById("10B").innerHTML = localStorage.getItem("BIO10B");
		document.getElementById("10C").innerHTML = localStorage.getItem("BIO10C");
		document.getElementById("10D").innerHTML = localStorage.getItem("BIO10D");
	}
	if ( r === 11) {
		document.getElementById("iframe").src = "BIOM11.html";
		document.getElementById("11A").innerHTML = localStorage.getItem("BIO11A");
		document.getElementById("11B").innerHTML = localStorage.getItem("BIO11B");
		document.getElementById("11C").innerHTML = localStorage.getItem("BIO11C");
		document.getElementById("11D").innerHTML = localStorage.getItem("BIO11D");
	}
	if ( r === 12) {
		document.getElementById("iframe").src = "BIOM12.html";
		document.getElementById("12A").innerHTML = localStorage.getItem("BIO12A");
		document.getElementById("12B").innerHTML = localStorage.getItem("BIO12B");
		document.getElementById("12C").innerHTML = localStorage.getItem("BIO12C");
		document.getElementById("12D").innerHTML = localStorage.getItem("BIO12D");
	}
	if ( r === 13) {
		document.getElementById("iframe").src = "BIOM13.html";
		document.getElementById("13A").innerHTML = localStorage.getItem("BIO13A");
		document.getElementById("13B").innerHTML = localStorage.getItem("BIO13B");
		document.getElementById("13C").innerHTML = localStorage.getItem("BIO13C");
		document.getElementById("13D").innerHTML = localStorage.getItem("BIO13D");
	}
	if ( r === 14) {
		document.getElementById("iframe").src = "BIOM14.html";
		document.getElementById("14A").innerHTML = localStorage.getItem("BIO14A");
		document.getElementById("14B").innerHTML = localStorage.getItem("BIO14B");
		document.getElementById("14C").innerHTML = localStorage.getItem("BIO14C");
		document.getElementById("14D").innerHTML = localStorage.getItem("BIO14D");
	}
	if ( r === 15) {
		document.getElementById("iframe").src = "BIOM15.html";
		document.getElementById("15A").innerHTML = localStorage.getItem("BIO15A");
		document.getElementById("15B").innerHTML = localStorage.getItem("BIO15B");
		document.getElementById("15C").innerHTML = localStorage.getItem("BIO15C");
		document.getElementById("15D").innerHTML = localStorage.getItem("BIO15D");
	}
	if ( r === 16) {
		document.getElementById("iframe").src = "BIOM16.html";
		document.getElementById("16A").innerHTML = localStorage.getItem("BIO16A");
		document.getElementById("16B").innerHTML = localStorage.getItem("BIO16B");
		document.getElementById("16C").innerHTML = localStorage.getItem("BIO16C");
		document.getElementById("16D").innerHTML = localStorage.getItem("BIO16D");
	}
	if ( r === 17) {
		document.getElementById("iframe").src = "BIOM17.html";
		document.getElementById("17A").innerHTML = localStorage.getItem("BIO17A");
		document.getElementById("17B").innerHTML = localStorage.getItem("BIO17B");
		document.getElementById("17C").innerHTML = localStorage.getItem("BIO17C");
		document.getElementById("17D").innerHTML = localStorage.getItem("BIO17D");
	}
	if ( r === 18) {
		document.getElementById("iframe").src = "BIOM18.html";
		document.getElementById("18A").innerHTML = localStorage.getItem("BIO18A");
		document.getElementById("18B").innerHTML = localStorage.getItem("BIO18B");
		document.getElementById("18C").innerHTML = localStorage.getItem("BIO18C");
		document.getElementById("18D").innerHTML = localStorage.getItem("BIO18D");
	}
	if ( r === 19) {
		document.getElementById("iframe").src = "BIOM19.html";
		document.getElementById("19A").innerHTML = localStorage.getItem("BIO19A");
		document.getElementById("19B").innerHTML = localStorage.getItem("BIO19B");
		document.getElementById("19C").innerHTML = localStorage.getItem("BIO19C");
		document.getElementById("19D").innerHTML = localStorage.getItem("BIO19D");
	}
	if ( r === 20) {
		document.getElementById("iframe").src = "BIOM20.html";
		document.getElementById("20A").innerHTML = localStorage.getItem("BIO20A");
		document.getElementById("20B").innerHTML = localStorage.getItem("BIO20B");
		document.getElementById("20C").innerHTML = localStorage.getItem("BIO20C");
		document.getElementById("20D").innerHTML = localStorage.getItem("BIO20D");
	}
	if ( r === 21) {
		document.getElementById("iframe").src = "BIOM21.html";
		document.getElementById("21A").innerHTML = localStorage.getItem("BIO21A");
		document.getElementById("21B").innerHTML = localStorage.getItem("BIO21B");
		document.getElementById("21C").innerHTML = localStorage.getItem("BIO21C");
		document.getElementById("21D").innerHTML = localStorage.getItem("BIO21D");
	}
	if ( r === 22) {
		document.getElementById("iframe").src = "BIOM22.html";
		document.getElementById("22A").innerHTML = localStorage.getItem("BIO22A");
		document.getElementById("22B").innerHTML = localStorage.getItem("BIO22B");
		document.getElementById("22C").innerHTML = localStorage.getItem("BIO22C");
		document.getElementById("22D").innerHTML = localStorage.getItem("BIO22D");
	}
	if ( r === 23) {
		document.getElementById("iframe").src = "BIOM23.html";
		document.getElementById("23A").innerHTML = localStorage.getItem("BIO23A");
		document.getElementById("23B").innerHTML = localStorage.getItem("BIO23B");
		document.getElementById("23C").innerHTML = localStorage.getItem("BIO23C");
		document.getElementById("23D").innerHTML = localStorage.getItem("BIO23D");
	}
	if ( r === 24) {
		document.getElementById("iframe").src = "BIOM24.html";
		document.getElementById("24A").innerHTML = localStorage.getItem("BIO24A");
		document.getElementById("24B").innerHTML = localStorage.getItem("BIO24B");
		document.getElementById("24C").innerHTML = localStorage.getItem("BIO24C");
		document.getElementById("24D").innerHTML = localStorage.getItem("BIO24D");
	}
	if ( r === 25) {
		document.getElementById("iframe").src = "BIOM25.html";
		document.getElementById("25A").innerHTML = localStorage.getItem("BIO25A");
		document.getElementById("25B").innerHTML = localStorage.getItem("BIO25B");
		document.getElementById("25C").innerHTML = localStorage.getItem("BIO25C");
		document.getElementById("25D").innerHTML = localStorage.getItem("BIO25D");
	}
	if ( r === 26) {
		document.getElementById("iframe").src = "BIOM26.html";
		document.getElementById("26A").innerHTML = localStorage.getItem("BIO26A");
		document.getElementById("26B").innerHTML = localStorage.getItem("BIO26B");
		document.getElementById("26C").innerHTML = localStorage.getItem("BIO26C");
		document.getElementById("26D").innerHTML = localStorage.getItem("BIO26D");
	}
	if ( r === 27) {
		document.getElementById("iframe").src = "BIOM27.html";
		document.getElementById("27A").innerHTML = localStorage.getItem("BIO27A");
		document.getElementById("27B").innerHTML = localStorage.getItem("BIO27B");
		document.getElementById("27C").innerHTML = localStorage.getItem("BIO27C");
		document.getElementById("27D").innerHTML = localStorage.getItem("BIO27D");
	}
	if ( r === 28) {
		document.getElementById("iframe").src = "BIOM28.html";
		document.getElementById("28A").innerHTML = localStorage.getItem("BIO28A");
		document.getElementById("28B").innerHTML = localStorage.getItem("BIO28B");
		document.getElementById("28C").innerHTML = localStorage.getItem("BIO28C");
		document.getElementById("28D").innerHTML = localStorage.getItem("BIO28D");
	}
	if ( r === 29) {
		document.getElementById("iframe").src = "BIOM29.html";
		document.getElementById("29A").innerHTML = localStorage.getItem("BIO29A");
		document.getElementById("29B").innerHTML = localStorage.getItem("BIO29B");
		document.getElementById("29C").innerHTML = localStorage.getItem("BIO29C");
		document.getElementById("29D").innerHTML = localStorage.getItem("BIO29D");
	}
	if ( r === 30) {
		document.getElementById("iframe").src = "BIOM30.html";
		document.getElementById("30A").innerHTML = localStorage.getItem("BIO30A");
		document.getElementById("30B").innerHTML = localStorage.getItem("BIO30B");
		document.getElementById("30C").innerHTML = localStorage.getItem("BIO30C");
		document.getElementById("30D").innerHTML = localStorage.getItem("BIO30D");
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
function previousPage() {
    r-- 
	document.getElementById("demo").innerHTML = r
	var s = r + 1
	var newIda = r + "A"  
	var prevIda = s + "A";
	var nwa = document.getElementById(prevIda);
	nwa.id = newIda;
	var newIdb = r + "B"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
	var prevIdb = s + "B";
	var nwb = document.getElementById(prevIdb);
	nwb.id = newIdb;	
	var newIdc = r + "C"
	var prevIdc = s + "C";
	var nwc = document.getElementById(prevIdc);
	nwc.id = newIdc;	
	var newIdd = r + "D"    
	var prevIdd = s + "D";
	var nwd = document.getElementById(prevIdd);
	nwd.id = newIdd;
	if ( r === 1) {
		document.getElementById("iframe").src = "BIOM1.html";
		document.getElementById("1A").innerHTML = localStorage.getItem("BIO1A");
		document.getElementById("1B").innerHTML = localStorage.getItem("BIO1B");
		document.getElementById("1C").innerHTML = localStorage.getItem("BIO1C");
		document.getElementById("1D").innerHTML = localStorage.getItem("BIO1D");
	}
	if ( r === 2) {
		document.getElementById("iframe").src = "BIOM2.html";
		document.getElementById("2A").innerHTML = localStorage.getItem("BIO2A");
		document.getElementById("2B").innerHTML = localStorage.getItem("BIO2B");
		document.getElementById("2C").innerHTML = localStorage.getItem("BIO2C");
		document.getElementById("2D").innerHTML = localStorage.getItem("BIO2D");
	}
	if ( r === 3) {
		document.getElementById("iframe").src = "BIOM3.html";
		document.getElementById("3A").innerHTML = localStorage.getItem("BIO3A");
		document.getElementById("3B").innerHTML = localStorage.getItem("BIO3B");
		document.getElementById("3C").innerHTML = localStorage.getItem("BIO3C");
		document.getElementById("3D").innerHTML = localStorage.getItem("BIO3D");
	}
	if ( r === 4) {
		document.getElementById("iframe").src = "BIOM4.html";
		document.getElementById("4A").innerHTML = localStorage.getItem("BIO4A");
		document.getElementById("4B").innerHTML = localStorage.getItem("BIO4B");
		document.getElementById("4C").innerHTML = localStorage.getItem("BIO4C");
		document.getElementById("4D").innerHTML = localStorage.getItem("BIO4D");
	}
	if ( r === 5) {
		document.getElementById("iframe").src = "BIOM5.html";
		document.getElementById("5A").innerHTML = localStorage.getItem("BIO5A");
		document.getElementById("5B").innerHTML = localStorage.getItem("BIO5B");
		document.getElementById("5C").innerHTML = localStorage.getItem("BIO5C");
		document.getElementById("5D").innerHTML = localStorage.getItem("BIO5D");
	}
	if ( r === 6) {
		document.getElementById("iframe").src = "BIOM6.html";
		document.getElementById("6A").innerHTML = localStorage.getItem("BIO6A");
		document.getElementById("6B").innerHTML = localStorage.getItem("BIO6B");
		document.getElementById("6C").innerHTML = localStorage.getItem("BIO6C");
		document.getElementById("6D").innerHTML = localStorage.getItem("BIO6D");
	}
	if ( r === 7) {
		document.getElementById("iframe").src = "BIOM7.html";
		document.getElementById("7A").innerHTML = localStorage.getItem("BIO7A");
		document.getElementById("7B").innerHTML = localStorage.getItem("BIO7B");
		document.getElementById("7C").innerHTML = localStorage.getItem("BIO7C");
		document.getElementById("7D").innerHTML = localStorage.getItem("BIO7D");
	}
	if ( r === 8) {
		document.getElementById("iframe").src = "BIOM8.html";
		document.getElementById("8A").innerHTML = localStorage.getItem("BIO8A");
		document.getElementById("8B").innerHTML = localStorage.getItem("BIO8B");
		document.getElementById("8C").innerHTML = localStorage.getItem("BIO8C");
		document.getElementById("8D").innerHTML = localStorage.getItem("BIO8D");
	}
	if ( r === 9) {
		document.getElementById("iframe").src = "BIOM9.html";
		document.getElementById("9A").innerHTML = localStorage.getItem("BIO9A");
		document.getElementById("9B").innerHTML = localStorage.getItem("BIO9B");
		document.getElementById("9C").innerHTML = localStorage.getItem("BIO9C");
		document.getElementById("9D").innerHTML = localStorage.getItem("BIO9D");
	}
	if ( r === 10) {
		document.getElementById("iframe").src = "BIOM10.html";
		document.getElementById("10A").innerHTML = localStorage.getItem("BIO10A");
		document.getElementById("10B").innerHTML = localStorage.getItem("BIO10B");
		document.getElementById("10C").innerHTML = localStorage.getItem("BIO10C");
		document.getElementById("10D").innerHTML = localStorage.getItem("BIO10D");
	}
	if ( r === 11) {
		document.getElementById("iframe").src = "BIOM11.html";
		document.getElementById("11A").innerHTML = localStorage.getItem("BIO11A");
		document.getElementById("11B").innerHTML = localStorage.getItem("BIO11B");
		document.getElementById("11C").innerHTML = localStorage.getItem("BIO11C");
		document.getElementById("11D").innerHTML = localStorage.getItem("BIO11D");
	}
	if ( r === 12) {
		document.getElementById("iframe").src = "BIOM12.html";
		document.getElementById("12A").innerHTML = localStorage.getItem("BIO12A");
		document.getElementById("12B").innerHTML = localStorage.getItem("BIO12B");
		document.getElementById("12C").innerHTML = localStorage.getItem("BIO12C");
		document.getElementById("12D").innerHTML = localStorage.getItem("BIO12D");
	}
	if ( r === 13) {
		document.getElementById("iframe").src = "BIOM13.html";
		document.getElementById("13A").innerHTML = localStorage.getItem("BIO13A");
		document.getElementById("13B").innerHTML = localStorage.getItem("BIO13B");
		document.getElementById("13C").innerHTML = localStorage.getItem("BIO13C");
		document.getElementById("13D").innerHTML = localStorage.getItem("BIO13D");
	}
	if ( r === 14) {
		document.getElementById("iframe").src = "BIOM14.html";
		document.getElementById("14A").innerHTML = localStorage.getItem("BIO14A");
		document.getElementById("14B").innerHTML = localStorage.getItem("BIO14B");
		document.getElementById("14C").innerHTML = localStorage.getItem("BIO14C");
		document.getElementById("14D").innerHTML = localStorage.getItem("BIO14D");
	}
	if ( r === 15) {
		document.getElementById("iframe").src = "BIOM15.html";
		document.getElementById("15A").innerHTML = localStorage.getItem("BIO15A");
		document.getElementById("15B").innerHTML = localStorage.getItem("BIO15B");
		document.getElementById("15C").innerHTML = localStorage.getItem("BIO15C");
		document.getElementById("15D").innerHTML = localStorage.getItem("BIO15D");
	}
	if ( r === 16) {
		document.getElementById("iframe").src = "BIOM16.html";
		document.getElementById("16A").innerHTML = localStorage.getItem("BIO16A");
		document.getElementById("16B").innerHTML = localStorage.getItem("BIO16B");
		document.getElementById("16C").innerHTML = localStorage.getItem("BIO16C");
		document.getElementById("16D").innerHTML = localStorage.getItem("BIO16D");
	}
	if ( r === 17) {
		document.getElementById("iframe").src = "BIOM17.html";
		document.getElementById("17A").innerHTML = localStorage.getItem("BIO17A");
		document.getElementById("17B").innerHTML = localStorage.getItem("BIO17B");
		document.getElementById("17C").innerHTML = localStorage.getItem("BIO17C");
		document.getElementById("17D").innerHTML = localStorage.getItem("BIO17D");
	}
	if ( r === 18) {
		document.getElementById("iframe").src = "BIOM18.html";
		document.getElementById("18A").innerHTML = localStorage.getItem("BIO18A");
		document.getElementById("18B").innerHTML = localStorage.getItem("BIO18B");
		document.getElementById("18C").innerHTML = localStorage.getItem("BIO18C");
		document.getElementById("18D").innerHTML = localStorage.getItem("BIO18D");
	}
	if ( r === 19) {
		document.getElementById("iframe").src = "BIOM19.html";
		document.getElementById("19A").innerHTML = localStorage.getItem("BIO19A");
		document.getElementById("19B").innerHTML = localStorage.getItem("BIO19B");
		document.getElementById("19C").innerHTML = localStorage.getItem("BIO19C");
		document.getElementById("19D").innerHTML = localStorage.getItem("BIO19D");
	}
	if ( r === 20) {
		document.getElementById("iframe").src = "BIOM20.html";
		document.getElementById("20A").innerHTML = localStorage.getItem("BIO20A");
		document.getElementById("20B").innerHTML = localStorage.getItem("BIO20B");
		document.getElementById("20C").innerHTML = localStorage.getItem("BIO20C");
		document.getElementById("20D").innerHTML = localStorage.getItem("BIO20D");
	}
	if ( r === 21) {
		document.getElementById("iframe").src = "BIOM21.html";
		document.getElementById("21A").innerHTML = localStorage.getItem("BIO21A");
		document.getElementById("21B").innerHTML = localStorage.getItem("BIO21B");
		document.getElementById("21C").innerHTML = localStorage.getItem("BIO21C");
		document.getElementById("21D").innerHTML = localStorage.getItem("BIO21D");
	}
	if ( r === 22) {
		document.getElementById("iframe").src = "BIOM22.html";
		document.getElementById("22A").innerHTML = localStorage.getItem("BIO22A");
		document.getElementById("22B").innerHTML = localStorage.getItem("BIO22B");
		document.getElementById("22C").innerHTML = localStorage.getItem("BIO22C");
		document.getElementById("22D").innerHTML = localStorage.getItem("BIO22D");
	}
	if ( r === 23) {
		document.getElementById("iframe").src = "BIOM23.html";
		document.getElementById("23A").innerHTML = localStorage.getItem("BIO23A");
		document.getElementById("23B").innerHTML = localStorage.getItem("BIO23B");
		document.getElementById("23C").innerHTML = localStorage.getItem("BIO23C");
		document.getElementById("23D").innerHTML = localStorage.getItem("BIO23D");
	}
	if ( r === 24) {
		document.getElementById("iframe").src = "BIOM24.html";
		document.getElementById("24A").innerHTML = localStorage.getItem("BIO24A");
		document.getElementById("24B").innerHTML = localStorage.getItem("BIO24B");
		document.getElementById("24C").innerHTML = localStorage.getItem("BIO24C");
		document.getElementById("24D").innerHTML = localStorage.getItem("BIO24D");
	}
	if ( r === 25) {
		document.getElementById("iframe").src = "BIOM25.html";
		document.getElementById("25A").innerHTML = localStorage.getItem("BIO25A");
		document.getElementById("25B").innerHTML = localStorage.getItem("BIO25B");
		document.getElementById("25C").innerHTML = localStorage.getItem("BIO25C");
		document.getElementById("25D").innerHTML = localStorage.getItem("BIO25D");
	}
	if ( r === 26) {
		document.getElementById("iframe").src = "BIOM26.html";
		document.getElementById("26A").innerHTML = localStorage.getItem("BIO26A");
		document.getElementById("26B").innerHTML = localStorage.getItem("BIO26B");
		document.getElementById("26C").innerHTML = localStorage.getItem("BIO26C");
		document.getElementById("26D").innerHTML = localStorage.getItem("BIO26D");
	}
	if ( r === 27) {
		document.getElementById("iframe").src = "BIOM27.html";
		document.getElementById("27A").innerHTML = localStorage.getItem("BIO27A");
		document.getElementById("27B").innerHTML = localStorage.getItem("BIO27B");
		document.getElementById("27C").innerHTML = localStorage.getItem("BIO27C");
		document.getElementById("27D").innerHTML = localStorage.getItem("BIO27D");
	}
	if ( r === 28) {
		document.getElementById("iframe").src = "BIOM28.html";
		document.getElementById("28A").innerHTML = localStorage.getItem("BIO28A");
		document.getElementById("28B").innerHTML = localStorage.getItem("BIO28B");
		document.getElementById("28C").innerHTML = localStorage.getItem("BIO28C");
		document.getElementById("28D").innerHTML = localStorage.getItem("BIO28D");
	}
	if ( r === 29) {
		document.getElementById("iframe").src = "BIOM29.html";
		document.getElementById("29A").innerHTML = localStorage.getItem("BIO29A");
		document.getElementById("29B").innerHTML = localStorage.getItem("BIO29B");
		document.getElementById("29C").innerHTML = localStorage.getItem("BIO29C");
		document.getElementById("29D").innerHTML = localStorage.getItem("BIO29D");
	}
	if ( r === 30) {
		document.getElementById("iframe").src = "BIOM30.html";
		document.getElementById("30A").innerHTML = localStorage.getItem("BIO30A");
		document.getElementById("30B").innerHTML = localStorage.getItem("BIO30B");
		document.getElementById("30C").innerHTML = localStorage.getItem("BIO30C");
		document.getElementById("30D").innerHTML = localStorage.getItem("BIO30D");
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
}
function clickOption() {
if (r === 1) {
let a1 = document.getElementById("A").checked;
let b1 = document.getElementById("B").checked;
let c1 = document.getElementById("C").checked;
let d1 = document.getElementById("D").checked;
if(a1 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("1", "A");
}
if(b1 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("1", "B");
}
if(c1 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("1", "C");
}
if(d1 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("1", "D");
}  
if (a1 === false && b1 === false && c1 === false && d1 === false) {
	localStorage.setItem("1", "empty")
}	
}
if (r === 2) {
let a2 = document.getElementById("A").checked;
let b2 = document.getElementById("B").checked;
let c2 = document.getElementById("C").checked;
let d2 = document.getElementById("D").checked;
if(a2 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("2", "A");
}
if(b2 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("2", "B");
}
if(c2 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("2", "C");
}
if(d2 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("2", "D");
}  
if (a2 === false && b2 === false && c2 === false && d2 === false) {
	localStorage.setItem("2", "empty")
} 
}
if (r === 3) {
let a3 = document.getElementById("A").checked;
let b3 = document.getElementById("B").checked;
let c3 = document.getElementById("C").checked;
let d3 = document.getElementById("D").checked;
if(a3 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("3", "A");
}
if(b3 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("3", "B");
}
if(c3 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("3", "C");
}
if(d3 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("3", "D");
}  
if (a3 === false && b3 === false && c3 === false && d3 === false) {
	localStorage.setItem("3", "empty")
}	
}
if (r === 4) {
let a4 = document.getElementById("A").checked;
let b4 = document.getElementById("B").checked;
let c4 = document.getElementById("C").checked;
let d4 = document.getElementById("D").checked;
if(a4 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("4", "A");
}
if(b4 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("4", "B");
}
if(c4 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("4", "C");
}
if(d4 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("4", "D");
}  
if (a4 === false && b4 === false && c4 === false && d4 === false) {
	localStorage.setItem("4", "empty")
}	
}
if (r === 5) {
let a5 = document.getElementById("A").checked;
let b5 = document.getElementById("B").checked;
let c5 = document.getElementById("C").checked;
let d5 = document.getElementById("D").checked;
if(a5 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("5", "A");
}
if(b5 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("5", "B");
}
if(c5 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("5", "C");
}
if(d5 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("5", "D");
}  
if (a5 === false && b5 === false && c5 === false && d5 === false) {
	localStorage.setItem("5", "empty")
}	
}
if (r === 6) {
let a6 = document.getElementById("A").checked;
let b6 = document.getElementById("B").checked;
let c6 = document.getElementById("C").checked;
let d6 = document.getElementById("D").checked;
if(a6 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("6", "A");
}
if(b6 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("6", "B");
}
if(c6 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("6", "C");
}
if(d6 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("6", "D");
}  
if (a6 === false && b6 === false && c6 === false && d6 === false) {
	localStorage.setItem("6", "empty")
}	
}
if (r === 7) {
let a7 = document.getElementById("A").checked;
let b7 = document.getElementById("B").checked;
let c7 = document.getElementById("C").checked;
let d7 = document.getElementById("D").checked;
if(a7 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("7", "A");
}
if(b7 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("7", "B");
}
if(c7 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("7", "C");
}
if(d7 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("7", "D");
}  
if (a7 === false && b7 === false && c7 === false && d7 === false) {
	localStorage.setItem("7", "empty")
}	
}
if (r === 8) {
let a8 = document.getElementById("A").checked;
let b8 = document.getElementById("B").checked;
let c8 = document.getElementById("C").checked;
let d8 = document.getElementById("D").checked;
if(a8 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("8", "A");
}
if(b8 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("8", "B");
}
if(c8 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("8", "C");
}
if(d8 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("8", "D");
}  
if (a8 === false && b8 === false && c8 === false && d8 === false) {
	localStorage.setItem("8", "empty")
}	
}
if (r === 9) {
let a9 = document.getElementById("A").checked;
let b9 = document.getElementById("B").checked;
let c9 = document.getElementById("C").checked;
let d9 = document.getElementById("D").checked;
if(a9 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("9", "A");
}
if(b9 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("9", "B");
}
if(c9 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("9", "C");
}
if(d9 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("9", "D");
}  
if (a9 === false && b9 === false && c9 === false && d9 === false) {
	localStorage.setItem("9", "empty")
}	
}
if (r === 10) {
let a10 = document.getElementById("A").checked;
let b10 = document.getElementById("B").checked;
let c10 = document.getElementById("C").checked;
let d10 = document.getElementById("D").checked;
if(a10 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("10", "A");
}
if(b10 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("10", "B");
}
if(c10 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("10", "C");
}
if(d10 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("10", "D");
}  
if (a10 === false && b10 === false && c10 === false && d10 === false) {
	localStorage.setItem("10", "empty")
}	
}	
if (r === 11) {
let a11 = document.getElementById("A").checked;
let b11 = document.getElementById("B").checked;
let c11 = document.getElementById("C").checked;
let d11 = document.getElementById("D").checked;
if(a11 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("11", "A");
}
if(b11 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("11", "B");
}
if(c11 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("11", "C");
}
if(d11 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("11", "D");
}  
if (a11 === false && b11 === false && c11 === false && d11 === false) {
	localStorage.setItem("11", "empty")
}	
}
if (r === 12) {
let a12 = document.getElementById("A").checked;
let b12 = document.getElementById("B").checked;
let c12 = document.getElementById("C").checked;
let d12 = document.getElementById("D").checked;
if(a12 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("12", "A");
}
if(b12 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("12", "B");
}
if(c12 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("12", "C");
}
if(d12 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("12", "D");
}  
if (a12 === false && b12 === false && c12 === false && d12 === false) {
	localStorage.setItem("12", "empty")
}	
}
if (r === 13) {
let a13 = document.getElementById("A").checked;
let b13 = document.getElementById("B").checked;
let c13 = document.getElementById("C").checked;
let d13 = document.getElementById("D").checked;
if(a13 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("13", "A");
}
if(b13 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("13", "B");
}
if(c13 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("13", "C");
}
if(d13 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("13", "D");
}  
if (a13 === false && b13 === false && c13 === false && d13 === false) {
	localStorage.setItem("13", "empty")
}	
}
if (r === 14) {
let a14 = document.getElementById("A").checked;
let b14 = document.getElementById("B").checked;
let c14 = document.getElementById("C").checked;
let d14 = document.getElementById("D").checked;
if(a14 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("14", "A");
}
if(b14 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("14", "B");
}
if(c14 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("14", "C");
}
if(d14 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("14", "D");
}  
if (a14 === false && b14 === false && c14 === false && d14 === false) {
	localStorage.setItem("14", "empty")
}	
}
if (r === 15) {
let a15 = document.getElementById("A").checked;
let b15 = document.getElementById("B").checked;
let c15 = document.getElementById("C").checked;
let d15 = document.getElementById("D").checked;
if(a15 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("15", "A");
}
if(b15 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("15", "B");
}
if(c15 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("15", "C");
}
if(d15 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("15", "D");
}  
if (a15 === false && b15 === false && c15 === false && d15 === false) {
	localStorage.setItem("15", "empty")
}	
}
if (r === 16) {
let a16 = document.getElementById("A").checked;
let b16 = document.getElementById("B").checked;
let c16 = document.getElementById("C").checked;
let d16 = document.getElementById("D").checked;
if(a16 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("16", "A");
}
if(b16 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("16", "B");
}
if(c16 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("16", "C");
}
if(d16 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("16", "D");
}  
if (a16 === false && b16 === false && c16 === false && d16 === false) {
	localStorage.setItem("16", "empty")
}	
}
if (r === 17) {
let a17 = document.getElementById("A").checked;
let b17 = document.getElementById("B").checked;
let c17 = document.getElementById("C").checked;
let d17 = document.getElementById("D").checked;
if(a17 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("17", "A");
}
if(b17 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("17", "B");
}
if(c17 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("17", "C");
}
if(d17 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("17", "D");
}  
if (a17 === false && b17 === false && c17 === false && d17 === false) {
	localStorage.setItem("17", "empty")
}	
}
if (r === 18) {
let a18 = document.getElementById("A").checked;
let b18 = document.getElementById("B").checked;
let c18 = document.getElementById("C").checked;
let d18 = document.getElementById("D").checked;
if(a18 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("18", "A");
}
if(b18 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("18", "B");
}
if(c18 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("18", "C");
}
if(d18 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("18", "D");
}  
if (a18 === false && b18 === false && c18 === false && d18 === false) {
	localStorage.setItem("18", "empty")
}	
}
if (r === 19) {
let a19 = document.getElementById("A").checked;
let b19 = document.getElementById("B").checked;
let c19 = document.getElementById("C").checked;
let d19 = document.getElementById("D").checked;
if(a19 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("19", "A");
}
if(b19 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("19", "B");
}
if(c19 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("19", "C");
}
if(d19 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("19", "D");
}  
if (a19 === false && b19 === false && c19 === false && d19 === false) {
	localStorage.setItem("19", "empty")
}	
}
if (r === 20) {
let a20 = document.getElementById("A").checked;
let b20 = document.getElementById("B").checked;
let c20 = document.getElementById("C").checked;
let d20 = document.getElementById("D").checked;
if(a20 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("20", "A");
}
if(b20 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("20", "B");
}
if(c20 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("20", "C");
}
if(d20 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("20", "D");
}  
if (a20 === false && b20 === false && c20 === false && d20 === false) {
	localStorage.setItem("20", "empty")
}	
}
if (r === 21) {
let a21 = document.getElementById("A").checked;
let b21 = document.getElementById("B").checked;
let c21 = document.getElementById("C").checked;
let d21 = document.getElementById("D").checked;
if(a21 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("21", "A");
}
if(b21 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("21", "B");
}
if(c21 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("21", "C");
}
if(d21 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("21", "D");
}  
if (a21 === false && b21 === false && c21 === false && d21 === false) {
	localStorage.setItem("21", "empty")
}	
}
if (r === 22) {
let a22 = document.getElementById("A").checked;
let b22 = document.getElementById("B").checked;
let c22 = document.getElementById("C").checked;
let d22 = document.getElementById("D").checked;
if(a22 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("22", "A");
}
if(b22 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("22", "B");
}
if(c22 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("22", "C");
}
if(d22 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("22", "D");
}  
if (a22 === false && b22 === false && c22 === false && d22 === false) {
	localStorage.setItem("22", "empty")
}	
}
if (r === 23) {
let a23 = document.getElementById("A").checked;
let b23 = document.getElementById("B").checked;
let c23 = document.getElementById("C").checked;
let d23 = document.getElementById("D").checked;
if(a23 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("23", "A");
}
if(b23 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("23", "B");
}
if(c23 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("23", "C");
}
if(d23 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("23", "D");
}  
if (a23 === false && b23 === false && c23 === false && d23 === false) {
	localStorage.setItem("23", "empty")
}	
}
if (r === 24) {
let a24 = document.getElementById("A").checked;
let b24 = document.getElementById("B").checked;
let c24 = document.getElementById("C").checked;
let d24 = document.getElementById("D").checked;
if(a24 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("24", "A");
}
if(b24 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("24", "B");
}
if(c24 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("24", "C");
}
if(d24 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("24", "D");
}  
if (a24 === false && b24 === false && c24 === false && d24 === false) {
	localStorage.setItem("24", "empty")
}	
}
if (r === 25) {
let a25 = document.getElementById("A").checked;
let b25 = document.getElementById("B").checked;
let c25 = document.getElementById("C").checked;
let d25 = document.getElementById("D").checked;
if(a25 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("25", "A");
}
if(b25 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("25", "B");
}
if(c25 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("25", "C");
}
if(d25 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("25", "D");
}  
if (a25 === false && b25 === false && c25 === false && d25 === false) {
	localStorage.setItem("25", "empty")
}	
}
if (r === 26) {
let a26 = document.getElementById("A").checked;
let b26 = document.getElementById("B").checked;
let c26 = document.getElementById("C").checked;
let d26 = document.getElementById("D").checked;
if(a26 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("26", "A");
}
if(b26 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("26", "B");
}
if(c26 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("26", "C");
}
if(d26 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("26", "D");
}  
if (a26 === false && b26 === false && c26 === false && d26 === false) {
	localStorage.setItem("26", "empty")
}	
}
if (r === 27) {
let a27 = document.getElementById("A").checked;
let b27 = document.getElementById("B").checked;
let c27 = document.getElementById("C").checked;
let d27 = document.getElementById("D").checked;
if(a27 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("27", "A");
}
if(b27 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("27", "B");
}
if(c27 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("27", "C");
}
if(d27 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("27", "D");
}  
if (a27 === false && b27 === false && c27 === false && d27 === false) {
	localStorage.setItem("27", "empty")
}	
}
if (r === 28) {
let a28 = document.getElementById("A").checked;
let b28 = document.getElementById("B").checked;
let c28 = document.getElementById("C").checked;
let d28 = document.getElementById("D").checked;
if(a28 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("28", "A");
}
if(b28 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("28", "B");
}
if(c28 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("28", "C");
}
if(d28 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("28", "D");
}  
if (a28 === false && b28 === false && c28 === false && d28 === false) {
	localStorage.setItem("28", "empty")
}	
}
if (r === 29) {
let a29 = document.getElementById("A").checked;
let b29 = document.getElementById("B").checked;
let c29 = document.getElementById("C").checked;
let d29 = document.getElementById("D").checked;
if(a29 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("29", "A");
}
if(b29 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("29", "B");
}
if(c29 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("29", "C");
}
if(d29 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("29", "D");
}  
if (a29 === false && b29 === false && c29 === false && d29 === false) {
	localStorage.setItem("29", "empty")
}	
}
if (r === 30) {
let a30 = document.getElementById("A").checked;
let b30 = document.getElementById("B").checked;
let c30 = document.getElementById("C").checked;
let d30 = document.getElementById("D").checked;
if(a30 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("30", "A");
}
if(b30 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("30", "B");
}
if(c30 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("30", "C");
}
if(d30 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("30", "D");
}  
if (a30 === false && b30 === false && c30 === false && d30 === false) {
	localStorage.setItem("30", "empty")
}	
}
}
function nextSection() {
    window.location="BIOSque.html"
}