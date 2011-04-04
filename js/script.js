$(function() {

	var to = $('#composemail .to input');
	var message = $('#composemail .message textarea');

	$(to).focus(function() {
		$(message).addClass('highlightTop');
	});

	$(to).blur(function() {
		$(message).removeClass('highlightTop');
	});

});
