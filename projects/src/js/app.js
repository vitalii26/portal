const filterBtns = document.querySelectorAll('.projects__menu-link');
document.addEventListener('click', (event) => {
	const target = event.target;
	Array.from(filterBtns).forEach((btn) => {
		if (btn.classList.contains('current')) {
			btn.classList.remove('current');
		}
	});

	target.classList.toggle('current');
});