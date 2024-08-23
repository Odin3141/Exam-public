function studentAuthentication() { 
  let Username = 
Number (document.getElementById("Username").value);
  let Password = 
String(document.getElementById("Password").value);
  if (isNaN(Username)) {
	  if (Username === "Kolade" || Password === "Juve2009" ) {
	  window.location="dashboard.html" 
	  }
        else {	  
	  document.getElementById("error0").innerHTML = "You entered an invalid username or password!";
        }
  
  }
}