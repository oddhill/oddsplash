// Function that centeres the info box.
var centerBox = function() {
  var box = $('.info');
  var boxHeight = box.outerHeight(false);

  box.css({"margin-top": 0 - boxHeight/2});
};

$(document).ready(function() {

  // Fit the background image.
  $(".background").imgLiquid();

  // Center the info box.
  centerBox();

  // Replace svg images with png if the browser doesn't support svg.
  if (!Modernizr.svg) {
    $('img[src$=".svg"]').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
    });
  }

});
