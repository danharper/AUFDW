$(function() {

	var compose = $('#composemail .compose input');
	var toggleCompose = $('#composemail .compose');
	var toggleTo = $('#composemail .to');
	var toggleMessage = $('#composemail .message');

	var to = $('#to');
	var message = $('#composemail .message textarea');

	// $(toggleTo).hide();
	// $(toggleMessage).hide();
	$('#composemail .compose').hide(); // swap round later

	$(compose).focus(function() {
		$(toggleCompose).hide();
		$(toggleTo).show();
		$(to).focus();
		$(toggleMessage).slideDown();
	});

	$(to).focus(function() {
		$('#composemail .recipients').addClass('highlight');
		$(message).addClass('highlightTop');
	});

	$(to).blur(function() {
		$('#composemail .recipients').removeClass('highlight');
		$(message).removeClass('highlightTop');
	});

	$('#composemail .recipients').click(function() {
		$(to).focus();
	});

	$(to).keypress(function(e) {
		if (e.which === 13) {
			$('<span>' + to.val() + ' <b>x</b></span>').appendTo('#composemail .recipients div');
			$(to).val('');
			return false;
		}
	});

	$('#composemail .recipients span b').live("click", function() {
		$(this).parent().remove();
	});

});
