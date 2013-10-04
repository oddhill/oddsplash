
$(document).ready(function() {
	$(".background").imgLiquid();

  var box = $('.info');
  var boxHeight = box.outerHeight(false);

  console.log(boxHeight);

  box.css(
    "margin-top", -boxHeight/2
  );

});