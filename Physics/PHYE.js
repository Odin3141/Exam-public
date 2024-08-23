function submit() {
	for (r = 1; r < 12; r++) {
		var ta = "T" + r + "A"
		var aa = document.getElementById(ta).value
		var tb = "T" + r + "B"
		var ab = document.getElementById(tb).value
		var tc = "T" + r + "C"
		var ac = document.getElementById(tc).value
		var td = "T" + r + "D"
		var ad = document.getElementById(td).value
		var te = "T" + r + "E"
		var ae = document.getElementById(te).value
		var tf = "T" + r + "F"
		var af = document.getElementById(tf).value
		var tg = "T" + r + "G"
		var ag = document.getElementById(tg).value
		var th = "T" + r + "H"
		var ah = document.getElementById(th).value
	if (aa === "") {
		aa = "empty"
	}
	if (ab === "") {
		ab = "empty"
	}
	if (ac === "") {
		ac = "empty"
	}
	if (ad === "") {
		ad = "empty"
	}
	if (ae === "") {
		ae = "empty"
	}
	if (af === "") {
		af = "empty"
	}
	if (ag === "") {
		ag = "empty"
	}
	if (ah === "") {
		ah = "empty"
	}
	localStorage.setItem(ta, aa)
	localStorage.setItem(tb, ab)
	localStorage.setItem(tc, ac)
	localStorage.setItem(td, ad)
	localStorage.setItem(te, ae)
	localStorage.setItem(tf, af)
	localStorage.setItem(tg, ag)
	localStorage.setItem(th, ah)
	document.location="PHYresult.html"
	}	
}