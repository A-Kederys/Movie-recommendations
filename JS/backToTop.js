$(document).ready(function(){
	var $backToTop = $(".back-to-top");
	$backToTop.hide();


	$(window).on('scroll', function() {
	  if ($(this).scrollTop() > 500) {
		$backToTop.fadeIn({queue: false, duration: 800});
	  } else {
		$backToTop.fadeOut({queue: false, duration: 200});
	  }
	});

	$backToTop.on('click', function(e) {
	  $("html, body").animate({scrollTop: 0}, 300);
	});
});