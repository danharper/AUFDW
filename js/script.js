$(function() {

	var to = $('#composemail input.to');
	var message = $('#composemail textarea.message');

	$(to).focus(function() {
		$(message).addClass('highlightTop');
	});

	$(to).blur(function() {
		$(message).removeClass('highlightTop');
	});

});
