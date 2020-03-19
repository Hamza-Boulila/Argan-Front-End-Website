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

  //

  $(".menu-toggler").on("click", function() {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .link").on("click", function() {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  //
});
//*
