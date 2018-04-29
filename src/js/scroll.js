require('smoothscroll');

const ele = document.getElementsByClassName('headshot').item(0),
	btn = document.getElementById('back-to-top');

function isScrolledIntoView(el) {
	const rect = el.getBoundingClientRect(),
		elemTop = rect.top,
		elemBottom = rect.bottom;

	let isCompletelyVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight),
		isPartiallyVisible = elemTop < window.innerHeight && elemBottom >= 0;
	return isCompletelyVisible;
}

window.onscroll = function () {
	return isScrolledIntoView(ele) ? btn.style.opacity = "0" : btn.style.opacity = "1";
};
