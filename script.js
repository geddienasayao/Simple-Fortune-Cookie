$(document).ready(function() {
	$('img').hover(function() {
		console.log(source);
		var altsrc= $(this).attr('data-alt-src');
		$(this).attr('src', altsrc);
    	}, function(){
    	$(this).attr('src', "/images/cookie.jpg");
	});
})