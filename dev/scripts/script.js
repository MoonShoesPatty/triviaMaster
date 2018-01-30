// Inital page - landing
let currentPage = document.getElementById('landingPage');
// last page - used to transition off screen
let lastPage;

// Array of links that change the page - based on className "pageChange"
const links = Array.from(document.querySelectorAll('.pageChange'));

// Set up event listeners for page changing links
links.map(link => link.addEventListener('click', pageChangeLink));

// Click a link that changes the page
function pageChangeLink(event) {
	event.preventDefault();

	// Change current page based on data-dest attribute of clicked link
	lastPage = currentPage;
	lastPage.classList.remove('active');
	lastPage.classList.add('removing');
	lastPage.addEventListener('transitionend', () => {lastPage.classList.remove('removing')})
	currentPage = document.getElementById(event.target.dataset.dest);
	currentPage.classList.add('active');
}