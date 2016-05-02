$(document).ready(function() {
  $("h1").addClass("animated bounce");
  $('[data-toggle="tooltip"]').tooltip(); 
});
  ///// collapse menu /////
$(document).on('click', function() {
  $('.collapse').collapse('hide');
});
  ///// Back to Top /////
$(".back-to-top").hide();
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});
$(".back-to-top").on('click', function() {
  $("html, body").animate({scrollTop: 0}, 750);
});
  ///// smooth scroll /////
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('.collapse').collapse('hide');
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  /////////////