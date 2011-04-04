$(function() {

	var compose = $('#composemail .compose input');
	var toggleCompose = $('#composemail .compose');
	var toggleTo = $('#composemail .to');
	var toggleMessage = $('#composemail .message');

	var to = $('#composemail .to input');
	var message = $('#composemail .message textarea');

	$(toggleTo).hide();
	$(toggleMessage).hide();

	$(compose).focus(function() {
		$(toggleCompose).hide();
		$(toggleTo).show();
		$(to).focus();
		$(toggleMessage).slideDown();
	});

	$(to).focus(function() {
		$(message).addClass('highlightTop');
	});

	$(to).blur(function() {
		$(message).removeClass('highlightTop');
	});

});
