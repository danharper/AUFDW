$(function() {

  // var composemail = $('#composemail input[type=text], #composemail textarea');

  // $(composemail).focus(function() {
    // $(this).addClass('focus');
  // });

  // $(composemail).blur(function() {
    // $(this).removeClass('focus');
  // });

  var to = $('#composemail label[for=to], #composemail input[name=to]');
  var message = $('#composemail label[for=message], #composemail textarea');

  $(to).focus(function() {
    $(this).addClass('addBorder');
    $(message).addClass('removeBorder');
  });

  $(to).blur(function() {
    $(this).removeClass('addBorder');
    $(message).removeClass('removeBorder');
  });

});
