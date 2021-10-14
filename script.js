let nightbox = document.getElementsByClassName("_nightcolor");
let navbar = document.getElementById("navBar");
let nmbtn = document.getElementById("nm");
var clickcount = 1;

function bgcolor(color) {
	clickcount++;
	if (clickcount % 2 == 0) {
		for (let i = 0; i < nightbox.length; i++) {
			nightbox[i].style.backgroundColor = color;
			if (color == 'black') {
				document.body.style.color = 'white'
			} else {
				document.body.style.color = 'black'
			}
		}
		navbar.classList.remove("navbar-light", "bg-light");
		navbar.classList.add("navbar-dark", "bg-dark");
		nmbtn.style.color = '#26baee'
	} else {
		for (let i = 0; i < nightbox.length; i++) {
			nightbox[i].style.backgroundColor = "white";
			if (color == 'white') {
				document.body.style.color = 'initial'
			} else {
				document.body.style.color = 'black'
			}
		}
		navbar.classList.remove("navbar-dark", "bg-dark");
		navbar.classList.add("navbar-light", "bg-light");
		nmbtn.style.color = 'black'
	}
}
