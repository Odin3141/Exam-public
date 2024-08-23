var r = 1;
function nextPage() {
	r++
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
	noclick()
	if ( r === 1) {
		document.getElementById("iframe").src = "SPAK/SPAK1.html";
		document.getElementById("1A").innerHTML = localStorage.getItem("SPAK1A");
		document.getElementById("1B").innerHTML = localStorage.getItem("SPAK1B");
		document.getElementById("1C").innerHTML = localStorage.getItem("SPAK1C");
		document.getElementById("1D").innerHTML = localStorage.getItem("SPAK1D");
	}
	if ( r === 2) {
		document.getElementById("iframe").src = "SPAK/SPAK2.html";
		document.getElementById("2A").innerHTML = localStorage.getItem("SPAK2A");
		document.getElementById("2B").innerHTML = localStorage.getItem("SPAK2B");
		document.getElementById("2C").innerHTML = localStorage.getItem("SPAK2C");
		document.getElementById("2D").innerHTML = localStorage.getItem("SPAK2D");
	}
	if ( r === 3) {
		document.getElementById("iframe").src = "SPAK/SPAK3.html";
		document.getElementById("3A").innerHTML = localStorage.getItem("SPAK3A");
		document.getElementById("3B").innerHTML = localStorage.getItem("SPAK3B");
		document.getElementById("3C").innerHTML = localStorage.getItem("SPAK3C");
		document.getElementById("3D").innerHTML = localStorage.getItem("SPAK3D");
	}
	if ( r === 4) {
		document.getElementById("iframe").src = "SPAK/SPAK4.html";
		document.getElementById("4A").innerHTML = localStorage.getItem("SPAK4A");
		document.getElementById("4B").innerHTML = localStorage.getItem("SPAK4B");
		document.getElementById("4C").innerHTML = localStorage.getItem("SPAK4C");
		document.getElementById("4D").innerHTML = localStorage.getItem("SPAK4D");
	}
	if ( r === 5) {
		document.getElementById("iframe").src = "SPAK/SPAK5.html";
		document.getElementById("5A").innerHTML = localStorage.getItem("SPAK5A");
		document.getElementById("5B").innerHTML = localStorage.getItem("SPAK5B");
		document.getElementById("5C").innerHTML = localStorage.getItem("SPAK5C");
		document.getElementById("5D").innerHTML = localStorage.getItem("SPAK5D");
	}
	if ( r === 6) {
		document.getElementById("iframe").src = "SPAK/SPAK6.html";
		document.getElementById("6A").innerHTML = localStorage.getItem("SPAK6A");
		document.getElementById("6B").innerHTML = localStorage.getItem("SPAK6B");
		document.getElementById("6C").innerHTML = localStorage.getItem("SPAK6C");
		document.getElementById("6D").innerHTML = localStorage.getItem("SPAK6D");
	}
	if ( r === 7) {
		document.getElementById("iframe").src = "SPAK/SPAK7.html";
		document.getElementById("7A").innerHTML = localStorage.getItem("SPAK7A");
		document.getElementById("7B").innerHTML = localStorage.getItem("SPAK7B");
		document.getElementById("7C").innerHTML = localStorage.getItem("SPAK7C");
		document.getElementById("7D").innerHTML = localStorage.getItem("SPAK7D");
	}
	if ( r === 8) {
		document.getElementById("iframe").src = "SPAK/SPAK8.html";
		document.getElementById("8A").innerHTML = localStorage.getItem("SPAK8A");
		document.getElementById("8B").innerHTML = localStorage.getItem("SPAK8B");
		document.getElementById("8C").innerHTML = localStorage.getItem("SPAK8C");
		document.getElementById("8D").innerHTML = localStorage.getItem("SPAK8D");
	}
	if ( r === 9) {
		document.getElementById("iframe").src = "SPAK/SPAK9.html";
		document.getElementById("9A").innerHTML = localStorage.getItem("SPAK9A");
		document.getElementById("9B").innerHTML = localStorage.getItem("SPAK9B");
		document.getElementById("9C").innerHTML = localStorage.getItem("SPAK9C");
		document.getElementById("9D").innerHTML = localStorage.getItem("SPAK9D");
	}
	if ( r === 10) {
		document.getElementById("iframe").src = "SPAK/SPAK10.html";
		document.getElementById("10A").innerHTML = localStorage.getItem("SPAK10A");
		document.getElementById("10B").innerHTML = localStorage.getItem("SPAK10B");
		document.getElementById("10C").innerHTML = localStorage.getItem("SPAK10C");
		document.getElementById("10D").innerHTML = localStorage.getItem("SPAK10D");
	}
	if ( r === 11) {
		document.getElementById("iframe").src = "SPAK/SPAK11.html";
		document.getElementById("11A").innerHTML = localStorage.getItem("SPAK11A");
		document.getElementById("11B").innerHTML = localStorage.getItem("SPAK11B");
		document.getElementById("11C").innerHTML = localStorage.getItem("SPAK11C");
		document.getElementById("11D").innerHTML = localStorage.getItem("SPAK11D");
	}
	if ( r === 12) {
		document.getElementById("iframe").src = "SPAK/SPAK12.html";
		document.getElementById("12A").innerHTML = localStorage.getItem("SPAK12A");
		document.getElementById("12B").innerHTML = localStorage.getItem("SPAK12B");
		document.getElementById("12C").innerHTML = localStorage.getItem("SPAK12C");
		document.getElementById("12D").innerHTML = localStorage.getItem("SPAK12D");
	}
	if ( r === 13) {
		document.getElementById("iframe").src = "SPAK/SPAK13.html";
		document.getElementById("13A").innerHTML = localStorage.getItem("SPAK13A");
		document.getElementById("13B").innerHTML = localStorage.getItem("SPAK13B");
		document.getElementById("13C").innerHTML = localStorage.getItem("SPAK13C");
		document.getElementById("13D").innerHTML = localStorage.getItem("SPAK13D");
	}
	if ( r === 14) {
		document.getElementById("iframe").src = "SPAK/SPAK14.html";
		document.getElementById("14A").innerHTML = localStorage.getItem("SPAK14A");
		document.getElementById("14B").innerHTML = localStorage.getItem("SPAK14B");
		document.getElementById("14C").innerHTML = localStorage.getItem("SPAK14C");
		document.getElementById("14D").innerHTML = localStorage.getItem("SPAK14D");
	}
	if ( r === 15) {
		document.getElementById("iframe").src = "SPAK/SPAK15.html";
		document.getElementById("15A").innerHTML = localStorage.getItem("SPAK15A");
		document.getElementById("15B").innerHTML = localStorage.getItem("SPAK15B");
		document.getElementById("15C").innerHTML = localStorage.getItem("SPAK15C");
		document.getElementById("15D").innerHTML = localStorage.getItem("SPAK15D");
	}
	if ( r === 16) {
		document.getElementById("iframe").src = "SPAK/SPAK16.html";
		document.getElementById("16A").innerHTML = localStorage.getItem("SPAK16A");
		document.getElementById("16B").innerHTML = localStorage.getItem("SPAK16B");
		document.getElementById("16C").innerHTML = localStorage.getItem("SPAK16C");
		document.getElementById("16D").innerHTML = localStorage.getItem("SPAK16D");
	}
	if ( r === 17) {
		document.getElementById("iframe").src = "SPAK/SPAK17.html";
		document.getElementById("17A").innerHTML = localStorage.getItem("SPAK17A");
		document.getElementById("17B").innerHTML = localStorage.getItem("SPAK17B");
		document.getElementById("17C").innerHTML = localStorage.getItem("SPAK17C");
		document.getElementById("17D").innerHTML = localStorage.getItem("SPAK17D");
	}
	if ( r === 18) {
		document.getElementById("iframe").src = "SPAK/SPAK18.html";
		document.getElementById("18A").innerHTML = localStorage.getItem("SPAK18A");
		document.getElementById("18B").innerHTML = localStorage.getItem("SPAK18B");
		document.getElementById("18C").innerHTML = localStorage.getItem("SPAK18C");
		document.getElementById("18D").innerHTML = localStorage.getItem("SPAK18D");
	}
	if ( r === 19) {
		document.getElementById("iframe").src = "SPAK/SPAK19.html";
		document.getElementById("19A").innerHTML = localStorage.getItem("SPAK19A");
		document.getElementById("19B").innerHTML = localStorage.getItem("SPAK19B");
		document.getElementById("19C").innerHTML = localStorage.getItem("SPAK19C");
		document.getElementById("19D").innerHTML = localStorage.getItem("SPAK19D");
	}
	if ( r === 20) {
		document.getElementById("iframe").src = "SPAK/SPAK20.html";
		document.getElementById("20A").innerHTML = localStorage.getItem("SPAK20A");
		document.getElementById("20B").innerHTML = localStorage.getItem("SPAK20B");
		document.getElementById("20C").innerHTML = localStorage.getItem("SPAK20C");
		document.getElementById("20D").innerHTML = localStorage.getItem("SPAK20D");
	}
	if ( r === 21) {
		document.getElementById("iframe").src = "SPAK/SPAK21.html";
		document.getElementById("21A").innerHTML = localStorage.getItem("SPAK21A");
		document.getElementById("21B").innerHTML = localStorage.getItem("SPAK21B");
		document.getElementById("21C").innerHTML = localStorage.getItem("SPAK21C");
		document.getElementById("21D").innerHTML = localStorage.getItem("SPAK21D");
	}
	if ( r === 22) {
		document.getElementById("iframe").src = "SPAK/SPAK22.html";
		document.getElementById("22A").innerHTML = localStorage.getItem("SPAK22A");
		document.getElementById("22B").innerHTML = localStorage.getItem("SPAK22B");
		document.getElementById("22C").innerHTML = localStorage.getItem("SPAK22C");
		document.getElementById("22D").innerHTML = localStorage.getItem("SPAK22D");
	}
	if ( r === 23) {
		document.getElementById("iframe").src = "SPAK/SPAK23.html";
		document.getElementById("23A").innerHTML = localStorage.getItem("SPAK23A");
		document.getElementById("23B").innerHTML = localStorage.getItem("SPAK23B");
		document.getElementById("23C").innerHTML = localStorage.getItem("SPAK23C");
		document.getElementById("23D").innerHTML = localStorage.getItem("SPAK23D");
	}
	if ( r === 24) {
		document.getElementById("iframe").src = "SPAK/SPAK24.html";
		document.getElementById("24A").innerHTML = localStorage.getItem("SPAK24A");
		document.getElementById("24B").innerHTML = localStorage.getItem("SPAK24B");
		document.getElementById("24C").innerHTML = localStorage.getItem("SPAK24C");
		document.getElementById("24D").innerHTML = localStorage.getItem("SPAK24D");
	}
	if ( r === 25) {
		document.getElementById("iframe").src = "SPAK/SPAK25.html";
		document.getElementById("25A").innerHTML = localStorage.getItem("SPAK25A");
		document.getElementById("25B").innerHTML = localStorage.getItem("SPAK25B");
		document.getElementById("25C").innerHTML = localStorage.getItem("SPAK25C");
		document.getElementById("25D").innerHTML = localStorage.getItem("SPAK25D");
	}
	if ( r === 26) {
		document.getElementById("iframe").src = "SPAK/SPAK26.html";
		document.getElementById("26A").innerHTML = localStorage.getItem("SPAK26A");
		document.getElementById("26B").innerHTML = localStorage.getItem("SPAK26B");
		document.getElementById("26C").innerHTML = localStorage.getItem("SPAK26C");
		document.getElementById("26D").innerHTML = localStorage.getItem("SPAK26D");
	}
	if ( r === 27) {
		document.getElementById("iframe").src = "SPAK/SPAK27.html";
		document.getElementById("27A").innerHTML = localStorage.getItem("SPAK27A");
		document.getElementById("27B").innerHTML = localStorage.getItem("SPAK27B");
		document.getElementById("27C").innerHTML = localStorage.getItem("SPAK27C");
		document.getElementById("27D").innerHTML = localStorage.getItem("SPAK27D");
	}
	if ( r === 28) {
		document.getElementById("iframe").src = "SPAK/SPAK28.html";
		document.getElementById("28A").innerHTML = localStorage.getItem("SPAK28A");
		document.getElementById("28B").innerHTML = localStorage.getItem("SPAK28B");
		document.getElementById("28C").innerHTML = localStorage.getItem("SPAK28C");
		document.getElementById("28D").innerHTML = localStorage.getItem("SPAK28D");
	}
	if ( r === 29) {
		document.getElementById("iframe").src = "SPAK/SPAK29.html";
		document.getElementById("29A").innerHTML = localStorage.getItem("SPAK29A");
		document.getElementById("29B").innerHTML = localStorage.getItem("SPAK29B");
		document.getElementById("29C").innerHTML = localStorage.getItem("SPAK29C");
		document.getElementById("29D").innerHTML = localStorage.getItem("SPAK29D");
	}
	if ( r === 30) {
		document.getElementById("iframe").src = "SPAK/SPAK30.html";
		document.getElementById("30A").innerHTML = localStorage.getItem("SPAK30A");
		document.getElementById("30B").innerHTML = localStorage.getItem("SPAK30B");
		document.getElementById("30C").innerHTML = localStorage.getItem("SPAK30C");
		document.getElementById("30D").innerHTML = localStorage.getItem("SPAK30D");
	}
	if ( r === 31) {
		document.getElementById("iframe").src = "SPAK/SPAK31.html";
		document.getElementById("31A").innerHTML = localStorage.getItem("SPAK31A");
		document.getElementById("31B").innerHTML = localStorage.getItem("SPAK31B");
		document.getElementById("31C").innerHTML = localStorage.getItem("SPAK31C");
		document.getElementById("31D").innerHTML = localStorage.getItem("SPAK31D");
	}
	if ( r === 32) {
		document.getElementById("iframe").src = "SPAK/SPAK32.html";
		document.getElementById("32A").innerHTML = localStorage.getItem("SPAK32A");
		document.getElementById("32B").innerHTML = localStorage.getItem("SPAK32B");
		document.getElementById("32C").innerHTML = localStorage.getItem("SPAK32C");
		document.getElementById("32D").innerHTML = localStorage.getItem("SPAK32D");
	}
	if ( r === 33) {
		document.getElementById("iframe").src = "SPAK/SPAK33.html";
		document.getElementById("33A").innerHTML = localStorage.getItem("SPAK33A");
		document.getElementById("33B").innerHTML = localStorage.getItem("SPAK33B");
		document.getElementById("33C").innerHTML = localStorage.getItem("SPAK33C");
		document.getElementById("33D").innerHTML = localStorage.getItem("SPAK33D");
	}if ( r === 34) {
		document.getElementById("iframe").src = "SPAK/SPAK34.html";
		document.getElementById("34A").innerHTML = localStorage.getItem("SPAK34A");
		document.getElementById("34B").innerHTML = localStorage.getItem("SPAK34B");
		document.getElementById("34C").innerHTML = localStorage.getItem("SPAK34C");
		document.getElementById("34D").innerHTML = localStorage.getItem("SPAK34D");
	}
	if ( r === 35) {
		document.getElementById("iframe").src = "SPAK/SPAK35.html";
		document.getElementById("35A").innerHTML = localStorage.getItem("SPAK35A");
		document.getElementById("35B").innerHTML = localStorage.getItem("SPAK35B");
		document.getElementById("35C").innerHTML = localStorage.getItem("SPAK35C");
		document.getElementById("35D").innerHTML = localStorage.getItem("SPAK35D");
	}
	if ( r === 36) {
		document.getElementById("iframe").src = "SPAK/SPAK36.html";
		document.getElementById("36A").innerHTML = localStorage.getItem("SPAK36A");
		document.getElementById("36B").innerHTML = localStorage.getItem("SPAK36B");
		document.getElementById("36C").innerHTML = localStorage.getItem("SPAK36C");
		document.getElementById("36D").innerHTML = localStorage.getItem("SPAK36D");
	}
	if ( r === 37) {
		document.getElementById("iframe").src = "SPAK/SPAK37.html";
		document.getElementById("37A").innerHTML = localStorage.getItem("SPAK37A");
		document.getElementById("37B").innerHTML = localStorage.getItem("SPAK37B");
		document.getElementById("37C").innerHTML = localStorage.getItem("SPAK37C");
		document.getElementById("37D").innerHTML = localStorage.getItem("SPAK37D");
	}
	if ( r === 38) {
		document.getElementById("iframe").src = "SPAK/SPAK38.html";
		document.getElementById("38A").innerHTML = localStorage.getItem("SPAK38A");
		document.getElementById("38B").innerHTML = localStorage.getItem("SPAK38B");
		document.getElementById("38C").innerHTML = localStorage.getItem("SPAK38C");
		document.getElementById("38D").innerHTML = localStorage.getItem("SPAK38D");
	}
	if ( r === 39) {
		document.getElementById("iframe").src = "SPAK/SPAK39.html";
		document.getElementById("39A").innerHTML = localStorage.getItem("SPAK39A");
		document.getElementById("39B").innerHTML = localStorage.getItem("SPAK39B");
		document.getElementById("39C").innerHTML = localStorage.getItem("SPAK39C");
		document.getElementById("39D").innerHTML = localStorage.getItem("SPAK39D");
	}
	if ( r === 40) {
		document.getElementById("iframe").src = "SPAK/SPAK40.html";
		document.getElementById("40A").innerHTML = localStorage.getItem("SPAK40A");
		document.getElementById("40B").innerHTML = localStorage.getItem("SPAK40B");
		document.getElementById("40C").innerHTML = localStorage.getItem("SPAK40C");
		document.getElementById("40D").innerHTML = localStorage.getItem("SPAK40D");
	}
	if ( r === 41) {
		document.getElementById("iframe").src = "SPAK/SPAK41.html";
		document.getElementById("41A").innerHTML = localStorage.getItem("SPAK41A");
		document.getElementById("41B").innerHTML = localStorage.getItem("SPAK41B");
		document.getElementById("41C").innerHTML = localStorage.getItem("SPAK41C");
		document.getElementById("41D").innerHTML = localStorage.getItem("SPAK41D");
	}
	if ( r === 42) {
		document.getElementById("iframe").src = "SPAK/SPAK42.html";
		document.getElementById("42A").innerHTML = localStorage.getItem("SPAK42A");
		document.getElementById("42B").innerHTML = localStorage.getItem("SPAK42B");
		document.getElementById("42C").innerHTML = localStorage.getItem("SPAK42C");
		document.getElementById("42D").innerHTML = localStorage.getItem("SPAK42D");
	}
	if ( r === 43) {
		document.getElementById("iframe").src = "SPAK/SPAK43.html";
		document.getElementById("43A").innerHTML = localStorage.getItem("SPAK43A");
		document.getElementById("43B").innerHTML = localStorage.getItem("SPAK43B");
		document.getElementById("43C").innerHTML = localStorage.getItem("SPAK43C");
		document.getElementById("43D").innerHTML = localStorage.getItem("SPAK43D");
	}
	if ( r === 44) {
		document.getElementById("iframe").src = "SPAK/SPAK44.html";
		document.getElementById("44A").innerHTML = localStorage.getItem("SPAK44A");
		document.getElementById("44B").innerHTML = localStorage.getItem("SPAK44B");
		document.getElementById("44C").innerHTML = localStorage.getItem("SPAK44C");
		document.getElementById("44D").innerHTML = localStorage.getItem("SPAK44D");
	}
	if ( r === 45) {
		document.getElementById("iframe").src = "SPAK/SPAK45.html";
		document.getElementById("45A").innerHTML = localStorage.getItem("SPAK45A");
		document.getElementById("45B").innerHTML = localStorage.getItem("SPAK45B");
		document.getElementById("45C").innerHTML = localStorage.getItem("SPAK45C");
		document.getElementById("45D").innerHTML = localStorage.getItem("SPAK45D");
	}
	if ( r === 46) {
		document.getElementById("iframe").src = "SPAK/SPAK46.html";
		document.getElementById("46A").innerHTML = localStorage.getItem("SPAK46A");
		document.getElementById("46B").innerHTML = localStorage.getItem("SPAK46B");
		document.getElementById("46C").innerHTML = localStorage.getItem("SPAK46C");
		document.getElementById("46D").innerHTML = localStorage.getItem("SPAK46D");
	}
	if ( r === 47) {
		document.getElementById("iframe").src = "SPAK/SPAK47.html";
		document.getElementById("47A").innerHTML = localStorage.getItem("SPAK47A");
		document.getElementById("47B").innerHTML = localStorage.getItem("SPAK47B");
		document.getElementById("47C").innerHTML = localStorage.getItem("SPAK47C");
		document.getElementById("47D").innerHTML = localStorage.getItem("SPAK47D");
	}
	if ( r === 48) {
		document.getElementById("iframe").src = "SPAK/SPAK48.html";
		document.getElementById("48A").innerHTML = localStorage.getItem("SPAK48A");
		document.getElementById("48B").innerHTML = localStorage.getItem("SPAK48B");
		document.getElementById("48C").innerHTML = localStorage.getItem("SPAK48C");
		document.getElementById("48D").innerHTML = localStorage.getItem("SPAK48D");
	}
	if ( r === 49) {
		document.getElementById("iframe").src = "SPAK/SPAK49.html";
		document.getElementById("49A").innerHTML = localStorage.getItem("SPAK49A");
		document.getElementById("49B").innerHTML = localStorage.getItem("SPAK49B");
		document.getElementById("49C").innerHTML = localStorage.getItem("SPAK49C");
		document.getElementById("49D").innerHTML = localStorage.getItem("SPAK49D");
	}
	if ( r === 50) {
		document.getElementById("iframe").src = "SPAK/SPAK50.html";
		document.getElementById("50A").innerHTML = localStorage.getItem("SPAK50A");
		document.getElementById("50B").innerHTML = localStorage.getItem("SPAK50B");
		document.getElementById("50C").innerHTML = localStorage.getItem("SPAK50C");
		document.getElementById("50D").innerHTML = localStorage.getItem("SPAK50D");
	}
	if ( r === 51) {
		document.getElementById("iframe").src = "SPAK/SPAK51.html";
		document.getElementById("51A").innerHTML = localStorage.getItem("SPAK51A");
		document.getElementById("51B").innerHTML = localStorage.getItem("SPAK51B");
		document.getElementById("51C").innerHTML = localStorage.getItem("SPAK51C");
		document.getElementById("51D").innerHTML = localStorage.getItem("SPAK51D");
	}
	if ( r === 52) {
		document.getElementById("iframe").src = "SPAK/SPAK52.html";
		document.getElementById("52A").innerHTML = localStorage.getItem("SPAK52A");
		document.getElementById("52B").innerHTML = localStorage.getItem("SPAK52B");
		document.getElementById("52C").innerHTML = localStorage.getItem("SPAK52C");
		document.getElementById("52D").innerHTML = localStorage.getItem("SPAK52D");
	}
	if ( r === 53) {
		document.getElementById("iframe").src = "SPAK/SPAK53.html";
		document.getElementById("53A").innerHTML = localStorage.getItem("SPAK53A");
		document.getElementById("53B").innerHTML = localStorage.getItem("SPAK53B");
		document.getElementById("53C").innerHTML = localStorage.getItem("SPAK53C");
		document.getElementById("53D").innerHTML = localStorage.getItem("SPAK53D");
	}
	if ( r === 54) {
		document.getElementById("iframe").src = "SPAK/SPAK54.html";
		document.getElementById("54A").innerHTML = localStorage.getItem("SPAK54A");
		document.getElementById("54B").innerHTML = localStorage.getItem("SPAK54B");
		document.getElementById("54C").innerHTML = localStorage.getItem("SPAK54C");
		document.getElementById("54D").innerHTML = localStorage.getItem("SPAK54D");
	}
	if ( r === 55) {
		document.getElementById("iframe").src = "SPAK/SPAK55.html";
		document.getElementById("55A").innerHTML = localStorage.getItem("SPAK55A");
		document.getElementById("55B").innerHTML = localStorage.getItem("SPAK55B");
		document.getElementById("55C").innerHTML = localStorage.getItem("SPAK55C");
		document.getElementById("55D").innerHTML = localStorage.getItem("SPAK55D");
	}
	if ( r === 56) {
		document.getElementById("iframe").src = "SPAK/SPAK56.html";
		document.getElementById("56A").innerHTML = localStorage.getItem("SPAK56A");
		document.getElementById("56B").innerHTML = localStorage.getItem("SPAK56B");
		document.getElementById("56C").innerHTML = localStorage.getItem("SPAK56C");
		document.getElementById("56D").innerHTML = localStorage.getItem("SPAK56D");
	}
	if ( r === 57) {
		document.getElementById("iframe").src = "SPAK/SPAK57.html";
		document.getElementById("57A").innerHTML = localStorage.getItem("SPAK57A");
		document.getElementById("57B").innerHTML = localStorage.getItem("SPAK57B");
		document.getElementById("57C").innerHTML = localStorage.getItem("SPAK57C");
		document.getElementById("57D").innerHTML = localStorage.getItem("SPAK57D");
	}
	if ( r === 58) {
		document.getElementById("iframe").src = "SPAK/SPAK58.html";
		document.getElementById("58A").innerHTML = localStorage.getItem("SPAK58A");
		document.getElementById("58B").innerHTML = localStorage.getItem("SPAK58B");
		document.getElementById("58C").innerHTML = localStorage.getItem("SPAK58C");
		document.getElementById("58D").innerHTML = localStorage.getItem("SPAK58D");
	}
	if ( r === 59) {
		document.getElementById("iframe").src = "SPAK/SPAK59.html";
		document.getElementById("59A").innerHTML = localStorage.getItem("SPAK59A");
		document.getElementById("59B").innerHTML = localStorage.getItem("SPAK59B");
		document.getElementById("59C").innerHTML = localStorage.getItem("SPAK59C");
		document.getElementById("59D").innerHTML = localStorage.getItem("SPAK59D");
	}
	if ( r === 60) {
		document.getElementById("iframe").src = "SPAK/SPAK60.html";
		document.getElementById("60A").innerHTML = localStorage.getItem("SPAK60A");
		document.getElementById("60B").innerHTML = localStorage.getItem("SPAK60B");
		document.getElementById("60C").innerHTML = localStorage.getItem("SPAK60C");
		document.getElementById("60D").innerHTML = localStorage.getItem("SPAK60D");
	}
	if ( r === 61) {
		document.getElementById("iframe").src = "SPAK/SPAK61.html";
		document.getElementById("61A").innerHTML = localStorage.getItem("SPAK61A");
		document.getElementById("61B").innerHTML = localStorage.getItem("SPAK61B");
		document.getElementById("61C").innerHTML = localStorage.getItem("SPAK61C");
		document.getElementById("61D").innerHTML = localStorage.getItem("SPAK61D");
	}if ( r === 62) {
		document.getElementById("iframe").src = "SPAK/SPAK62.html";
		document.getElementById("62A").innerHTML = localStorage.getItem("SPAK62A");
		document.getElementById("62B").innerHTML = localStorage.getItem("SPAK62B");
		document.getElementById("62C").innerHTML = localStorage.getItem("SPAK62C");
		document.getElementById("62D").innerHTML = localStorage.getItem("SPAK62D");
	}if ( r === 63) {
		document.getElementById("iframe").src = "SPAK/SPAK63.html";
		document.getElementById("63A").innerHTML = localStorage.getItem("SPAK63A");
		document.getElementById("63B").innerHTML = localStorage.getItem("SPAK63B");
		document.getElementById("63C").innerHTML = localStorage.getItem("SPAK63C");
		document.getElementById("63D").innerHTML = localStorage.getItem("SPAK63D");
	}if ( r === 64) {
		document.getElementById("iframe").src = "SPAK/SPAK64.html";
		document.getElementById("64A").innerHTML = localStorage.getItem("SPAK64A");
		document.getElementById("64B").innerHTML = localStorage.getItem("SPAK64B");
		document.getElementById("64C").innerHTML = localStorage.getItem("SPAK64C");
		document.getElementById("64D").innerHTML = localStorage.getItem("SPAK64D");
	}if ( r === 65) {
		document.getElementById("iframe").src = "SPAK/SPAK65.html";
		document.getElementById("65A").innerHTML = localStorage.getItem("SPAK65A");
		document.getElementById("65B").innerHTML = localStorage.getItem("SPAK65B");
		document.getElementById("65C").innerHTML = localStorage.getItem("SPAK65C");
		document.getElementById("65D").innerHTML = localStorage.getItem("SPAK65D");
	}if ( r === 66) {
		document.getElementById("iframe").src = "SPAK/SPAK66.html";
		document.getElementById("66A").innerHTML = localStorage.getItem("SPAK66A");
		document.getElementById("66B").innerHTML = localStorage.getItem("SPAK66B");
		document.getElementById("66C").innerHTML = localStorage.getItem("SPAK66C");
		document.getElementById("66D").innerHTML = localStorage.getItem("SPAK66D");
	}if ( r === 67) {
		document.getElementById("iframe").src = "SPAK/SPAK67.html";
		document.getElementById("67A").innerHTML = localStorage.getItem("SPAK67A");
		document.getElementById("67B").innerHTML = localStorage.getItem("SPAK67B");
		document.getElementById("67C").innerHTML = localStorage.getItem("SPAK67C");
		document.getElementById("67D").innerHTML = localStorage.getItem("SPAK67D");
	}if ( r === 68) {
		document.getElementById("iframe").src = "SPAK/SPAK68.html";
		document.getElementById("68A").innerHTML = localStorage.getItem("SPAK68A");
		document.getElementById("68B").innerHTML = localStorage.getItem("SPAK68B");
		document.getElementById("68C").innerHTML = localStorage.getItem("SPAK68C");
		document.getElementById("68D").innerHTML = localStorage.getItem("SPAK68D");
	}if ( r === 69) {
		document.getElementById("iframe").src = "SPAK/SPAK69.html";
		document.getElementById("69A").innerHTML = localStorage.getItem("SPAK69A");
		document.getElementById("69B").innerHTML = localStorage.getItem("SPAK69B");
		document.getElementById("69C").innerHTML = localStorage.getItem("SPAK69C");
		document.getElementById("69D").innerHTML = localStorage.getItem("SPAK69D");
	}if ( r === 70) {
		document.getElementById("iframe").src = "SPAK/SPAK70.html";
		document.getElementById("70A").innerHTML = localStorage.getItem("SPAK70A");
		document.getElementById("70B").innerHTML = localStorage.getItem("SPAK70B");
		document.getElementById("70C").innerHTML = localStorage.getItem("SPAK70C");
		document.getElementById("70D").innerHTML = localStorage.getItem("SPAK70D");
	}if ( r === 71) {
		document.getElementById("iframe").src = "SPAK/SPAK71.html";
		document.getElementById("71A").innerHTML = localStorage.getItem("SPAK71A");
		document.getElementById("71B").innerHTML = localStorage.getItem("SPAK71B");
		document.getElementById("71C").innerHTML = localStorage.getItem("SPAK71C");
		document.getElementById("71D").innerHTML = localStorage.getItem("SPAK71D");
	}if ( r === 72) {
		document.getElementById("iframe").src = "SPAK/SPAK72.html";
		document.getElementById("72A").innerHTML = localStorage.getItem("SPAK72A");
		document.getElementById("72B").innerHTML = localStorage.getItem("SPAK72B");
		document.getElementById("72C").innerHTML = localStorage.getItem("SPAK72C");
		document.getElementById("72D").innerHTML = localStorage.getItem("SPAK72D");
	}if ( r === 73) {
		document.getElementById("iframe").src = "SPAK/SPAK73.html";
		document.getElementById("73A").innerHTML = localStorage.getItem("SPAK73A");
		document.getElementById("73B").innerHTML = localStorage.getItem("SPAK73B");
		document.getElementById("73C").innerHTML = localStorage.getItem("SPAK73C");
		document.getElementById("73D").innerHTML = localStorage.getItem("SPAK73D");
	}if ( r === 74) {
		document.getElementById("iframe").src = "SPAK/SPAK74.html";
		document.getElementById("74A").innerHTML = localStorage.getItem("SPAK74A");
		document.getElementById("74B").innerHTML = localStorage.getItem("SPAK74B");
		document.getElementById("74C").innerHTML = localStorage.getItem("SPAK74C");
		document.getElementById("74D").innerHTML = localStorage.getItem("SPAK74D");
	}if ( r === 75) {
		document.getElementById("iframe").src = "SPAK/SPAK75.html";
		document.getElementById("75A").innerHTML = localStorage.getItem("SPAK75A");
		document.getElementById("75B").innerHTML = localStorage.getItem("SPAK75B");
		document.getElementById("75C").innerHTML = localStorage.getItem("SPAK75C");
		document.getElementById("75D").innerHTML = localStorage.getItem("SPAK75D");
	}if ( r === 76) {
		document.getElementById("iframe").src = "SPAK/SPAK76.html";
		document.getElementById("76A").innerHTML = localStorage.getItem("SPAK76A");
		document.getElementById("76B").innerHTML = localStorage.getItem("SPAK76B");
		document.getElementById("76C").innerHTML = localStorage.getItem("SPAK76C");
		document.getElementById("76D").innerHTML = localStorage.getItem("SPAK76D");
	}if ( r === 77) {
		document.getElementById("iframe").src = "SPAK/SPAK77.html";
		document.getElementById("77A").innerHTML = localStorage.getItem("SPAK77A");
		document.getElementById("77B").innerHTML = localStorage.getItem("SPAK77B");
		document.getElementById("77C").innerHTML = localStorage.getItem("SPAK77C");
		document.getElementById("77D").innerHTML = localStorage.getItem("SPAK77D");
	}if ( r === 78) {
		document.getElementById("iframe").src = "SPAK/SPAK78.html";
		document.getElementById("78A").innerHTML = localStorage.getItem("SPAK78A");
		document.getElementById("78B").innerHTML = localStorage.getItem("SPAK78B");
		document.getElementById("78C").innerHTML = localStorage.getItem("SPAK78C");
		document.getElementById("78D").innerHTML = localStorage.getItem("SPAK78D");
	}if ( r === 79) {
		document.getElementById("iframe").src = "SPAK/SPAK79.html";
		document.getElementById("79A").innerHTML = localStorage.getItem("SPAK79A");
		document.getElementById("79B").innerHTML = localStorage.getItem("SPAK79B");
		document.getElementById("79C").innerHTML = localStorage.getItem("SPAK79C");
		document.getElementById("79D").innerHTML = localStorage.getItem("SPAK79D");
	}if ( r === 80) {
		document.getElementById("iframe").src = "SPAK/SPAK80.html";
		document.getElementById("80A").innerHTML = localStorage.getItem("SPAK80A");
		document.getElementById("80B").innerHTML = localStorage.getItem("SPAK80B");
		document.getElementById("80C").innerHTML = localStorage.getItem("SPAK80C");
		document.getElementById("80D").innerHTML = localStorage.getItem("SPAK80D");
	}if ( r === 81) {
		document.getElementById("iframe").src = "SPAK/SPAK81.html";
		document.getElementById("81A").innerHTML = localStorage.getItem("SPAK81A");
		document.getElementById("81B").innerHTML = localStorage.getItem("SPAK81B");
		document.getElementById("81C").innerHTML = localStorage.getItem("SPAK81C");
		document.getElementById("81D").innerHTML = localStorage.getItem("SPAK81D");
	}if ( r === 82) {
		document.getElementById("iframe").src = "SPAK/SPAK82.html";
		document.getElementById("82A").innerHTML = localStorage.getItem("SPAK82A");
		document.getElementById("82B").innerHTML = localStorage.getItem("SPAK82B");
		document.getElementById("82C").innerHTML = localStorage.getItem("SPAK82C");
		document.getElementById("82D").innerHTML = localStorage.getItem("SPAK82D");
	}if ( r === 83) {
		document.getElementById("iframe").src = "SPAK/SPAK83.html";
		document.getElementById("83A").innerHTML = localStorage.getItem("SPAK83A");
		document.getElementById("83B").innerHTML = localStorage.getItem("SPAK83B");
		document.getElementById("83C").innerHTML = localStorage.getItem("SPAK83C");
		document.getElementById("83D").innerHTML = localStorage.getItem("SPAK83D");
	}if ( r === 84) {
		document.getElementById("iframe").src = "SPAK/SPAK84.html";
		document.getElementById("84A").innerHTML = localStorage.getItem("SPAK84A");
		document.getElementById("84B").innerHTML = localStorage.getItem("SPAK84B");
		document.getElementById("84C").innerHTML = localStorage.getItem("SPAK84C");
		document.getElementById("84D").innerHTML = localStorage.getItem("SPAK84D");
	}if ( r === 85) {
		document.getElementById("iframe").src = "SPAK/SPAK85.html";
		document.getElementById("85A").innerHTML = localStorage.getItem("SPAK85A");
		document.getElementById("85B").innerHTML = localStorage.getItem("SPAK85B");
		document.getElementById("85C").innerHTML = localStorage.getItem("SPAK85C");
		document.getElementById("85D").innerHTML = localStorage.getItem("SPAK85D");
	}if ( r === 86) {
		document.getElementById("iframe").src = "SPAK/SPAK86.html";
		document.getElementById("86A").innerHTML = localStorage.getItem("SPAK86A");
		document.getElementById("86B").innerHTML = localStorage.getItem("SPAK86B");
		document.getElementById("86C").innerHTML = localStorage.getItem("SPAK86C");
		document.getElementById("86D").innerHTML = localStorage.getItem("SPAK86D");
	}if ( r === 87) {
		document.getElementById("iframe").src = "SPAK/SPAK87.html";
		document.getElementById("87A").innerHTML = localStorage.getItem("SPAK87A");
		document.getElementById("87B").innerHTML = localStorage.getItem("SPAK87B");
		document.getElementById("87C").innerHTML = localStorage.getItem("SPAK87C");
		document.getElementById("87D").innerHTML = localStorage.getItem("SPAK87D");
	}if ( r === 88) {
		document.getElementById("iframe").src = "SPAK/SPAK88.html";
		document.getElementById("88A").innerHTML = localStorage.getItem("SPAK88A");
		document.getElementById("88B").innerHTML = localStorage.getItem("SPAK88B");
		document.getElementById("88C").innerHTML = localStorage.getItem("SPAK88C");
		document.getElementById("88D").innerHTML = localStorage.getItem("SPAK88D");
	}if ( r === 89) {
		document.getElementById("iframe").src = "SPAK/SPAK89.html";
		document.getElementById("89A").innerHTML = localStorage.getItem("SPAK89A");
		document.getElementById("89B").innerHTML = localStorage.getItem("SPAK89B");
		document.getElementById("89C").innerHTML = localStorage.getItem("SPAK89C");
		document.getElementById("89D").innerHTML = localStorage.getItem("SPAK89D");
	}if ( r === 90) {
		document.getElementById("iframe").src = "SPAK/SPAK90.html";
		document.getElementById("90A").innerHTML = localStorage.getItem("SPAK90A");
		document.getElementById("90B").innerHTML = localStorage.getItem("SPAK90B");
		document.getElementById("90C").innerHTML = localStorage.getItem("SPAK90C");
		document.getElementById("90D").innerHTML = localStorage.getItem("SPAK90D");
	}if ( r === 91) {
		document.getElementById("iframe").src = "SPAK/SPAK91.html";
		document.getElementById("91A").innerHTML = localStorage.getItem("SPAK91A");
		document.getElementById("91B").innerHTML = localStorage.getItem("SPAK91B");
		document.getElementById("91C").innerHTML = localStorage.getItem("SPAK91C");
		document.getElementById("91D").innerHTML = localStorage.getItem("SPAK91D");
	}if ( r === 92) {
		document.getElementById("iframe").src = "SPAK/SPAK92.html";
		document.getElementById("92A").innerHTML = localStorage.getItem("SPAK92A");
		document.getElementById("92B").innerHTML = localStorage.getItem("SPAK92B");
		document.getElementById("92C").innerHTML = localStorage.getItem("SPAK92C");
		document.getElementById("92D").innerHTML = localStorage.getItem("SPAK92D");
	}if ( r === 93) {
		document.getElementById("iframe").src = "SPAK/SPAK93.html";
		document.getElementById("93A").innerHTML = localStorage.getItem("SPAK93A");
		document.getElementById("93B").innerHTML = localStorage.getItem("SPAK93B");
		document.getElementById("93C").innerHTML = localStorage.getItem("SPAK93C");
		document.getElementById("93D").innerHTML = localStorage.getItem("SPAK93D");
	}if ( r === 94) {
		document.getElementById("iframe").src = "SPAK/SPAK94.html";
		document.getElementById("94A").innerHTML = localStorage.getItem("SPAK94A");
		document.getElementById("94B").innerHTML = localStorage.getItem("SPAK94B");
		document.getElementById("94C").innerHTML = localStorage.getItem("SPAK94C");
		document.getElementById("94D").innerHTML = localStorage.getItem("SPAK94D");
	}if ( r === 95) {
		document.getElementById("iframe").src = "SPAK/SPAK95.html";
		document.getElementById("95A").innerHTML = localStorage.getItem("SPAK95A");
		document.getElementById("95B").innerHTML = localStorage.getItem("SPAK95B");
		document.getElementById("95C").innerHTML = localStorage.getItem("SPAK95C");
		document.getElementById("95D").innerHTML = localStorage.getItem("SPAK95D");
	}if ( r === 96) {
		document.getElementById("iframe").src = "SPAK/SPAK96.html";
		document.getElementById("96A").innerHTML = localStorage.getItem("SPAK96A");
		document.getElementById("96B").innerHTML = localStorage.getItem("SPAK96B");
		document.getElementById("96C").innerHTML = localStorage.getItem("SPAK96C");
		document.getElementById("96D").innerHTML = localStorage.getItem("SPAK96D");
	}if ( r === 97) {
		document.getElementById("iframe").src = "SPAK/SPAK97.html";
		document.getElementById("97A").innerHTML = localStorage.getItem("SPAK97A");
		document.getElementById("97B").innerHTML = localStorage.getItem("SPAK97B");
		document.getElementById("97C").innerHTML = localStorage.getItem("SPAK97C");
		document.getElementById("97D").innerHTML = localStorage.getItem("SPAK97D");
	}if ( r === 98) {
		document.getElementById("iframe").src = "SPAK/SPAK98.html";
		document.getElementById("98A").innerHTML = localStorage.getItem("SPAK98A");
		document.getElementById("98B").innerHTML = localStorage.getItem("SPAK98B");
		document.getElementById("98C").innerHTML = localStorage.getItem("SPAK98C");
		document.getElementById("98D").innerHTML = localStorage.getItem("SPAK98D");
	}if ( r === 99) {
		document.getElementById("iframe").src = "SPAK/SPAK99.html";
		document.getElementById("99A").innerHTML = localStorage.getItem("SPAK99A");
		document.getElementById("99B").innerHTML = localStorage.getItem("SPAK99B");
		document.getElementById("99C").innerHTML = localStorage.getItem("SPAK99C");
		document.getElementById("99D").innerHTML = localStorage.getItem("SPAK99D");
	}if ( r === 100) {
		document.getElementById("iframe").src = "SPAK/SPAK100.html";
		document.getElementById("100A").innerHTML = localStorage.getItem("SPAK100A");
		document.getElementById("100B").innerHTML = localStorage.getItem("SPAK100B");
		document.getElementById("100C").innerHTML = localStorage.getItem("SPAK100C");
		document.getElementById("100D").innerHTML = localStorage.getItem("SPAK100D");
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
	var newIdb = r + "B";
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
	noclick()
	if ( r === 1) {
		document.getElementById("iframe").src = "SPAK/SPAK1.html";
		document.getElementById("1A").innerHTML = localStorage.getItem("SPAK1A");
		document.getElementById("1B").innerHTML = localStorage.getItem("SPAK1B");
		document.getElementById("1C").innerHTML = localStorage.getItem("SPAK1C");
		document.getElementById("1D").innerHTML = localStorage.getItem("SPAK1D");
	}
	if ( r === 2) {
		document.getElementById("iframe").src = "SPAK/SPAK2.html";
		document.getElementById("2A").innerHTML = localStorage.getItem("SPAK2A");
		document.getElementById("2B").innerHTML = localStorage.getItem("SPAK2B");
		document.getElementById("2C").innerHTML = localStorage.getItem("SPAK2C");
		document.getElementById("2D").innerHTML = localStorage.getItem("SPAK2D");
	}
	if ( r === 3) {
		document.getElementById("iframe").src = "SPAK/SPAK3.html";
		document.getElementById("3A").innerHTML = localStorage.getItem("SPAK3A");
		document.getElementById("3B").innerHTML = localStorage.getItem("SPAK3B");
		document.getElementById("3C").innerHTML = localStorage.getItem("SPAK3C");
		document.getElementById("3D").innerHTML = localStorage.getItem("SPAK3D");
	}
	if ( r === 4) {
		document.getElementById("iframe").src = "SPAK/SPAK4.html";
		document.getElementById("4A").innerHTML = localStorage.getItem("SPAK4A");
		document.getElementById("4B").innerHTML = localStorage.getItem("SPAK4B");
		document.getElementById("4C").innerHTML = localStorage.getItem("SPAK4C");
		document.getElementById("4D").innerHTML = localStorage.getItem("SPAK4D");
	}
	if ( r === 5) {
		document.getElementById("iframe").src = "SPAK/SPAK5.html";
		document.getElementById("5A").innerHTML = localStorage.getItem("SPAK5A");
		document.getElementById("5B").innerHTML = localStorage.getItem("SPAK5B");
		document.getElementById("5C").innerHTML = localStorage.getItem("SPAK5C");
		document.getElementById("5D").innerHTML = localStorage.getItem("SPAK5D");
	}
	if ( r === 6) {
		document.getElementById("iframe").src = "SPAK/SPAK6.html";
		document.getElementById("6A").innerHTML = localStorage.getItem("SPAK6A");
		document.getElementById("6B").innerHTML = localStorage.getItem("SPAK6B");
		document.getElementById("6C").innerHTML = localStorage.getItem("SPAK6C");
		document.getElementById("6D").innerHTML = localStorage.getItem("SPAK6D");
	}
	if ( r === 7) {
		document.getElementById("iframe").src = "SPAK/SPAK7.html";
		document.getElementById("7A").innerHTML = localStorage.getItem("SPAK7A");
		document.getElementById("7B").innerHTML = localStorage.getItem("SPAK7B");
		document.getElementById("7C").innerHTML = localStorage.getItem("SPAK7C");
		document.getElementById("7D").innerHTML = localStorage.getItem("SPAK7D");
	}
	if ( r === 8) {
		document.getElementById("iframe").src = "SPAK/SPAK8.html";
		document.getElementById("8A").innerHTML = localStorage.getItem("SPAK8A");
		document.getElementById("8B").innerHTML = localStorage.getItem("SPAK8B");
		document.getElementById("8C").innerHTML = localStorage.getItem("SPAK8C");
		document.getElementById("8D").innerHTML = localStorage.getItem("SPAK8D");
	}
	if ( r === 9) {
		document.getElementById("iframe").src = "SPAK/SPAK9.html";
		document.getElementById("9A").innerHTML = localStorage.getItem("SPAK9A");
		document.getElementById("9B").innerHTML = localStorage.getItem("SPAK9B");
		document.getElementById("9C").innerHTML = localStorage.getItem("SPAK9C");
		document.getElementById("9D").innerHTML = localStorage.getItem("SPAK9D");
	}
	if ( r === 10) {
		document.getElementById("iframe").src = "SPAK/SPAK10.html";
		document.getElementById("10A").innerHTML = localStorage.getItem("SPAK10A");
		document.getElementById("10B").innerHTML = localStorage.getItem("SPAK10B");
		document.getElementById("10C").innerHTML = localStorage.getItem("SPAK10C");
		document.getElementById("10D").innerHTML = localStorage.getItem("SPAK10D");
	}
	if ( r === 11) {
		document.getElementById("iframe").src = "SPAK/SPAK11.html";
		document.getElementById("11A").innerHTML = localStorage.getItem("SPAK11A");
		document.getElementById("11B").innerHTML = localStorage.getItem("SPAK11B");
		document.getElementById("11C").innerHTML = localStorage.getItem("SPAK11C");
		document.getElementById("11D").innerHTML = localStorage.getItem("SPAK11D");
	}
	if ( r === 12) {
		document.getElementById("iframe").src = "SPAK/SPAK12.html";
		document.getElementById("12A").innerHTML = localStorage.getItem("SPAK12A");
		document.getElementById("12B").innerHTML = localStorage.getItem("SPAK12B");
		document.getElementById("12C").innerHTML = localStorage.getItem("SPAK12C");
		document.getElementById("12D").innerHTML = localStorage.getItem("SPAK12D");
	}
	if ( r === 13) {
		document.getElementById("iframe").src = "SPAK/SPAK13.html";
		document.getElementById("13A").innerHTML = localStorage.getItem("SPAK13A");
		document.getElementById("13B").innerHTML = localStorage.getItem("SPAK13B");
		document.getElementById("13C").innerHTML = localStorage.getItem("SPAK13C");
		document.getElementById("13D").innerHTML = localStorage.getItem("SPAK13D");
	}
	if ( r === 14) {
		document.getElementById("iframe").src = "SPAK/SPAK14.html";
		document.getElementById("14A").innerHTML = localStorage.getItem("SPAK14A");
		document.getElementById("14B").innerHTML = localStorage.getItem("SPAK14B");
		document.getElementById("14C").innerHTML = localStorage.getItem("SPAK14C");
		document.getElementById("14D").innerHTML = localStorage.getItem("SPAK14D");
	}
	if ( r === 15) {
		document.getElementById("iframe").src = "SPAK/SPAK15.html";
		document.getElementById("15A").innerHTML = localStorage.getItem("SPAK15A");
		document.getElementById("15B").innerHTML = localStorage.getItem("SPAK15B");
		document.getElementById("15C").innerHTML = localStorage.getItem("SPAK15C");
		document.getElementById("15D").innerHTML = localStorage.getItem("SPAK15D");
	}
	if ( r === 16) {
		document.getElementById("iframe").src = "SPAK/SPAK16.html";
		document.getElementById("16A").innerHTML = localStorage.getItem("SPAK16A");
		document.getElementById("16B").innerHTML = localStorage.getItem("SPAK16B");
		document.getElementById("16C").innerHTML = localStorage.getItem("SPAK16C");
		document.getElementById("16D").innerHTML = localStorage.getItem("SPAK16D");
	}
	if ( r === 17) {
		document.getElementById("iframe").src = "SPAK/SPAK17.html";
		document.getElementById("17A").innerHTML = localStorage.getItem("SPAK17A");
		document.getElementById("17B").innerHTML = localStorage.getItem("SPAK17B");
		document.getElementById("17C").innerHTML = localStorage.getItem("SPAK17C");
		document.getElementById("17D").innerHTML = localStorage.getItem("SPAK17D");
	}
	if ( r === 18) {
		document.getElementById("iframe").src = "SPAK/SPAK18.html";
		document.getElementById("18A").innerHTML = localStorage.getItem("SPAK18A");
		document.getElementById("18B").innerHTML = localStorage.getItem("SPAK18B");
		document.getElementById("18C").innerHTML = localStorage.getItem("SPAK18C");
		document.getElementById("18D").innerHTML = localStorage.getItem("SPAK18D");
	}
	if ( r === 19) {
		document.getElementById("iframe").src = "SPAK/SPAK19.html";
		document.getElementById("19A").innerHTML = localStorage.getItem("SPAK19A");
		document.getElementById("19B").innerHTML = localStorage.getItem("SPAK19B");
		document.getElementById("19C").innerHTML = localStorage.getItem("SPAK19C");
		document.getElementById("19D").innerHTML = localStorage.getItem("SPAK19D");
	}
	if ( r === 20) {
		document.getElementById("iframe").src = "SPAK/SPAK20.html";
		document.getElementById("20A").innerHTML = localStorage.getItem("SPAK20A");
		document.getElementById("20B").innerHTML = localStorage.getItem("SPAK20B");
		document.getElementById("20C").innerHTML = localStorage.getItem("SPAK20C");
		document.getElementById("20D").innerHTML = localStorage.getItem("SPAK20D");
	}
	if ( r === 21) {
		document.getElementById("iframe").src = "SPAK/SPAK21.html";
		document.getElementById("21A").innerHTML = localStorage.getItem("SPAK21A");
		document.getElementById("21B").innerHTML = localStorage.getItem("SPAK21B");
		document.getElementById("21C").innerHTML = localStorage.getItem("SPAK21C");
		document.getElementById("21D").innerHTML = localStorage.getItem("SPAK21D");
	}
	if ( r === 22) {
		document.getElementById("iframe").src = "SPAK/SPAK22.html";
		document.getElementById("22A").innerHTML = localStorage.getItem("SPAK22A");
		document.getElementById("22B").innerHTML = localStorage.getItem("SPAK22B");
		document.getElementById("22C").innerHTML = localStorage.getItem("SPAK22C");
		document.getElementById("22D").innerHTML = localStorage.getItem("SPAK22D");
	}
	if ( r === 23) {
		document.getElementById("iframe").src = "SPAK/SPAK23.html";
		document.getElementById("23A").innerHTML = localStorage.getItem("SPAK23A");
		document.getElementById("23B").innerHTML = localStorage.getItem("SPAK23B");
		document.getElementById("23C").innerHTML = localStorage.getItem("SPAK23C");
		document.getElementById("23D").innerHTML = localStorage.getItem("SPAK23D");
	}
	if ( r === 24) {
		document.getElementById("iframe").src = "SPAK/SPAK24.html";
		document.getElementById("24A").innerHTML = localStorage.getItem("SPAK24A");
		document.getElementById("24B").innerHTML = localStorage.getItem("SPAK24B");
		document.getElementById("24C").innerHTML = localStorage.getItem("SPAK24C");
		document.getElementById("24D").innerHTML = localStorage.getItem("SPAK24D");
	}
	if ( r === 25) {
		document.getElementById("iframe").src = "SPAK/SPAK25.html";
		document.getElementById("25A").innerHTML = localStorage.getItem("SPAK25A");
		document.getElementById("25B").innerHTML = localStorage.getItem("SPAK25B");
		document.getElementById("25C").innerHTML = localStorage.getItem("SPAK25C");
		document.getElementById("25D").innerHTML = localStorage.getItem("SPAK25D");
	}
	if ( r === 26) {
		document.getElementById("iframe").src = "SPAK/SPAK26.html";
		document.getElementById("26A").innerHTML = localStorage.getItem("SPAK26A");
		document.getElementById("26B").innerHTML = localStorage.getItem("SPAK26B");
		document.getElementById("26C").innerHTML = localStorage.getItem("SPAK26C");
		document.getElementById("26D").innerHTML = localStorage.getItem("SPAK26D");
	}
	if ( r === 27) {
		document.getElementById("iframe").src = "SPAK/SPAK27.html";
		document.getElementById("27A").innerHTML = localStorage.getItem("SPAK27A");
		document.getElementById("27B").innerHTML = localStorage.getItem("SPAK27B");
		document.getElementById("27C").innerHTML = localStorage.getItem("SPAK27C");
		document.getElementById("27D").innerHTML = localStorage.getItem("SPAK27D");
	}
	if ( r === 28) {
		document.getElementById("iframe").src = "SPAK/SPAK28.html";
		document.getElementById("28A").innerHTML = localStorage.getItem("SPAK28A");
		document.getElementById("28B").innerHTML = localStorage.getItem("SPAK28B");
		document.getElementById("28C").innerHTML = localStorage.getItem("SPAK28C");
		document.getElementById("28D").innerHTML = localStorage.getItem("SPAK28D");
	}
	if ( r === 29) {
		document.getElementById("iframe").src = "SPAK/SPAK29.html";
		document.getElementById("29A").innerHTML = localStorage.getItem("SPAK29A");
		document.getElementById("29B").innerHTML = localStorage.getItem("SPAK29B");
		document.getElementById("29C").innerHTML = localStorage.getItem("SPAK29C");
		document.getElementById("29D").innerHTML = localStorage.getItem("SPAK29D");
	}
	if ( r === 30) {
		document.getElementById("iframe").src = "SPAK/SPAK30.html";
		document.getElementById("30A").innerHTML = localStorage.getItem("SPAK30A");
		document.getElementById("30B").innerHTML = localStorage.getItem("SPAK30B");
		document.getElementById("30C").innerHTML = localStorage.getItem("SPAK30C");
		document.getElementById("30D").innerHTML = localStorage.getItem("SPAK30D");
	}
		if ( r === 31) {
		document.getElementById("iframe").src = "SPAK/SPAK31.html";
		document.getElementById("31A").innerHTML = localStorage.getItem("SPAK31A");
		document.getElementById("31B").innerHTML = localStorage.getItem("SPAK31B");
		document.getElementById("31C").innerHTML = localStorage.getItem("SPAK31C");
		document.getElementById("31D").innerHTML = localStorage.getItem("SPAK31D");
	}
	if ( r === 32) {
		document.getElementById("iframe").src = "SPAK/SPAK32.html";
		document.getElementById("32A").innerHTML = localStorage.getItem("SPAK32A");
		document.getElementById("32B").innerHTML = localStorage.getItem("SPAK32B");
		document.getElementById("32C").innerHTML = localStorage.getItem("SPAK32C");
		document.getElementById("32D").innerHTML = localStorage.getItem("SPAK32D");
	}
	if ( r === 33) {
		document.getElementById("iframe").src = "SPAK/SPAK33.html";
		document.getElementById("33A").innerHTML = localStorage.getItem("SPAK33A");
		document.getElementById("33B").innerHTML = localStorage.getItem("SPAK33B");
		document.getElementById("33C").innerHTML = localStorage.getItem("SPAK33C");
		document.getElementById("33D").innerHTML = localStorage.getItem("SPAK33D");
	}if ( r === 34) {
		document.getElementById("iframe").src = "SPAK/SPAK34.html";
		document.getElementById("34A").innerHTML = localStorage.getItem("SPAK34A");
		document.getElementById("34B").innerHTML = localStorage.getItem("SPAK34B");
		document.getElementById("34C").innerHTML = localStorage.getItem("SPAK34C");
		document.getElementById("34D").innerHTML = localStorage.getItem("SPAK34D");
	}
	if ( r === 35) {
		document.getElementById("iframe").src = "SPAK/SPAK35.html";
		document.getElementById("35A").innerHTML = localStorage.getItem("SPAK35A");
		document.getElementById("35B").innerHTML = localStorage.getItem("SPAK35B");
		document.getElementById("35C").innerHTML = localStorage.getItem("SPAK35C");
		document.getElementById("35D").innerHTML = localStorage.getItem("SPAK35D");
	}
	if ( r === 36) {
		document.getElementById("iframe").src = "SPAK/SPAK36.html";
		document.getElementById("36A").innerHTML = localStorage.getItem("SPAK36A");
		document.getElementById("36B").innerHTML = localStorage.getItem("SPAK36B");
		document.getElementById("36C").innerHTML = localStorage.getItem("SPAK36C");
		document.getElementById("36D").innerHTML = localStorage.getItem("SPAK36D");
	}
	if ( r === 37) {
		document.getElementById("iframe").src = "SPAK/SPAK37.html";
		document.getElementById("37A").innerHTML = localStorage.getItem("SPAK37A");
		document.getElementById("37B").innerHTML = localStorage.getItem("SPAK37B");
		document.getElementById("37C").innerHTML = localStorage.getItem("SPAK37C");
		document.getElementById("37D").innerHTML = localStorage.getItem("SPAK37D");
	}
	if ( r === 38) {
		document.getElementById("iframe").src = "SPAK/SPAK38.html";
		document.getElementById("38A").innerHTML = localStorage.getItem("SPAK38A");
		document.getElementById("38B").innerHTML = localStorage.getItem("SPAK38B");
		document.getElementById("38C").innerHTML = localStorage.getItem("SPAK38C");
		document.getElementById("38D").innerHTML = localStorage.getItem("SPAK38D");
	}
	if ( r === 39) {
		document.getElementById("iframe").src = "SPAK/SPAK39.html";
		document.getElementById("39A").innerHTML = localStorage.getItem("SPAK39A");
		document.getElementById("39B").innerHTML = localStorage.getItem("SPAK39B");
		document.getElementById("39C").innerHTML = localStorage.getItem("SPAK39C");
		document.getElementById("39D").innerHTML = localStorage.getItem("SPAK39D");
	}
	if ( r === 40) {
		document.getElementById("iframe").src = "SPAK/SPAK40.html";
		document.getElementById("40A").innerHTML = localStorage.getItem("SPAK40A");
		document.getElementById("40B").innerHTML = localStorage.getItem("SPAK40B");
		document.getElementById("40C").innerHTML = localStorage.getItem("SPAK40C");
		document.getElementById("40D").innerHTML = localStorage.getItem("SPAK40D");
	}
	if ( r === 41) {
		document.getElementById("iframe").src = "SPAK/SPAK41.html";
		document.getElementById("41A").innerHTML = localStorage.getItem("SPAK41A");
		document.getElementById("41B").innerHTML = localStorage.getItem("SPAK41B");
		document.getElementById("41C").innerHTML = localStorage.getItem("SPAK41C");
		document.getElementById("41D").innerHTML = localStorage.getItem("SPAK41D");
	}
	if ( r === 42) {
		document.getElementById("iframe").src = "SPAK/SPAK42.html";
		document.getElementById("42A").innerHTML = localStorage.getItem("SPAK42A");
		document.getElementById("42B").innerHTML = localStorage.getItem("SPAK42B");
		document.getElementById("42C").innerHTML = localStorage.getItem("SPAK42C");
		document.getElementById("42D").innerHTML = localStorage.getItem("SPAK42D");
	}
	if ( r === 43) {
		document.getElementById("iframe").src = "SPAK/SPAK43.html";
		document.getElementById("43A").innerHTML = localStorage.getItem("SPAK43A");
		document.getElementById("43B").innerHTML = localStorage.getItem("SPAK43B");
		document.getElementById("43C").innerHTML = localStorage.getItem("SPAK43C");
		document.getElementById("43D").innerHTML = localStorage.getItem("SPAK43D");
	}
	if ( r === 44) {
		document.getElementById("iframe").src = "SPAK/SPAK44.html";
		document.getElementById("44A").innerHTML = localStorage.getItem("SPAK44A");
		document.getElementById("44B").innerHTML = localStorage.getItem("SPAK44B");
		document.getElementById("44C").innerHTML = localStorage.getItem("SPAK44C");
		document.getElementById("44D").innerHTML = localStorage.getItem("SPAK44D");
	}
	if ( r === 45) {
		document.getElementById("iframe").src = "SPAK/SPAK45.html";
		document.getElementById("45A").innerHTML = localStorage.getItem("SPAK45A");
		document.getElementById("45B").innerHTML = localStorage.getItem("SPAK45B");
		document.getElementById("45C").innerHTML = localStorage.getItem("SPAK45C");
		document.getElementById("45D").innerHTML = localStorage.getItem("SPAK45D");
	}
	if ( r === 46) {
		document.getElementById("iframe").src = "SPAK/SPAK46.html";
		document.getElementById("46A").innerHTML = localStorage.getItem("SPAK46A");
		document.getElementById("46B").innerHTML = localStorage.getItem("SPAK46B");
		document.getElementById("46C").innerHTML = localStorage.getItem("SPAK46C");
		document.getElementById("46D").innerHTML = localStorage.getItem("SPAK46D");
	}
	if ( r === 47) {
		document.getElementById("iframe").src = "SPAK/SPAK47.html";
		document.getElementById("47A").innerHTML = localStorage.getItem("SPAK47A");
		document.getElementById("47B").innerHTML = localStorage.getItem("SPAK47B");
		document.getElementById("47C").innerHTML = localStorage.getItem("SPAK47C");
		document.getElementById("47D").innerHTML = localStorage.getItem("SPAK47D");
	}
	if ( r === 48) {
		document.getElementById("iframe").src = "SPAK/SPAK48.html";
		document.getElementById("48A").innerHTML = localStorage.getItem("SPAK48A");
		document.getElementById("48B").innerHTML = localStorage.getItem("SPAK48B");
		document.getElementById("48C").innerHTML = localStorage.getItem("SPAK48C");
		document.getElementById("48D").innerHTML = localStorage.getItem("SPAK48D");
	}
	if ( r === 49) {
		document.getElementById("iframe").src = "SPAK/SPAK49.html";
		document.getElementById("49A").innerHTML = localStorage.getItem("SPAK49A");
		document.getElementById("49B").innerHTML = localStorage.getItem("SPAK49B");
		document.getElementById("49C").innerHTML = localStorage.getItem("SPAK49C");
		document.getElementById("49D").innerHTML = localStorage.getItem("SPAK49D");
	}
	if ( r === 50) {
		document.getElementById("iframe").src = "SPAK/SPAK50.html";
		document.getElementById("50A").innerHTML = localStorage.getItem("SPAK50A");
		document.getElementById("50B").innerHTML = localStorage.getItem("SPAK50B");
		document.getElementById("50C").innerHTML = localStorage.getItem("SPAK50C");
		document.getElementById("50D").innerHTML = localStorage.getItem("SPAK50D");
	}
	if ( r === 51) {
		document.getElementById("iframe").src = "SPAK/SPAK51.html";
		document.getElementById("51A").innerHTML = localStorage.getItem("SPAK51A");
		document.getElementById("51B").innerHTML = localStorage.getItem("SPAK51B");
		document.getElementById("51C").innerHTML = localStorage.getItem("SPAK51C");
		document.getElementById("51D").innerHTML = localStorage.getItem("SPAK51D");
	}
	if ( r === 52) {
		document.getElementById("iframe").src = "SPAK/SPAK52.html";
		document.getElementById("52A").innerHTML = localStorage.getItem("SPAK52A");
		document.getElementById("52B").innerHTML = localStorage.getItem("SPAK52B");
		document.getElementById("52C").innerHTML = localStorage.getItem("SPAK52C");
		document.getElementById("52D").innerHTML = localStorage.getItem("SPAK52D");
	}
	if ( r === 53) {
		document.getElementById("iframe").src = "SPAK/SPAK53.html";
		document.getElementById("53A").innerHTML = localStorage.getItem("SPAK53A");
		document.getElementById("53B").innerHTML = localStorage.getItem("SPAK53B");
		document.getElementById("53C").innerHTML = localStorage.getItem("SPAK53C");
		document.getElementById("53D").innerHTML = localStorage.getItem("SPAK53D");
	}
	if ( r === 54) {
		document.getElementById("iframe").src = "SPAK/SPAK54.html";
		document.getElementById("54A").innerHTML = localStorage.getItem("SPAK54A");
		document.getElementById("54B").innerHTML = localStorage.getItem("SPAK54B");
		document.getElementById("54C").innerHTML = localStorage.getItem("SPAK54C");
		document.getElementById("54D").innerHTML = localStorage.getItem("SPAK54D");
	}
	if ( r === 55) {
		document.getElementById("iframe").src = "SPAK/SPAK55.html";
		document.getElementById("55A").innerHTML = localStorage.getItem("SPAK55A");
		document.getElementById("55B").innerHTML = localStorage.getItem("SPAK55B");
		document.getElementById("55C").innerHTML = localStorage.getItem("SPAK55C");
		document.getElementById("55D").innerHTML = localStorage.getItem("SPAK55D");
	}
	if ( r === 56) {
		document.getElementById("iframe").src = "SPAK/SPAK56.html";
		document.getElementById("56A").innerHTML = localStorage.getItem("SPAK56A");
		document.getElementById("56B").innerHTML = localStorage.getItem("SPAK56B");
		document.getElementById("56C").innerHTML = localStorage.getItem("SPAK56C");
		document.getElementById("56D").innerHTML = localStorage.getItem("SPAK56D");
	}
	if ( r === 57) {
		document.getElementById("iframe").src = "SPAK/SPAK57.html";
		document.getElementById("57A").innerHTML = localStorage.getItem("SPAK57A");
		document.getElementById("57B").innerHTML = localStorage.getItem("SPAK57B");
		document.getElementById("57C").innerHTML = localStorage.getItem("SPAK57C");
		document.getElementById("57D").innerHTML = localStorage.getItem("SPAK57D");
	}
	if ( r === 58) {
		document.getElementById("iframe").src = "SPAK/SPAK58.html";
		document.getElementById("58A").innerHTML = localStorage.getItem("SPAK58A");
		document.getElementById("58B").innerHTML = localStorage.getItem("SPAK58B");
		document.getElementById("58C").innerHTML = localStorage.getItem("SPAK58C");
		document.getElementById("58D").innerHTML = localStorage.getItem("SPAK58D");
	}
	if ( r === 59) {
		document.getElementById("iframe").src = "SPAK/SPAK59.html";
		document.getElementById("59A").innerHTML = localStorage.getItem("SPAK59A");
		document.getElementById("59B").innerHTML = localStorage.getItem("SPAK59B");
		document.getElementById("59C").innerHTML = localStorage.getItem("SPAK59C");
		document.getElementById("59D").innerHTML = localStorage.getItem("SPAK59D");
	}
	if ( r === 60) {
		document.getElementById("iframe").src = "SPAK/SPAK60.html";
		document.getElementById("60A").innerHTML = localStorage.getItem("SPAK60A");
		document.getElementById("60B").innerHTML = localStorage.getItem("SPAK60B");
		document.getElementById("60C").innerHTML = localStorage.getItem("SPAK60C");
		document.getElementById("60D").innerHTML = localStorage.getItem("SPAK60D");
	}
	if ( r === 61) {
		document.getElementById("iframe").src = "SPAK/SPAK61.html";
		document.getElementById("61A").innerHTML = localStorage.getItem("SPAK61A");
		document.getElementById("61B").innerHTML = localStorage.getItem("SPAK61B");
		document.getElementById("61C").innerHTML = localStorage.getItem("SPAK61C");
		document.getElementById("61D").innerHTML = localStorage.getItem("SPAK61D");
	}if ( r === 62) {
		document.getElementById("iframe").src = "SPAK/SPAK62.html";
		document.getElementById("62A").innerHTML = localStorage.getItem("SPAK62A");
		document.getElementById("62B").innerHTML = localStorage.getItem("SPAK62B");
		document.getElementById("62C").innerHTML = localStorage.getItem("SPAK62C");
		document.getElementById("62D").innerHTML = localStorage.getItem("SPAK62D");
	}if ( r === 63) {
		document.getElementById("iframe").src = "SPAK/SPAK63.html";
		document.getElementById("63A").innerHTML = localStorage.getItem("SPAK63A");
		document.getElementById("63B").innerHTML = localStorage.getItem("SPAK63B");
		document.getElementById("63C").innerHTML = localStorage.getItem("SPAK63C");
		document.getElementById("63D").innerHTML = localStorage.getItem("SPAK63D");
	}if ( r === 64) {
		document.getElementById("iframe").src = "SPAK/SPAK64.html";
		document.getElementById("64A").innerHTML = localStorage.getItem("SPAK64A");
		document.getElementById("64B").innerHTML = localStorage.getItem("SPAK64B");
		document.getElementById("64C").innerHTML = localStorage.getItem("SPAK64C");
		document.getElementById("64D").innerHTML = localStorage.getItem("SPAK64D");
	}if ( r === 65) {
		document.getElementById("iframe").src = "SPAK/SPAK65.html";
		document.getElementById("65A").innerHTML = localStorage.getItem("SPAK65A");
		document.getElementById("65B").innerHTML = localStorage.getItem("SPAK65B");
		document.getElementById("65C").innerHTML = localStorage.getItem("SPAK65C");
		document.getElementById("65D").innerHTML = localStorage.getItem("SPAK65D");
	}if ( r === 66) {
		document.getElementById("iframe").src = "SPAK/SPAK66.html";
		document.getElementById("66A").innerHTML = localStorage.getItem("SPAK66A");
		document.getElementById("66B").innerHTML = localStorage.getItem("SPAK66B");
		document.getElementById("66C").innerHTML = localStorage.getItem("SPAK66C");
		document.getElementById("66D").innerHTML = localStorage.getItem("SPAK66D");
	}if ( r === 67) {
		document.getElementById("iframe").src = "SPAK/SPAK67.html";
		document.getElementById("67A").innerHTML = localStorage.getItem("SPAK67A");
		document.getElementById("67B").innerHTML = localStorage.getItem("SPAK67B");
		document.getElementById("67C").innerHTML = localStorage.getItem("SPAK67C");
		document.getElementById("67D").innerHTML = localStorage.getItem("SPAK67D");
	}if ( r === 68) {
		document.getElementById("iframe").src = "SPAK/SPAK68.html";
		document.getElementById("68A").innerHTML = localStorage.getItem("SPAK68A");
		document.getElementById("68B").innerHTML = localStorage.getItem("SPAK68B");
		document.getElementById("68C").innerHTML = localStorage.getItem("SPAK68C");
		document.getElementById("68D").innerHTML = localStorage.getItem("SPAK68D");
	}if ( r === 69) {
		document.getElementById("iframe").src = "SPAK/SPAK69.html";
		document.getElementById("69A").innerHTML = localStorage.getItem("SPAK69A");
		document.getElementById("69B").innerHTML = localStorage.getItem("SPAK69B");
		document.getElementById("69C").innerHTML = localStorage.getItem("SPAK69C");
		document.getElementById("69D").innerHTML = localStorage.getItem("SPAK69D");
	}if ( r === 70) {
		document.getElementById("iframe").src = "SPAK/SPAK70.html";
		document.getElementById("70A").innerHTML = localStorage.getItem("SPAK70A");
		document.getElementById("70B").innerHTML = localStorage.getItem("SPAK70B");
		document.getElementById("70C").innerHTML = localStorage.getItem("SPAK70C");
		document.getElementById("70D").innerHTML = localStorage.getItem("SPAK70D");
	}if ( r === 71) {
		document.getElementById("iframe").src = "SPAK/SPAK71.html";
		document.getElementById("71A").innerHTML = localStorage.getItem("SPAK71A");
		document.getElementById("71B").innerHTML = localStorage.getItem("SPAK71B");
		document.getElementById("71C").innerHTML = localStorage.getItem("SPAK71C");
		document.getElementById("71D").innerHTML = localStorage.getItem("SPAK71D");
	}if ( r === 72) {
		document.getElementById("iframe").src = "SPAK/SPAK72.html";
		document.getElementById("72A").innerHTML = localStorage.getItem("SPAK72A");
		document.getElementById("72B").innerHTML = localStorage.getItem("SPAK72B");
		document.getElementById("72C").innerHTML = localStorage.getItem("SPAK72C");
		document.getElementById("72D").innerHTML = localStorage.getItem("SPAK72D");
	}if ( r === 73) {
		document.getElementById("iframe").src = "SPAK/SPAK73.html";
		document.getElementById("73A").innerHTML = localStorage.getItem("SPAK73A");
		document.getElementById("73B").innerHTML = localStorage.getItem("SPAK73B");
		document.getElementById("73C").innerHTML = localStorage.getItem("SPAK73C");
		document.getElementById("73D").innerHTML = localStorage.getItem("SPAK73D");
	}if ( r === 74) {
		document.getElementById("iframe").src = "SPAK/SPAK74.html";
		document.getElementById("74A").innerHTML = localStorage.getItem("SPAK74A");
		document.getElementById("74B").innerHTML = localStorage.getItem("SPAK74B");
		document.getElementById("74C").innerHTML = localStorage.getItem("SPAK74C");
		document.getElementById("74D").innerHTML = localStorage.getItem("SPAK74D");
	}if ( r === 75) {
		document.getElementById("iframe").src = "SPAK/SPAK75.html";
		document.getElementById("75A").innerHTML = localStorage.getItem("SPAK75A");
		document.getElementById("75B").innerHTML = localStorage.getItem("SPAK75B");
		document.getElementById("75C").innerHTML = localStorage.getItem("SPAK75C");
		document.getElementById("75D").innerHTML = localStorage.getItem("SPAK75D");
	}if ( r === 76) {
		document.getElementById("iframe").src = "SPAK/SPAK76.html";
		document.getElementById("76A").innerHTML = localStorage.getItem("SPAK76A");
		document.getElementById("76B").innerHTML = localStorage.getItem("SPAK76B");
		document.getElementById("76C").innerHTML = localStorage.getItem("SPAK76C");
		document.getElementById("76D").innerHTML = localStorage.getItem("SPAK76D");
	}if ( r === 77) {
		document.getElementById("iframe").src = "SPAK/SPAK77.html";
		document.getElementById("77A").innerHTML = localStorage.getItem("SPAK77A");
		document.getElementById("77B").innerHTML = localStorage.getItem("SPAK77B");
		document.getElementById("77C").innerHTML = localStorage.getItem("SPAK77C");
		document.getElementById("77D").innerHTML = localStorage.getItem("SPAK77D");
	}if ( r === 78) {
		document.getElementById("iframe").src = "SPAK/SPAK78.html";
		document.getElementById("78A").innerHTML = localStorage.getItem("SPAK78A");
		document.getElementById("78B").innerHTML = localStorage.getItem("SPAK78B");
		document.getElementById("78C").innerHTML = localStorage.getItem("SPAK78C");
		document.getElementById("78D").innerHTML = localStorage.getItem("SPAK78D");
	}if ( r === 79) {
		document.getElementById("iframe").src = "SPAK/SPAK79.html";
		document.getElementById("79A").innerHTML = localStorage.getItem("SPAK79A");
		document.getElementById("79B").innerHTML = localStorage.getItem("SPAK79B");
		document.getElementById("79C").innerHTML = localStorage.getItem("SPAK79C");
		document.getElementById("79D").innerHTML = localStorage.getItem("SPAK79D");
	}if ( r === 80) {
		document.getElementById("iframe").src = "SPAK/SPAK80.html";
		document.getElementById("80A").innerHTML = localStorage.getItem("SPAK80A");
		document.getElementById("80B").innerHTML = localStorage.getItem("SPAK80B");
		document.getElementById("80C").innerHTML = localStorage.getItem("SPAK80C");
		document.getElementById("80D").innerHTML = localStorage.getItem("SPAK80D");
	}if ( r === 81) {
		document.getElementById("iframe").src = "SPAK/SPAK81.html";
		document.getElementById("81A").innerHTML = localStorage.getItem("SPAK81A");
		document.getElementById("81B").innerHTML = localStorage.getItem("SPAK81B");
		document.getElementById("81C").innerHTML = localStorage.getItem("SPAK81C");
		document.getElementById("81D").innerHTML = localStorage.getItem("SPAK81D");
	}if ( r === 82) {
		document.getElementById("iframe").src = "SPAK/SPAK82.html";
		document.getElementById("82A").innerHTML = localStorage.getItem("SPAK82A");
		document.getElementById("82B").innerHTML = localStorage.getItem("SPAK82B");
		document.getElementById("82C").innerHTML = localStorage.getItem("SPAK82C");
		document.getElementById("82D").innerHTML = localStorage.getItem("SPAK82D");
	}if ( r === 83) {
		document.getElementById("iframe").src = "SPAK/SPAK83.html";
		document.getElementById("83A").innerHTML = localStorage.getItem("SPAK83A");
		document.getElementById("83B").innerHTML = localStorage.getItem("SPAK83B");
		document.getElementById("83C").innerHTML = localStorage.getItem("SPAK83C");
		document.getElementById("83D").innerHTML = localStorage.getItem("SPAK83D");
	}if ( r === 84) {
		document.getElementById("iframe").src = "SPAK/SPAK84.html";
		document.getElementById("84A").innerHTML = localStorage.getItem("SPAK84A");
		document.getElementById("84B").innerHTML = localStorage.getItem("SPAK84B");
		document.getElementById("84C").innerHTML = localStorage.getItem("SPAK84C");
		document.getElementById("84D").innerHTML = localStorage.getItem("SPAK84D");
	}if ( r === 85) {
		document.getElementById("iframe").src = "SPAK/SPAK85.html";
		document.getElementById("85A").innerHTML = localStorage.getItem("SPAK85A");
		document.getElementById("85B").innerHTML = localStorage.getItem("SPAK85B");
		document.getElementById("85C").innerHTML = localStorage.getItem("SPAK85C");
		document.getElementById("85D").innerHTML = localStorage.getItem("SPAK85D");
	}if ( r === 86) {
		document.getElementById("iframe").src = "SPAK/SPAK86.html";
		document.getElementById("86A").innerHTML = localStorage.getItem("SPAK86A");
		document.getElementById("86B").innerHTML = localStorage.getItem("SPAK86B");
		document.getElementById("86C").innerHTML = localStorage.getItem("SPAK86C");
		document.getElementById("86D").innerHTML = localStorage.getItem("SPAK86D");
	}if ( r === 87) {
		document.getElementById("iframe").src = "SPAK/SPAK87.html";
		document.getElementById("87A").innerHTML = localStorage.getItem("SPAK87A");
		document.getElementById("87B").innerHTML = localStorage.getItem("SPAK87B");
		document.getElementById("87C").innerHTML = localStorage.getItem("SPAK87C");
		document.getElementById("87D").innerHTML = localStorage.getItem("SPAK87D");
	}if ( r === 88) {
		document.getElementById("iframe").src = "SPAK/SPAK88.html";
		document.getElementById("88A").innerHTML = localStorage.getItem("SPAK88A");
		document.getElementById("88B").innerHTML = localStorage.getItem("SPAK88B");
		document.getElementById("88C").innerHTML = localStorage.getItem("SPAK88C");
		document.getElementById("88D").innerHTML = localStorage.getItem("SPAK88D");
	}if ( r === 89) {
		document.getElementById("iframe").src = "SPAK/SPAK89.html";
		document.getElementById("89A").innerHTML = localStorage.getItem("SPAK89A");
		document.getElementById("89B").innerHTML = localStorage.getItem("SPAK89B");
		document.getElementById("89C").innerHTML = localStorage.getItem("SPAK89C");
		document.getElementById("89D").innerHTML = localStorage.getItem("SPAK89D");
	}if ( r === 90) {
		document.getElementById("iframe").src = "SPAK/SPAK90.html";
		document.getElementById("90A").innerHTML = localStorage.getItem("SPAK90A");
		document.getElementById("90B").innerHTML = localStorage.getItem("SPAK90B");
		document.getElementById("90C").innerHTML = localStorage.getItem("SPAK90C");
		document.getElementById("90D").innerHTML = localStorage.getItem("SPAK90D");
	}if ( r === 91) {
		document.getElementById("iframe").src = "SPAK/SPAK91.html";
		document.getElementById("91A").innerHTML = localStorage.getItem("SPAK91A");
		document.getElementById("91B").innerHTML = localStorage.getItem("SPAK91B");
		document.getElementById("91C").innerHTML = localStorage.getItem("SPAK91C");
		document.getElementById("91D").innerHTML = localStorage.getItem("SPAK91D");
	}if ( r === 92) {
		document.getElementById("iframe").src = "SPAK/SPAK92.html";
		document.getElementById("92A").innerHTML = localStorage.getItem("SPAK92A");
		document.getElementById("92B").innerHTML = localStorage.getItem("SPAK92B");
		document.getElementById("92C").innerHTML = localStorage.getItem("SPAK92C");
		document.getElementById("92D").innerHTML = localStorage.getItem("SPAK92D");
	}if ( r === 93) {
		document.getElementById("iframe").src = "SPAK/SPAK93.html";
		document.getElementById("93A").innerHTML = localStorage.getItem("SPAK93A");
		document.getElementById("93B").innerHTML = localStorage.getItem("SPAK93B");
		document.getElementById("93C").innerHTML = localStorage.getItem("SPAK93C");
		document.getElementById("93D").innerHTML = localStorage.getItem("SPAK93D");
	}if ( r === 94) {
		document.getElementById("iframe").src = "SPAK/SPAK94.html";
		document.getElementById("94A").innerHTML = localStorage.getItem("SPAK94A");
		document.getElementById("94B").innerHTML = localStorage.getItem("SPAK94B");
		document.getElementById("94C").innerHTML = localStorage.getItem("SPAK94C");
		document.getElementById("94D").innerHTML = localStorage.getItem("SPAK94D");
	}if ( r === 95) {
		document.getElementById("iframe").src = "SPAK/SPAK95.html";
		document.getElementById("95A").innerHTML = localStorage.getItem("SPAK95A");
		document.getElementById("95B").innerHTML = localStorage.getItem("SPAK95B");
		document.getElementById("95C").innerHTML = localStorage.getItem("SPAK95C");
		document.getElementById("95D").innerHTML = localStorage.getItem("SPAK95D");
	}if ( r === 96) {
		document.getElementById("iframe").src = "SPAK/SPAK96.html";
		document.getElementById("96A").innerHTML = localStorage.getItem("SPAK96A");
		document.getElementById("96B").innerHTML = localStorage.getItem("SPAK96B");
		document.getElementById("96C").innerHTML = localStorage.getItem("SPAK96C");
		document.getElementById("96D").innerHTML = localStorage.getItem("SPAK96D");
	}if ( r === 97) {
		document.getElementById("iframe").src = "SPAK/SPAK97.html";
		document.getElementById("97A").innerHTML = localStorage.getItem("SPAK97A");
		document.getElementById("97B").innerHTML = localStorage.getItem("SPAK97B");
		document.getElementById("97C").innerHTML = localStorage.getItem("SPAK97C");
		document.getElementById("97D").innerHTML = localStorage.getItem("SPAK97D");
	}if ( r === 98) {
		document.getElementById("iframe").src = "SPAK/SPAK98.html";
		document.getElementById("98A").innerHTML = localStorage.getItem("SPAK98A");
		document.getElementById("98B").innerHTML = localStorage.getItem("SPAK98B");
		document.getElementById("98C").innerHTML = localStorage.getItem("SPAK98C");
		document.getElementById("98D").innerHTML = localStorage.getItem("SPAK98D");
	}if ( r === 99) {
		document.getElementById("iframe").src = "SPAK/SPAK99.html";
		document.getElementById("99A").innerHTML = localStorage.getItem("SPAK99A");
		document.getElementById("99B").innerHTML = localStorage.getItem("SPAK99B");
		document.getElementById("99C").innerHTML = localStorage.getItem("SPAK99C");
		document.getElementById("99D").innerHTML = localStorage.getItem("SPAK99D");
	}if ( r === 100) {
		document.getElementById("iframe").src = "SPAK/SPAK100.html";
		document.getElementById("100A").innerHTML = localStorage.getItem("SPAK100A");
		document.getElementById("100B").innerHTML = localStorage.getItem("SPAK100B");
		document.getElementById("100C").innerHTML = localStorage.getItem("SPAK100C");
		document.getElementById("100D").innerHTML = localStorage.getItem("SPAK100D");
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
function SPAKOption() {
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
}
if (r === 31) {
let a31 = document.getElementById("A").checked;
let b31 = document.getElementById("B").checked;
let c31 = document.getElementById("C").checked;
let d31 = document.getElementById("D").checked;
if(a31 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("31", "A");
}
if(b31 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("31", "B");
}
if(c31 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("31", "C");
}
if(d31 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("31", "D");
}  
}
if (r === 32) {
let a32 = document.getElementById("A").checked;
let b32 = document.getElementById("B").checked;
let c32 = document.getElementById("C").checked;
let d32 = document.getElementById("D").checked;
if(a32 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("32", "A");
}
if(b32 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("32", "B");
}
if(c32 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("32", "C");
}
if(d32 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("32", "D");
}  
}
if (r === 33) {
let a33 = document.getElementById("A").checked;
let b33 = document.getElementById("B").checked;
let c33 = document.getElementById("C").checked;
let d33 = document.getElementById("D").checked;
if(a33 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("33", "A");
}
if(b33 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("33", "B");
}
if(c33 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("33", "C");
}
if(d33 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("33", "D");
}  
}
if (r === 34) {
let a34 = document.getElementById("A").checked;
let b34 = document.getElementById("B").checked;
let c34 = document.getElementById("C").checked;
let d34 = document.getElementById("D").checked;
if(a34 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("34", "A");
}
if(b34 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("34", "B");
}
if(c34 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("34", "C");
}
if(d34 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("34", "D");
}  
}
if (r === 35) {
let a35 = document.getElementById("A").checked;
let b35 = document.getElementById("B").checked;
let c35 = document.getElementById("C").checked;
let d35 = document.getElementById("D").checked;
if(a35 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("35", "A");
}
if(b35 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("35", "B");
}
if(c35 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("35", "C");
}
if(d35 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("35", "D");
}  
}
if (r === 36) {
let a36 = document.getElementById("A").checked;
let b36 = document.getElementById("B").checked;
let c36 = document.getElementById("C").checked;
let d36 = document.getElementById("D").checked;
if(a36 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("36", "A");
}
if(b36 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("36", "B");
}
if(c36 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("36", "C");
}
if(d36 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("36", "D");
}  
}
if (r === 37) {
let a37 = document.getElementById("A").checked;
let b37 = document.getElementById("B").checked;
let c37 = document.getElementById("C").checked;
let d37 = document.getElementById("D").checked;
if(a37 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("37", "A");
}
if(b37 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("37", "B");
}
if(c37 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("37", "C");
}
if(d37 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("37", "D");
}  
}
if (r === 38) {
let a38 = document.getElementById("A").checked;
let b38 = document.getElementById("B").checked;
let c38 = document.getElementById("C").checked;
let d38 = document.getElementById("D").checked;
if(a38 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("38", "A");
}
if(b38 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("38", "B");
}
if(c38 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("38", "C");
}
if(d38 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("38", "D");
}  
}
if (r === 39) {
let a39 = document.getElementById("A").checked;
let b39 = document.getElementById("B").checked;
let c39 = document.getElementById("C").checked;
let d39 = document.getElementById("D").checked;
if(a39 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("39", "A");
}
if(b39 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("39", "B");
}
if(c39 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("39", "C");
}
if(d39 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("39", "D");
}  
}
if (r === 40) {
let a40 = document.getElementById("A").checked;
let b40 = document.getElementById("B").checked;
let c40 = document.getElementById("C").checked;
let d40 = document.getElementById("D").checked;
if(a40 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("40", "A");
}
if(b40 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("40", "B");
}
if(c40 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("40", "C");
}
if(d40 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("40", "D");
}  
}
if (r === 41) {
let a41 = document.getElementById("A").checked;
let b41 = document.getElementById("B").checked;
let c41 = document.getElementById("C").checked;
let d41 = document.getElementById("D").checked;
if(a41 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("41", "A");
}
if(b41 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("41", "B");
}
if(c41 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("41", "C");
}
if(d41 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("41", "D");
}  
}
if (r === 42) {
let a42 = document.getElementById("A").checked;
let b42 = document.getElementById("B").checked;
let c42 = document.getElementById("C").checked;
let d42 = document.getElementById("D").checked;
if(a42 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("42", "A");
}
if(b42 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("42", "B");
}
if(c42 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("42", "C");
}
if(d42 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("42", "D");
}  
}
if (r === 43) {
let a43 = document.getElementById("A").checked;
let b43 = document.getElementById("B").checked;
let c43 = document.getElementById("C").checked;
let d43 = document.getElementById("D").checked;
if(a43 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("43", "A");
}
if(b43 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("43", "B");
}
if(c43 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("43", "C");
}
if(d43 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("43", "D");
}  
}
if (r === 44) {
let a44 = document.getElementById("A").checked;
let b44 = document.getElementById("B").checked;
let c44 = document.getElementById("C").checked;
let d44 = document.getElementById("D").checked;
if(a44 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("44", "A");
}
if(b44 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("44", "B");
}
if(c44 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("44", "C");
}
if(d44 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("44", "D");
}  
}
if (r === 45) {
let a45 = document.getElementById("A").checked;
let b45 = document.getElementById("B").checked;
let c45 = document.getElementById("C").checked;
let d45 = document.getElementById("D").checked;
if(a45 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("45", "A");
}
if(b45 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("45", "B");
}
if(c45 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("45", "C");
}
if(d45 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("45", "D");
}  
}
if (r === 46) {
let a46 = document.getElementById("A").checked;
let b46 = document.getElementById("B").checked;
let c46 = document.getElementById("C").checked;
let d46 = document.getElementById("D").checked;
if(a46 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("46", "A");
}
if(b46 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("46", "B");
}
if(c46 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("46", "C");
}
if(d46 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("46", "D");
}  
}
if (r === 47) {
let a47 = document.getElementById("A").checked;
let b47 = document.getElementById("B").checked;
let c47 = document.getElementById("C").checked;
let d47 = document.getElementById("D").checked;
if(a47 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("47", "A");
}
if(b47 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("47", "B");
}
if(c47 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("47", "C");
}
if(d47 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("47", "D");
}  
}
if (r === 48) {
let a48 = document.getElementById("A").checked;
let b48 = document.getElementById("B").checked;
let c48 = document.getElementById("C").checked;
let d48 = document.getElementById("D").checked;
if(a48 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("48", "A");
}
if(b48 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("48", "B");
}
if(c48 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("48", "C");
}
if(d48 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("48", "D");
}  
}
if (r === 49) {
let a49 = document.getElementById("A").checked;
let b49 = document.getElementById("B").checked;
let c49 = document.getElementById("C").checked;
let d49 = document.getElementById("D").checked;
if(a49 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("49", "A");
}
if(b49 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("49", "B");
}
if(c49 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("49", "C");
}
if(d49 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("49", "D");
}  
}
if (r === 50) {
let a50 = document.getElementById("A").checked;
let b50 = document.getElementById("B").checked;
let c50 = document.getElementById("C").checked;
let d50 = document.getElementById("D").checked;
if(a50 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("50", "A");
}
if(b50 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("50", "B");
}
if(c50 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("50", "C");
}
if(d50 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("50", "D");
}  
}
if (r === 51) {
let a51 = document.getElementById("A").checked;
let b51 = document.getElementById("B").checked;
let c51 = document.getElementById("C").checked;
let d51 = document.getElementById("D").checked;
if(a51 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("51", "A");
}
if(b51 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("51", "B");
}
if(c51 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("51", "C");
}
if(d51 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("51", "D");
}  
}
if (r === 52) {
let a52 = document.getElementById("A").checked;
let b52 = document.getElementById("B").checked;
let c52 = document.getElementById("C").checked;
let d52 = document.getElementById("D").checked;
if(a52 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("52", "A");
}
if(b52 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("52", "B");
}
if(c52 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("52", "C");
}
if(d52 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("52", "D");
}  
}
if (r === 53) {
let a53 = document.getElementById("A").checked;
let b53 = document.getElementById("B").checked;
let c53 = document.getElementById("C").checked;
let d53 = document.getElementById("D").checked;
if(a53 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("53", "A");
}
if(b53 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("53", "B");
}
if(c53 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("53", "C");
}
if(d53 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("53", "D");
}  
}
if (r === 54) {
let a54 = document.getElementById("A").checked;
let b54 = document.getElementById("B").checked;
let c54 = document.getElementById("C").checked;
let d54 = document.getElementById("D").checked;
if(a54 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("54", "A");
}
if(b54 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("54", "B");
}
if(c54 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("54", "C");
}
if(d54 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("54", "D");
}  
}
if (r === 55) {
let a55 = document.getElementById("A").checked;
let b55 = document.getElementById("B").checked;
let c55 = document.getElementById("C").checked;
let d55 = document.getElementById("D").checked;
if(a55 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("55", "A");
}
if(b55 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("55", "B");
}
if(c55 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("55", "C");
}
if(d55 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("55", "D");
}  
}
if (r === 56) {
let a56 = document.getElementById("A").checked;
let b56 = document.getElementById("B").checked;
let c56 = document.getElementById("C").checked;
let d56 = document.getElementById("D").checked;
if(a56 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("56", "A");
}
if(b56 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("56", "B");
}
if(c56 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("56", "C");
}
if(d56 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("56", "D");
}  
}
if (r === 57) {
let a57 = document.getElementById("A").checked;
let b57 = document.getElementById("B").checked;
let c57 = document.getElementById("C").checked;
let d57 = document.getElementById("D").checked;
if(a57 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("57", "A");
}
if(b57 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("57", "B");
}
if(c57 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("57", "C");
}
if(d57 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("57", "D");
}  
}
if (r === 58) {
let a58 = document.getElementById("A").checked;
let b58 = document.getElementById("B").checked;
let c58 = document.getElementById("C").checked;
let d58 = document.getElementById("D").checked;
if(a58 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("58", "A");
}
if(b58 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("58", "B");
}
if(c58 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("58", "C");
}
if(d58 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("58", "D");
}  
}
if (r === 59) {
let a59 = document.getElementById("A").checked;
let b59 = document.getElementById("B").checked;
let c59 = document.getElementById("C").checked;
let d59 = document.getElementById("D").checked;
if(a59 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("59", "A");
}
if(b59 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("59", "B");
}
if(c59 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("59", "C");
}
if(d59 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("59", "D");
}  
}
if (r === 60) {
let a60 = document.getElementById("A").checked;
let b60 = document.getElementById("B").checked;
let c60 = document.getElementById("C").checked;
let d60 = document.getElementById("D").checked;
if(a60 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("60", "A");
}
if(b60 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("60", "B");
}
if(c60 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("60", "C");
}
if(d60 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("60", "D");
}  
}
if (r === 61) {
let a61 = document.getElementById("A").checked;
let b61 = document.getElementById("B").checked;
let c61 = document.getElementById("C").checked;
let d61 = document.getElementById("D").checked;
if(a61 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("61", "A");
}
if(b61 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("61", "B");
}
if(c61 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("61", "C");
}
if(d61 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("61", "D");
}  
}
if (r === 62) {
let a62 = document.getElementById("A").checked;
let b62 = document.getElementById("B").checked;
let c62 = document.getElementById("C").checked;
let d62 = document.getElementById("D").checked;
if(a62 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("62", "A");
}
if(b62 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("62", "B");
}
if(c62 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("62", "C");
}
if(d62 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("62", "D");
}  
}
if (r === 63) {
let a63 = document.getElementById("A").checked;
let b63 = document.getElementById("B").checked;
let c63 = document.getElementById("C").checked;
let d63 = document.getElementById("D").checked;
if(a63 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("63", "A");
}
if(b63 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("63", "B");
}
if(c63 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("63", "C");
}
if(d63 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("63", "D");
}  
}
if (r === 64) {
let a64 = document.getElementById("A").checked;
let b64 = document.getElementById("B").checked;
let c64 = document.getElementById("C").checked;
let d64 = document.getElementById("D").checked;
if(a64 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("64", "A");
}
if(b64 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("64", "B");
}
if(c64 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("64", "C");
}
if(d64 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("64", "D");
}  
}
if (r === 65) {
let a65 = document.getElementById("A").checked;
let b65 = document.getElementById("B").checked;
let c65 = document.getElementById("C").checked;
let d65 = document.getElementById("D").checked;
if(a65 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("65", "A");
}
if(b65 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("65", "B");
}
if(c65 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("65", "C");
}
if(d65 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("65", "D");
}  
}
if (r === 66) {
let a66 = document.getElementById("A").checked;
let b66 = document.getElementById("B").checked;
let c66 = document.getElementById("C").checked;
let d66 = document.getElementById("D").checked;
if(a66 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("66", "A");
}
if(b66 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("66", "B");
}
if(c66 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("66", "C");
}
if(d66 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("66", "D");
}  
}
if (r === 67) {
let a67 = document.getElementById("A").checked;
let b67 = document.getElementById("B").checked;
let c67 = document.getElementById("C").checked;
let d67 = document.getElementById("D").checked;
if(a67 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("67", "A");
}
if(b67 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("67", "B");
}
if(c67 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("67", "C");
}
if(d67 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("67", "D");
}  
}
if (r === 68) {
let a68 = document.getElementById("A").checked;
let b68 = document.getElementById("B").checked;
let c68 = document.getElementById("C").checked;
let d68 = document.getElementById("D").checked;
if(a68 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("68", "A");
}
if(b68 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("68", "B");
}
if(c68 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("68", "C");
}
if(d68 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("68", "D");
}  
}
if (r === 69) {
let a69 = document.getElementById("A").checked;
let b69 = document.getElementById("B").checked;
let c69 = document.getElementById("C").checked;
let d69 = document.getElementById("D").checked;
if(a69 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("69", "A");
}
if(b69 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("69", "B");
}
if(c69 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("69", "C");
}
if(d69 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("69", "D");
}  
}
if (r === 70) {
let a70 = document.getElementById("A").checked;
let b70 = document.getElementById("B").checked;
let c70 = document.getElementById("C").checked;
let d70 = document.getElementById("D").checked;
if(a70 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("70", "A");
}
if(b70 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("70", "B");
}
if(c70 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("70", "C");
}
if(d70 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("70", "D");
}  
}
if (r === 71) {
let a71 = document.getElementById("A").checked;
let b71 = document.getElementById("B").checked;
let c71 = document.getElementById("C").checked;
let d71 = document.getElementById("D").checked;
if(a71 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("71", "A");
}
if(b71 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("71", "B");
}
if(c71 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("71", "C");
}
if(d71 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("71", "D");
}  
}
if (r === 72) {
let a72 = document.getElementById("A").checked;
let b72 = document.getElementById("B").checked;
let c72 = document.getElementById("C").checked;
let d72 = document.getElementById("D").checked;
if(a72 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("72", "A");
}
if(b72 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("72", "B");
}
if(c72 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("72", "C");
}
if(d72 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("72", "D");
}  
}
if (r === 73) {
let a73 = document.getElementById("A").checked;
let b73 = document.getElementById("B").checked;
let c73 = document.getElementById("C").checked;
let d73 = document.getElementById("D").checked;
if(a73 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("73", "A");
}
if(b73 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("73", "B");
}
if(c73 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("73", "C");
}
if(d73 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("73", "D");
}  
}
if (r === 74) {
let a74 = document.getElementById("A").checked;
let b74 = document.getElementById("B").checked;
let c74 = document.getElementById("C").checked;
let d74 = document.getElementById("D").checked;
if(a74 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("74", "A");
}
if(b74 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("74", "B");
}
if(c74 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("74", "C");
}
if(d5 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("5", "D");
}  
}
if (r === 75) {
let a75 = document.getElementById("A").checked;
let b75 = document.getElementById("B").checked;
let c75 = document.getElementById("C").checked;
let d75 = document.getElementById("D").checked;
if(a75 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("75", "A");
}
if(b75 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("75", "B");
}
if(c75 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("75", "C");
}
if(d75 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("75", "D");
}  
}
if (r === 76) {
let a76 = document.getElementById("A").checked;
let b76 = document.getElementById("B").checked;
let c76 = document.getElementById("C").checked;
let d76 = document.getElementById("D").checked;
if(a76 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("76", "A");
}
if(b76 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("76", "B");
}
if(c76 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("76", "C");
}
if(d76 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("76", "D");
}  
}
if (r === 77) {
let a77 = document.getElementById("A").checked;
let b77 = document.getElementById("B").checked;
let c77 = document.getElementById("C").checked;
let d77 = document.getElementById("D").checked;
if(a77 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("77", "A");
}
if(b77 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("77", "B");
}
if(c77 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("77", "C");
}
if(d77 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("77", "D");
}  
}
if (r === 78) {
let a78 = document.getElementById("A").checked;
let b78 = document.getElementById("B").checked;
let c78 = document.getElementById("C").checked;
let d78 = document.getElementById("D").checked;
if(a78 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("78", "A");
}
if(b78 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("78", "B");
}
if(c78 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("78", "C");
}
if(d78 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("78", "D");
}  
}
if (r === 79) {
let a79 = document.getElementById("A").checked;
let b79 = document.getElementById("B").checked;
let c79 = document.getElementById("C").checked;
let d79 = document.getElementById("D").checked;
if(a79 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("79", "A");
}
if(b79 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("79", "B");
}
if(c79 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("79", "C");
}
if(d79 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("79", "D");
}  
}
if (r === 80) {
let a80 = document.getElementById("A").checked;
let b80 = document.getElementById("B").checked;
let c80 = document.getElementById("C").checked;
let d80 = document.getElementById("D").checked;
if(a80 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("80", "A");
}
if(b80 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("80", "B");
}
if(c80 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("80", "C");
}
if(d80 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("80", "D");
}  
}
if (r === 81) {
let a81 = document.getElementById("A").checked;
let b81 = document.getElementById("B").checked;
let c81 = document.getElementById("C").checked;
let d81 = document.getElementById("D").checked;
if(a81 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("81", "A");
}
if(b81 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("81", "B");
}
if(c81 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("81", "C");
}
if(d81 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("81", "D");
}  
}
if (r === 82) {
let a82 = document.getElementById("A").checked;
let b82 = document.getElementById("B").checked;
let c82 = document.getElementById("C").checked;
let d82 = document.getElementById("D").checked;
if(a82 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("82", "A");
}
if(b82 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("82", "B");
}
if(c82 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("82", "C");
}
if(d82 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("82", "D");
}  
}
if (r === 83) {
let a83 = document.getElementById("A").checked;
let b83 = document.getElementById("B").checked;
let c83 = document.getElementById("C").checked;
let d83 = document.getElementById("D").checked;
if(a83 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("83", "A");
}
if(b83 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("83", "B");
}
if(c83 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("83", "C");
}
if(d83 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("83", "D");
}  
}
if (r === 84) {
let a84 = document.getElementById("A").checked;
let b84 = document.getElementById("B").checked;
let c84 = document.getElementById("C").checked;
let d84 = document.getElementById("D").checked;
if(a84 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("84", "A");
}
if(b84 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("84", "B");
}
if(c84 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("84", "C");
}
if(d84 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("84", "D");
}  
}
if (r === 85) {
let a85 = document.getElementById("A").checked;
let b85 = document.getElementById("B").checked;
let c85 = document.getElementById("C").checked;
let d85 = document.getElementById("D").checked;
if(a85 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("85", "A");
}
if(b85 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("85", "B");
}
if(c85 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("85", "C");
}
if(d85 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("85", "D");
}  
}
if (r === 87) {
let a87 = document.getElementById("A").checked;
let b87 = document.getElementById("B").checked;
let c87 = document.getElementById("C").checked;
let d87 = document.getElementById("D").checked;
if(a87 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("87", "A");
}
if(b87 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("87", "B");
}
if(c87 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("87", "C");
}
if(d87 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("87", "D");
}  
}
if (r === 88) {
let a88 = document.getElementById("A").checked;
let b88 = document.getElementById("B").checked;
let c88 = document.getElementById("C").checked;
let d88 = document.getElementById("D").checked;
if(a88 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("88", "A");
}
if(b88 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("88", "B");
}
if(c88 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("88", "C");
}
if(d88 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("88", "D");
}  
}
if (r === 89) {
let a89 = document.getElementById("A").checked;
let b89 = document.getElementById("B").checked;
let c89 = document.getElementById("C").checked;
let d89 = document.getElementById("D").checked;
if(a89 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("89", "A");
}
if(b89 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("89", "B");
}
if(c89 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("89", "C");
}
if(d89 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("89", "D");
}  
}
if (r === 90) {
let a90 = document.getElementById("A").checked;
let b90 = document.getElementById("B").checked;
let c90 = document.getElementById("C").checked;
let d90 = document.getElementById("D").checked;
if(a90 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("90", "A");
}
if(b90 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("90", "B");
}
if(c90 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("90", "C");
}
if(d90 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("90", "D");
}  
}
if (r === 91) {
let a91 = document.getElementById("A").checked;
let b91 = document.getElementById("B").checked;
let c91 = document.getElementById("C").checked;
let d91 = document.getElementById("D").checked;
if(a91 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("91", "A");
}
if(b91 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("91", "B");
}
if(c91 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("91", "C");
}
if(d91 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("91", "D");
}  
}
if (r === 92) {
let a92 = document.getElementById("A").checked;
let b92 = document.getElementById("B").checked;
let c92 = document.getElementById("C").checked;
let d92 = document.getElementById("D").checked;
if(a92 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("92", "A");
}
if(b92 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("92", "B");
}
if(c92 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("92", "C");
}
if(d92 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("92", "D");
}  
}
if (r === 93) {
let a93 = document.getElementById("A").checked;
let b93 = document.getElementById("B").checked;
let c93 = document.getElementById("C").checked;
let d93 = document.getElementById("D").checked;
if(a93 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("93", "A");
}
if(b93 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("93", "B");
}
if(c93 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("93", "C");
}
if(d93 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("93", "D");
}  
}
if (r === 94) {
let a94 = document.getElementById("A").checked;
let b94 = document.getElementById("B").checked;
let c94 = document.getElementById("C").checked;
let d94 = document.getElementById("D").checked;
if(a94 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("94", "A");
}
if(b94 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("94", "B");
}
if(c94 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("94", "C");
}
if(d94 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("94", "D");
}  
}
if (r === 95) {
let a95 = document.getElementById("A").checked;
let b95 = document.getElementById("B").checked;
let c95 = document.getElementById("C").checked;
let d95 = document.getElementById("D").checked;
if(a95 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("95", "A");
}
if(b95 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("95", "B");
}
if(c95 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("95", "C");
}
if(d95 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("95", "D");
}  
}
if (r === 96) {
let a96 = document.getElementById("A").checked;
let b96 = document.getElementById("B").checked;
let c96 = document.getElementById("C").checked;
let d96 = document.getElementById("D").checked;
if(a96 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("96", "A");
}
if(b96 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("96", "B");
}
if(c96 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("96", "C");
}
if(d96 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("96", "D");
}  
}
if (r === 97) {
let a97 = document.getElementById("A").checked;
let b97 = document.getElementById("B").checked;
let c97 = document.getElementById("C").checked;
let d97 = document.getElementById("D").checked;
if(a97 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("97", "A");
}
if(b97 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("97", "B");
}
if(c97 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("97", "C");
}
if(d97 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("97", "D");
}  
}
if (r === 98) {
let a98 = document.getElementById("A").checked;
let b98 = document.getElementById("B").checked;
let c98 = document.getElementById("C").checked;
let d98 = document.getElementById("D").checked;
if(a98 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("98", "A");
}
if(b98 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("98", "B");
}
if(c98 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("98", "C");
}
if(d98 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("98", "D");
}  
}
if (r === 99) {
let a99 = document.getElementById("A").checked;
let b99 = document.getElementById("B").checked;
let c99 = document.getElementById("C").checked;
let d99 = document.getElementById("D").checked;
if(a99 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("99", "A");
}
if(b99 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("99", "B");
}
if(c99 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("99", "C");
}
if(d99 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("99", "D");
}  
}
if (r === 100) {
let a100 = document.getElementById("A").checked;
let b100 = document.getElementById("B").checked;
let c100 = document.getElementById("C").checked;
let d100 = document.getElementById("D").checked;
if(a100 === true ) {
	document.getElementById("A1").style.background= "orange";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("100", "A");
}
if(b100 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "orange"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("100", "B");
}
if(c100 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "orange"; document.getElementById("D4").style.background= "white";
	localStorage.setItem("100", "C");
}
if(d100 === true ) {
	document.getElementById("A1").style.background= "white";  document.getElementById("B2").style.background= "white"; document.getElementById("C3").style.background= "white"; document.getElementById("D4").style.background= "orange";
	localStorage.setItem("100", "D");
}  
}
}
function nextSection() {
    window.location="SPAKresult.html"
}
function noclick() {
if (r === 1) {
let a1 = document.getElementById("A").checked;
let b1 = document.getElementById("B").checked;
let c1 = document.getElementById("C").checked;
let d1 = document.getElementById("D").checked;
    if ((a1 === false) && (b1 === false) && (c1 === false) && (d1 === false)) {
	localStorage.setItem("1", "empty")
    }
}
if (r === 2) {
let a2 = document.getElementById("A").checked;
let b2 = document.getElementById("B").checked;
let c2 = document.getElementById("C").checked;
let d2 = document.getElementById("D").checked;
if (a2 === false && b2 === false && c2 === false && d2 === false) {
	localStorage.setItem("2", "empty")
} 
}
if (r === 3) {
let a3 = document.getElementById("A").checked;
let b3 = document.getElementById("B").checked;
let c3 = document.getElementById("C").checked;
let d3 = document.getElementById("D").checked;
if (a3 === false && b3 === false && c3 === false && d3 === false) {
	localStorage.setItem("3", "empty")
}
}
if (r === 4) {
let a4 = document.getElementById("A").checked;
let b4 = document.getElementById("B").checked;
let c4 = document.getElementById("C").checked;
let d4 = document.getElementById("D").checked;
if (a4 === false && b4 === false && c4 === false && d4 === false) {
	localStorage.setItem("4", "empty")
}
}
if (r === 5) {
let a5 = document.getElementById("A").checked;
let b5 = document.getElementById("B").checked;
let c5 = document.getElementById("C").checked;
let d5 = document.getElementById("D").checked;
if (a5 === false && b5 === false && c5 === false && d5 === false) {
	localStorage.setItem("5", "empty")
}	
}
if (r === 6) {
let a6 = document.getElementById("A").checked;
let b6 = document.getElementById("B").checked;
let c6 = document.getElementById("C").checked;
let d6 = document.getElementById("D").checked;
if (a6 === false && b6 === false && c6 === false && d6 === false) {
	localStorage.setItem("6", "empty")
}
}
if (r === 7) {
let a7 = document.getElementById("A").checked;
let b7 = document.getElementById("B").checked;
let c7 = document.getElementById("C").checked;
let d7 = document.getElementById("D").checked;
if (a7 === false && b7 === false && c7 === false && d7 === false) {
	localStorage.setItem("7", "empty")
}	
}
if (r === 8) {
let a8 = document.getElementById("A").checked;
let b8 = document.getElementById("B").checked;
let c8 = document.getElementById("C").checked;
let d8 = document.getElementById("D").checked;
if (a8 === false && b8 === false && c8 === false && d8 === false) {
	localStorage.setItem("8", "empty")
}
}
if (r === 9) {
let a9 = document.getElementById("A").checked;
let b9 = document.getElementById("B").checked;
let c9 = document.getElementById("C").checked;
let d9 = document.getElementById("D").checked;
if (a9 === false && b9 === false && c9 === false && d9 === false) {
	localStorage.setItem("9", "empty")
}
}
if (r === 10) {
let a10 = document.getElementById("A").checked;
let b10 = document.getElementById("B").checked;
let c10 = document.getElementById("C").checked;
let d10 = document.getElementById("D").checked;
if (a10 === false && b10 === false && c10 === false && d10 === false) {
	localStorage.setItem("10", "empty")
}
}
if (r === 11) {
let a11 = document.getElementById("A").checked;
let b11 = document.getElementById("B").checked;
let c11 = document.getElementById("C").checked;
let d11 = document.getElementById("D").checked;
if (a11 === false && b11 === false && c11 === false && d11 === false) {
	localStorage.setItem("11", "empty")
}
}
if (r === 12) {
let a12 = document.getElementById("A").checked;
let b12 = document.getElementById("B").checked;
let c12 = document.getElementById("C").checked;
let d12 = document.getElementById("D").checked;
if (a12 === false && b12 === false && c12 === false && d12 === false) {
	localStorage.setItem("12", "empty")
}
}
if (r === 13) {
let a13 = document.getElementById("A").checked;
let b13 = document.getElementById("B").checked;
let c13 = document.getElementById("C").checked;
let d13 = document.getElementById("D").checked;
if (a13 === false && b13 === false && c13 === false && d13 === false) {
	localStorage.setItem("13", "empty")
}
}
if (r === 14) {
let a14 = document.getElementById("A").checked;
let b14 = document.getElementById("B").checked;
let c14 = document.getElementById("C").checked;
let d14 = document.getElementById("D").checked;
if (a14 === false && b14 === false && c14 === false && d14 === false) {
	localStorage.setItem("14", "empty")
}
}
if (r === 15) {
let a15 = document.getElementById("A").checked;
let b15 = document.getElementById("B").checked;
let c15 = document.getElementById("C").checked;
let d15 = document.getElementById("D").checked;
if (a15 === false && b15 === false && c15 === false && d15 === false) {
	localStorage.setItem("15", "empty")
}
}
if (r === 16) {
let a16 = document.getElementById("A").checked;
let b16 = document.getElementById("B").checked;
let c16 = document.getElementById("C").checked;
let d16 = document.getElementById("D").checked;
if (a16 === false && b16 === false && c16 === false && d16 === false) {
	localStorage.setItem("16", "empty")
}
}
if (r === 17) {
let a17 = document.getElementById("A").checked;
let b17 = document.getElementById("B").checked;
let c17 = document.getElementById("C").checked;
let d17 = document.getElementById("D").checked;
if (a17 === false && b17 === false && c17 === false && d17 === false) {
	localStorage.setItem("17", "empty")
}
}
if (r === 18) {
let a18 = document.getElementById("A").checked;
let b18 = document.getElementById("B").checked;
let c18 = document.getElementById("C").checked;
let d18 = document.getElementById("D").checked;
if (a18 === false && b18 === false && c18 === false && d18 === false) {
	localStorage.setItem("18", "empty")
}
}
if (r === 19) {
let a19 = document.getElementById("A").checked;
let b19 = document.getElementById("B").checked;
let c19 = document.getElementById("C").checked;
let d19 = document.getElementById("D").checked;
if (a19 === false && b19 === false && c19 === false && d19 === false) {
	localStorage.setItem("19", "empty")
}
}
if (r === 20) {
let a20 = document.getElementById("A").checked;
let b20 = document.getElementById("B").checked;
let c20 = document.getElementById("C").checked;
let d20 = document.getElementById("D").checked;
if (a20 === false && b20 === false && c20 === false && d20 === false) {
	localStorage.setItem("20", "empty")
}
}
if (r === 21) {
let a21 = document.getElementById("A").checked;
let b21 = document.getElementById("B").checked;
let c21 = document.getElementById("C").checked;
let d21 = document.getElementById("D").checked;
if (a21 === false && b21 === false && c21 === false && d21 === false) {
	localStorage.setItem("21", "empty")
}
}
if (r === 22) {
let a22 = document.getElementById("A").checked;
let b22 = document.getElementById("B").checked;
let c22 = document.getElementById("C").checked;
let d22 = document.getElementById("D").checked;
if (a22 === false && b22 === false && c22 === false && d22 === false) {
	localStorage.setItem("22", "empty")
}
}
if (r === 23) {
let a23 = document.getElementById("A").checked;
let b23 = document.getElementById("B").checked;
let c23 = document.getElementById("C").checked;
let d23 = document.getElementById("D").checked;
if (a23 === false && b23 === false && c23 === false && d23 === false) {
	localStorage.setItem("23", "empty")
}
}
if (r === 24) {
let a24 = document.getElementById("A").checked;
let b24 = document.getElementById("B").checked;
let c24 = document.getElementById("C").checked;
let d24 = document.getElementById("D").checked;
if (a24 === false && b24 === false && c24 === false && d24 === false) {
	localStorage.setItem("24", "empty")
}
}
if (r === 25) {
let a25 = document.getElementById("A").checked;
let b25 = document.getElementById("B").checked;
let c25 = document.getElementById("C").checked;
let d25 = document.getElementById("D").checked;
if (a25 === false && b25 === false && c25 === false && d25 === false) {
	localStorage.setItem("25", "empty")
}
}
if (r === 26) {
let a26 = document.getElementById("A").checked;
let b26 = document.getElementById("B").checked;
let c26 = document.getElementById("C").checked;
let d26 = document.getElementById("D").checked;
if (a26 === false && b26 === false && c26 === false && d26 === false) {
	localStorage.setItem("26", "empty")
}
}
if (r === 27) {
let a27 = document.getElementById("A").checked;
let b27 = document.getElementById("B").checked;
let c27 = document.getElementById("C").checked;
let d27 = document.getElementById("D").checked;
if (a27 === false && b27 === false && c27 === false && d27 === false) {
	localStorage.setItem("27", "empty")
}
}
if (r === 28) {
let a28 = document.getElementById("A").checked;
let b28 = document.getElementById("B").checked;
let c28 = document.getElementById("C").checked;
let d28 = document.getElementById("D").checked;
if (a28 === false && b28 === false && c28 === false && d28 === false) {
	localStorage.setItem("28", "empty")
}
}
if (r === 29) {
let a29 = document.getElementById("A").checked;
let b29 = document.getElementById("B").checked;
let c29 = document.getElementById("C").checked;
let d29 = document.getElementById("D").checked;
if (a29 === false && b29 === false && c29 === false && d29 === false) {
	localStorage.setItem("29", "empty")
}
}
if (r === 30) {
let a30 = document.getElementById("A").checked;
let b30 = document.getElementById("B").checked;
let c30 = document.getElementById("C").checked;
let d30 = document.getElementById("D").checked;
if (a30 === false && b30 === false && c30 === false && d30 === false) {
	localStorage.setItem("30", "empty")
}
}
if (r === 31) {
let a31 = document.getElementById("A").checked;
let b31 = document.getElementById("B").checked;
let c31 = document.getElementById("C").checked;
let d31 = document.getElementById("D").checked;
    if ((a31 === false) && (b31 === false) && (c31 === false) && (d31 === false)) {
	localStorage.setItem("31", "empty")
    }
}	
if (r === 32) {
let a32 = document.getElementById("A").checked;
let b32 = document.getElementById("B").checked;
let c32 = document.getElementById("C").checked;
let d32 = document.getElementById("D").checked;
    if ((a32 === false) && (b32 === false) && (c32 === false) && (d32 === false)) {
	localStorage.setItem("32", "empty")
    }
}
if (r === 33) {
let a33 = document.getElementById("A").checked;
let b33 = document.getElementById("B").checked;
let c33 = document.getElementById("C").checked;
let d33 = document.getElementById("D").checked;
    if ((a33 === false) && (b33 === false) && (c33 === false) && (d33 === false)) {
	localStorage.setItem("33", "empty")
    }
}
if (r === 35) {
let a35 = document.getElementById("A").checked;
let b35 = document.getElementById("B").checked;
let c35 = document.getElementById("C").checked;
let d35 = document.getElementById("D").checked;
    if ((a35 === false) && (b35 === false) && (c35 === false) && (d35 === false)) {
	localStorage.setItem("35", "empty")
    }
}
if (r === 36) {
let a36 = document.getElementById("A").checked;
let b36 = document.getElementById("B").checked;
let c36 = document.getElementById("C").checked;
let d36 = document.getElementById("D").checked;
    if ((a36 === false) && (b36 === false) && (c36 === false) && (d36 === false)) {
	localStorage.setItem("36", "empty")
    }
}
if (r === 37) {
let a37 = document.getElementById("A").checked;
let b37 = document.getElementById("B").checked;
let c37 = document.getElementById("C").checked;
let d37 = document.getElementById("D").checked;
    if ((a37 === false) && (b37 === false) && (c37 === false) && (d37 === false)) {
	localStorage.setItem("37", "empty")
    }
}
if (r === 38) {
let a38 = document.getElementById("A").checked;
let b38 = document.getElementById("B").checked;
let c38 = document.getElementById("C").checked;
let d38 = document.getElementById("D").checked;
    if ((a38 === false) && (b38 === false) && (c38 === false) && (d38 === false)) {
	localStorage.setItem("38", "empty")
    }
}
if (r === 39) {
let a39 = document.getElementById("A").checked;
let b39 = document.getElementById("B").checked;
let c39 = document.getElementById("C").checked;
let d39 = document.getElementById("D").checked;
    if ((a39 === false) && (b39 === false) && (c39 === false) && (d39 === false)) {
	localStorage.setItem("39", "empty")
    }
}
if (r === 40) {
let a40 = document.getElementById("A").checked;
let b40 = document.getElementById("B").checked;
let c40 = document.getElementById("C").checked;
let d40 = document.getElementById("D").checked;
    if ((a40 === false) && (b40 === false) && (c40 === false) && (d40 === false)) {
	localStorage.setItem("40", "empty")
    }
}
if (r === 41) {
let a41 = document.getElementById("A").checked;
let b41 = document.getElementById("B").checked;
let c41 = document.getElementById("C").checked;
let d41 = document.getElementById("D").checked;
    if ((a41 === false) && (b41 === false) && (c41 === false) && (d41 === false)) {
	localStorage.setItem("41", "empty")
    }
}
if (r === 42) {
let a42 = document.getElementById("A").checked;
let b42 = document.getElementById("B").checked;
let c42 = document.getElementById("C").checked;
let d42 = document.getElementById("D").checked;
    if ((a42 === false) && (b42 === false) && (c42 === false) && (d42 === false)) {
	localStorage.setItem("42", "empty")
    }
}
if (r === 43) {
let a43 = document.getElementById("A").checked;
let b43 = document.getElementById("B").checked;
let c43 = document.getElementById("C").checked;
let d43 = document.getElementById("D").checked;
    if ((a43 === false) && (b43 === false) && (c43 === false) && (d43 === false)) {
	localStorage.setItem("43", "empty")
    }
}
if (r === 44) {
let a44 = document.getElementById("A").checked;
let b44 = document.getElementById("B").checked;
let c44 = document.getElementById("C").checked;
let d44 = document.getElementById("D").checked;
    if ((a44 === false) && (b44 === false) && (c44 === false) && (d44 === false)) {
	localStorage.setItem("44", "empty")
    }
}
if (r === 45) {
let a45 = document.getElementById("A").checked;
let b45 = document.getElementById("B").checked;
let c45 = document.getElementById("C").checked;
let d45 = document.getElementById("D").checked;
    if ((a45 === false) && (b45 === false) && (c45 === false) && (d45 === false)) {
	localStorage.setItem("45", "empty")
    }
}
if (r === 46) {
let a46 = document.getElementById("A").checked;
let b46 = document.getElementById("B").checked;
let c46 = document.getElementById("C").checked;
let d46 = document.getElementById("D").checked;
    if ((a46 === false) && (b46 === false) && (c46 === false) && (d46 === false)) {
	localStorage.setItem("46", "empty")
    }
}
if (r === 47) {
let a47 = document.getElementById("A").checked;
let b47 = document.getElementById("B").checked;
let c47 = document.getElementById("C").checked;
let d47 = document.getElementById("D").checked;
    if ((a47 === false) && (b47 === false) && (c47 === false) && (d47 === false)) {
	localStorage.setItem("47", "empty")
    }
}
if (r === 48) {
let a48 = document.getElementById("A").checked;
let b48 = document.getElementById("B").checked;
let c48 = document.getElementById("C").checked;
let d48 = document.getElementById("D").checked;
    if ((a48 === false) && (b48 === false) && (c48 === false) && (d48 === false)) {
	localStorage.setItem("48", "empty")
    }
}
if (r === 49) {
let a49 = document.getElementById("A").checked;
let b49 = document.getElementById("B").checked;
let c49 = document.getElementById("C").checked;
let d49 = document.getElementById("D").checked;
    if ((a49 === false) && (b49 === false) && (c49 === false) && (d49 === false)) {
	localStorage.setItem("49", "empty")
    }
}
if (r === 50) {
let a50 = document.getElementById("A").checked;
let b50 = document.getElementById("B").checked;
let c50 = document.getElementById("C").checked;
let d50 = document.getElementById("D").checked;
    if ((a50 === false) && (b50 === false) && (c50 === false) && (d50 === false)) {
	localStorage.setItem("50", "empty")
    }
}
if (r === 51) {
let a51 = document.getElementById("A").checked;
let b51 = document.getElementById("B").checked;
let c51 = document.getElementById("C").checked;
let d51 = document.getElementById("D").checked;
    if ((a51 === false) && (b51 === false) && (c51 === false) && (d51 === false)) {
	localStorage.setItem("51", "empty")
    }
}
if (r === 52) {
let a52 = document.getElementById("A").checked;
let b52 = document.getElementById("B").checked;
let c52 = document.getElementById("C").checked;
let d52 = document.getElementById("D").checked;
    if ((a52 === false) && (b52 === false) && (c52 === false) && (d52 === false)) {
	localStorage.setItem("52", "empty")
    }
}
if (r === 53) {
let a53 = document.getElementById("A").checked;
let b53 = document.getElementById("B").checked;
let c53 = document.getElementById("C").checked;
let d53 = document.getElementById("D").checked;
    if ((a53 === false) && (b53 === false) && (c53 === false) && (d53 === false)) {
	localStorage.setItem("53", "empty")
    }
}
if (r === 54) {
let a54 = document.getElementById("A").checked;
let b54 = document.getElementById("B").checked;
let c54 = document.getElementById("C").checked;
let d54 = document.getElementById("D").checked;
    if ((a54 === false) && (b54 === false) && (c54 === false) && (d54 === false)) {
	localStorage.setItem("54", "empty")
    }
}
if (r === 55) {
let a55 = document.getElementById("A").checked;
let b55 = document.getElementById("B").checked;
let c55 = document.getElementById("C").checked;
let d55 = document.getElementById("D").checked;
    if ((a55 === false) && (b55 === false) && (c55 === false) && (d55 === false)) {
	localStorage.setItem("55", "empty")
    }
}
if (r === 56) {
let a56 = document.getElementById("A").checked;
let b56 = document.getElementById("B").checked;
let c56 = document.getElementById("C").checked;
let d56 = document.getElementById("D").checked;
    if ((a56 === false) && (b56 === false) && (c56 === false) && (d56 === false)) {
	localStorage.setItem("56", "empty")
    }
}
if (r === 57) {
let a57 = document.getElementById("A").checked;
let b57 = document.getElementById("B").checked;
let c57 = document.getElementById("C").checked;
let d57 = document.getElementById("D").checked;
    if ((a57 === false) && (b57 === false) && (c57 === false) && (d57 === false)) {
	localStorage.setItem("57", "empty")
    }
}
if (r === 58) {
let a58 = document.getElementById("A").checked;
let b58 = document.getElementById("B").checked;
let c58 = document.getElementById("C").checked;
let d58 = document.getElementById("D").checked;
    if ((a58 === false) && (b58 === false) && (c58 === false) && (d58 === false)) {
	localStorage.setItem("58", "empty")
    }
}
if (r === 59) {
let a59 = document.getElementById("A").checked;
let b59 = document.getElementById("B").checked;
let c59 = document.getElementById("C").checked;
let d59 = document.getElementById("D").checked;
    if ((a59 === false) && (b59 === false) && (c59 === false) && (d59 === false)) {
	localStorage.setItem("59", "empty")
    }
}
if (r === 60) {
let a60 = document.getElementById("A").checked;
let b60 = document.getElementById("B").checked;
let c60 = document.getElementById("C").checked;
let d60 = document.getElementById("D").checked;
    if ((a60 === false) && (b60 === false) && (c60 === false) && (d60 === false)) {
	localStorage.setItem("60", "empty")
    }
}
if (r === 61) {
let a61 = document.getElementById("A").checked;
let b61 = document.getElementById("B").checked;
let c61 = document.getElementById("C").checked;
let d61 = document.getElementById("D").checked;
    if ((a61 === false) && (b61 === false) && (c61 === false) && (d61 === false)) {
	localStorage.setItem("61", "empty")
    }
}
if (r === 62) {
let a62 = document.getElementById("A").checked;
let b62 = document.getElementById("B").checked;
let c62 = document.getElementById("C").checked;
let d62 = document.getElementById("D").checked;
    if ((a62 === false) && (b62 === false) && (c62 === false) && (d62 === false)) {
	localStorage.setItem("62", "empty")
    }
}
if (r === 63) {
let a63 = document.getElementById("A").checked;
let b63 = document.getElementById("B").checked;
let c63 = document.getElementById("C").checked;
let d63 = document.getElementById("D").checked;
    if ((a63 === false) && (b63 === false) && (c63 === false) && (d63 === false)) {
	localStorage.setItem("63", "empty")
    }
}
if (r === 64) {
let a64 = document.getElementById("A").checked;
let b64 = document.getElementById("B").checked;
let c64 = document.getElementById("C").checked;
let d64 = document.getElementById("D").checked;
    if ((a64 === false) && (b64 === false) && (c64 === false) && (d64 === false)) {
	localStorage.setItem("64", "empty")
    }
}
if (r === 65) {
let a65 = document.getElementById("A").checked;
let b65 = document.getElementById("B").checked;
let c65 = document.getElementById("C").checked;
let d65 = document.getElementById("D").checked;
    if ((a65 === false) && (b65 === false) && (c65 === false) && (d65 === false)) {
	localStorage.setItem("65", "empty")
    }
}
if (r === 66) {
let a66 = document.getElementById("A").checked;
let b66 = document.getElementById("B").checked;
let c66 = document.getElementById("C").checked;
let d66 = document.getElementById("D").checked;
    if ((a66 === false) && (b66 === false) && (c66 === false) && (d66 === false)) {
	localStorage.setItem("66", "empty")
    }
}
if (r === 67) {
let a67 = document.getElementById("A").checked;
let b67 = document.getElementById("B").checked;
let c67 = document.getElementById("C").checked;
let d67 = document.getElementById("D").checked;
    if ((a67 === false) && (b67 === false) && (c67 === false) && (d67 === false)) {
	localStorage.setItem("67", "empty")
    }
}
if (r === 68) {
let a68 = document.getElementById("A").checked;
let b68 = document.getElementById("B").checked;
let c68 = document.getElementById("C").checked;
let d68 = document.getElementById("D").checked;
    if ((a68 === false) && (b68 === false) && (c68 === false) && (d68 === false)) {
	localStorage.setItem("68", "empty")
    }
}
if (r === 69) {
let a69 = document.getElementById("A").checked;
let b69 = document.getElementById("B").checked;
let c69 = document.getElementById("C").checked;
let d69 = document.getElementById("D").checked;
    if ((a69 === false) && (b69 === false) && (c69 === false) && (d69 === false)) {
	localStorage.setItem("69", "empty")
    }
}
if (r === 70) { 
let a70 = document.getElementById("A").checked; 
let b70 = document.getElementById("B").checked; 
let c70 = document.getElementById("C").checked; 
let d70 = document.getElementById("D").checked;     
	if ((a70 === false) && (b70 === false) && (c70 === false) && (d70 === false)) { 	
		localStorage.setItem("70", "empty")     
	}
}
if (r === 71) {
let a71 = document.getElementById("A").checked;
let b71 = document.getElementById("B").checked;
let c71 = document.getElementById("C").checked;
let d71 = document.getElementById("D").checked;
    if ((a71 === false) && (b71 === false) && (c71 === false) && (d71 === false)) {
	localStorage.setItem("71", "empty")
    }
}
if (r === 72) {
let a72 = document.getElementById("A").checked;
let b72 = document.getElementById("B").checked;
let c72 = document.getElementById("C").checked;
let d72 = document.getElementById("D").checked;
    if ((a72 === false) && (b72 === false) && (c72 === false) && (d72 === false)) {
	localStorage.setItem("72", "empty")
    }
}
if (r === 73) {
let a73 = document.getElementById("A").checked;
let b73 = document.getElementById("B").checked;
let c73 = document.getElementById("C").checked;
let d73 = document.getElementById("D").checked;
    if ((a73 === false) && (b73 === false) && (c73 === false) && (d73 === false)) {
	localStorage.setItem("73", "empty")
    }
}
if (r === 74) {
let a74 = document.getElementById("A").checked;
let b74 = document.getElementById("B").checked;
let c74 = document.getElementById("C").checked;
let d74 = document.getElementById("D").checked;
    if ((a74 === false) && (b74 === false) && (c74 === false) && (d74 === false)) {
	localStorage.setItem("74", "empty")
    }
}
if (r === 75) {
let a75 = document.getElementById("A").checked;
let b75 = document.getElementById("B").checked;
let c75 = document.getElementById("C").checked;
let d75 = document.getElementById("D").checked;
    if ((a75 === false) && (b75 === false) && (c75 === false) && (d75 === false)) {
	localStorage.setItem("75", "empty")
    }
}
if (r === 76) {
let a76 = document.getElementById("A").checked;
let b76 = document.getElementById("B").checked;
let c76 = document.getElementById("C").checked;
let d76 = document.getElementById("D").checked;
    if ((a76 === false) && (b76 === false) && (c76 === false) && (d76 === false)) {
	localStorage.setItem("76", "empty")
    }
}
if (r === 77) {
let a77 = document.getElementById("A").checked;
let b77 = document.getElementById("B").checked;
let c77 = document.getElementById("C").checked;
let d77 = document.getElementById("D").checked;
    if ((a77 === false) && (b77 === false) && (c77 === false) && (d77 === false)) {
	localStorage.setItem("77", "empty")
    }
}
if (r === 78) {
let a78 = document.getElementById("A").checked;
let b78 = document.getElementById("B").checked;
let c78 = document.getElementById("C").checked;
let d78 = document.getElementById("D").checked;
    if ((a78 === false) && (b78 === false) && (c78 === false) && (d78 === false)) {
	localStorage.setItem("78", "empty")
    }
}
if (r === 79) {
let a79 = document.getElementById("A").checked;
let b79 = document.getElementById("B").checked;
let c79 = document.getElementById("C").checked;
let d79 = document.getElementById("D").checked;
    if ((a79 === false) && (b79 === false) && (c79 === false) && (d79 === false)) {
	localStorage.setItem("79", "empty")
    }
}
if (r === 80) {
let a80 = document.getElementById("A").checked;
let b80 = document.getElementById("B").checked;
let c80 = document.getElementById("C").checked;
let d80 = document.getElementById("D").checked;
    if ((a80 === false) && (b80 === false) && (c80 === false) && (d80 === false)) {
	localStorage.setItem("80", "empty")
    }
}
if (r === 81) {
let a81 = document.getElementById("A").checked;
let b81 = document.getElementById("B").checked;
let c81 = document.getElementById("C").checked;
let d81 = document.getElementById("D").checked;
    if ((a81 === false) && (b81 === false) && (c81 === false) && (d81 === false)) {
	localStorage.setItem("81", "empty")
    }
}
if (r === 82) {
let a82 = document.getElementById("A").checked;
let b82 = document.getElementById("B").checked;
let c82 = document.getElementById("C").checked;
let d82 = document.getElementById("D").checked;
    if ((a82 === false) && (b82 === false) && (c82 === false) && (d82 === false)) {
	localStorage.setItem("82", "empty")
    }
}
if (r === 83) {
let a83 = document.getElementById("A").checked;
let b83 = document.getElementById("B").checked;
let c83 = document.getElementById("C").checked;
let d83 = document.getElementById("D").checked;
    if ((a83 === false) && (b83 === false) && (c83 === false) && (d83 === false)) {
	localStorage.setItem("83", "empty")
    }
}
if (r === 84) {
let a84 = document.getElementById("A").checked;
let b84 = document.getElementById("B").checked;
let c84 = document.getElementById("C").checked;
let d84 = document.getElementById("D").checked;
    if ((a84 === false) && (b84 === false) && (c84 === false) && (d84 === false)) {
	localStorage.setItem("84", "empty")
    }
}
if (r === 85) {
let a85 = document.getElementById("A").checked;
let b85 = document.getElementById("B").checked;
let c85 = document.getElementById("C").checked;
let d85 = document.getElementById("D").checked;
    if ((a85 === false) && (b85 === false) && (c85 === false) && (d85 === false)) {
	localStorage.setItem("85", "empty")
    }
}
if (r === 86) {
let a86 = document.getElementById("A").checked;
let b86 = document.getElementById("B").checked;
let c86 = document.getElementById("C").checked;
let d86 = document.getElementById("D").checked;
    if ((a86 === false) && (b86 === false) && (c86 === false) && (d86 === false)) {
	localStorage.setItem("86", "empty")
    }
}
if (r === 87) {
let a87 = document.getElementById("A").checked;
let b87 = document.getElementById("B").checked;
let c87 = document.getElementById("C").checked;
let d87 = document.getElementById("D").checked;
    if ((a87 === false) && (b87 === false) && (c87 === false) && (d87 === false)) {
	localStorage.setItem("87", "empty")
    }
}
if (r === 88) {
let a88 = document.getElementById("A").checked;
let b88 = document.getElementById("B").checked;
let c88 = document.getElementById("C").checked;
let d88 = document.getElementById("D").checked;
    if ((a88 === false) && (b88 === false) && (c88 === false) && (d88 === false)) {
	localStorage.setItem("88", "empty")
    }
}
if (r === 89) {
let a89 = document.getElementById("A").checked;
let b89 = document.getElementById("B").checked;
let c89 = document.getElementById("C").checked;
let d89 = document.getElementById("D").checked;
    if ((a89 === false) && (b89 === false) && (c89 === false) && (d89 === false)) {
	localStorage.setItem("89", "empty")
    }
}
if (r === 90) {
let a90 = document.getElementById("A").checked;
let b90 = document.getElementById("B").checked;
let c90 = document.getElementById("C").checked;
let d90 = document.getElementById("D").checked;
    if ((a90 === false) && (b90 === false) && (c90 === false) && (d90 === false)) {
	localStorage.setItem("90", "empty")
    }
}
if (r === 91) {
let a91 = document.getElementById("A").checked;
let b91 = document.getElementById("B").checked;
let c91 = document.getElementById("C").checked;
let d91 = document.getElementById("D").checked;
    if ((a91 === false) && (b91 === false) && (c91 === false) && (d91 === false)) {
	localStorage.setItem("91", "empty")
    }
}
if (r === 92) {
let a92 = document.getElementById("A").checked;
let b92 = document.getElementById("B").checked;
let c92 = document.getElementById("C").checked;
let d92 = document.getElementById("D").checked;
    if ((a92 === false) && (b92 === false) && (c92 === false) && (d92 === false)) {
	localStorage.setItem("92", "empty")
    }
}
if (r === 93) {
let a93 = document.getElementById("A").checked;
let b93 = document.getElementById("B").checked;
let c93 = document.getElementById("C").checked;
let d93 = document.getElementById("D").checked;
    if ((a93 === false) && (b93 === false) && (c93 === false) && (d93 === false)) {
	localStorage.setItem("93", "empty")
    }
}
if (r === 94) {
let a94 = document.getElementById("A").checked;
let b94 = document.getElementById("B").checked;
let c94 = document.getElementById("C").checked;
let d94 = document.getElementById("D").checked;
    if ((a94 === false) && (b94 === false) && (c94 === false) && (d94 === false)) {
	localStorage.setItem("94", "empty")
    }
}
if (r === 95) {
let a95 = document.getElementById("A").checked;
let b95 = document.getElementById("B").checked;
let c95 = document.getElementById("C").checked;
let d95 = document.getElementById("D").checked;
    if ((a95 === false) && (b95 === false) && (c95 === false) && (d95 === false)) {
	localStorage.setItem("95", "empty")
    }
}
if (r === 96) {
let a96 = document.getElementById("A").checked;
let b96 = document.getElementById("B").checked;
let c96 = document.getElementById("C").checked;
let d96 = document.getElementById("D").checked;
    if ((a96 === false) && (b96 === false) && (c96 === false) && (d96 === false)) {
	localStorage.setItem("96", "empty")
    }
}
if (r === 97) {
let a97 = document.getElementById("A").checked;
let b97 = document.getElementById("B").checked;
let c97 = document.getElementById("C").checked;
let d97 = document.getElementById("D").checked;
    if ((a97 === false) && (b97 === false) && (c97 === false) && (d97 === false)) {
	localStorage.setItem("97", "empty")
    }
}
if (r === 98) {
let a98 = document.getElementById("A").checked;
let b98 = document.getElementById("B").checked;
let c98 = document.getElementById("C").checked;
let d98 = document.getElementById("D").checked;
    if ((a98 === false) && (b98 === false) && (c98 === false) && (d98 === false)) {
	localStorage.setItem("98", "empty")
    }
}
if (r === 99) {
let a99 = document.getElementById("A").checked;
let b99 = document.getElementById("B").checked;
let c99 = document.getElementById("C").checked;
let d99 = document.getElementById("D").checked;
    if ((a99 === false) && (b99 === false) && (c99 === false) && (d99 === false)) {
	localStorage.setItem("99", "empty")
    }
}
if (r === 100) {
let a100 = document.getElementById("A").checked;
let b100 = document.getElementById("B").checked;
let c100 = document.getElementById("C").checked;
let d100 = document.getElementById("D").checked;
    if ((a100 === false) && (b100 === false) && (c100 === false) && (d100 === false)) {
	localStorage.setItem("100", "empty")
    }
}

}