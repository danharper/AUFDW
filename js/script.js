$(function() {

	var compose = $('#composemail .compose input');
	var toggleCompose = $('#composemail .compose');
	var toggleTo = $('#composemail .to');
	var toggleMessage = $('#composemail .message');
	var toggleSubmit = $('#composemail .submit');

	var to = $('#to');
	var message = $('#composemail .message textarea');
	var recipients = $('#composemail .recipients span');

	$(toggleTo).hide();
	$(toggleMessage).hide();
	$(toggleSubmit).hide();
	// $('#composemail .compose').hide(); // swap round later

	$(compose).focus(function() {
		$(toggleCompose).hide();
		$(toggleTo).show();
		$(to).focus();
		$(toggleMessage).slideDown();
		$(toggleSubmit).slideDown();
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

	// Add name to list
	$(to).keypress(function(e) {
		if (e.which === 13) {
			if ($(to).val().length > 0) {
				$('<span>' + to.val() + ' <b>x</b></span>').appendTo('#composemail .recipients div');
				$(to).val('');
			}
			return false;
		}
	});

	// Remove last name from list on backspace, if textbox is empty
	$(to).keydown(function(e) {
		if (e.which === 8) {
			input = $(to).val();
			if (input.length === 0 && recipients.length > 0) {
				$(recipients).last().remove();
			}
		}
	});

	$('#composemail .recipients span b').live("click", function() {
		$(this).parent().remove();
	});

	// Nothing in the boxes? Close it.
	$(message).blur(function() {
		recipients = $('#composemail .recipients span');
		if ($(to).val().length === 0 && recipients.length === 0 && $(message).val().length === 0) {
			$(toggleTo).hide();
			$(toggleCompose).show();
			$(toggleMessage).slideUp();
			$(toggleSubmit).slideUp();
		}
	});

	// cancel link, clear inputs & slide back up
	$('#composemail .submit a').click(function() {
			$(recipients).remove();
			$(to).val('');
			$(message).val('');
			$(toggleTo).hide();
			$(toggleCompose).show();
			$(toggleMessage).slideUp();
			$(toggleSubmit).slideUp();
			return false;
	});

});
