///// Back to Top /////
$(window).on('scroll', function() {
	if ($(this).scrollTop() > 100) {
		$(".back-to-top").fadeIn("slow");
	} else {
		$(".back-to-top").fadeOut("slow");
	}
});
$(".back-to-top").hide().on('click', function() {
	$("html, body").animate({scrollTop: 0}, 750);
});
///// smooth scroll /////
$('a[href*="#"]:not([href="#"])').click(()=>{
	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
		let target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});