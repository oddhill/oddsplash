
$(document).ready(function() {
	$(".background").imgLiquid();

  var box = $('.info');
  var boxHeight = box.outerHeight(false);

  box.css(
    "margin-top", -boxHeight/2
  );

});