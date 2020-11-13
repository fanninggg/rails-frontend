const updateNavbarOnScroll = () => {
	const nav = document.getElementById('navbar');
	console.log(nav)
	document.addEventListener('scroll', () => {
		if(window.scrollY >= window.innerHeight) {
			nav.classList.add('navbar-lewagon-white')
		} else {
			nav.classList.remove('navbar-lewagon-white')
		}
	})
}

export { updateNavbarOnScroll }