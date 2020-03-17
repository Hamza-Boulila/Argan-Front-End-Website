//* Slideshow
var mySlider = new KiwwwiSlider(
  document.querySelectorAll("#slider")[0],
  3000,
  1.5
);
// *
$(document).ready(function() {
  $("header .search img").click(function() {
    $("input[type=text]").focus();
  });
});
//*
