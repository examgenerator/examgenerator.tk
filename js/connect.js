function generate() {
	var terms;
	terms = document.getElementById("terms").value;
	sessionStorage.setItem("terms", terms);
	var definitions;
	definitions = document.getElementById("definitions").value;
	sessionStorage.setItem("definitions", definitions);
	var outputWindow = window.open("connect-generated.html");
}