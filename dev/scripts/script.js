const links = Array.from(document.getElementsByTagName('a'));
links.map(link => {
	link.addEventListener('click', clickLink)
})

let currentPage = document.getElementById('landingPage');

function clickLink(event) {
	event.preventDefault();

	// Change current page based on data-dest attribute
	currentPage.classList.remove('active');
	currentPage = document.getElementById(event.target.dataset.dest);
	currentPage.classList.add('active');
}