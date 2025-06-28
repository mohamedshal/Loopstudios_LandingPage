let burgerIcon = document.querySelector(".container img");
let lists = document.querySelector("header ul");
let listTitle = document.querySelector("header .list-title");
let links = document.querySelectorAll("header .list-title ul li a");
let burgerState = false;
burgerIcon.addEventListener("click", function () {
	burgerState = !burgerState;
	showState();
	lists.classList.toggle("toggle");
	listTitle.classList.toggle("toggle-list");
	setTimeout(() => {
		links.forEach(link => {
			link.classList.toggle("toggle-link");
		});
	}, 300);
});

function showState() {
	if (burgerState == false) {
		burgerIcon.src = "./images/icon-hamburger.svg";
	} else if (burgerState == true) {
		burgerIcon.src = "./images/icon-close.svg";
	}
}
