$(document).ready(function() {
  //

  $(".menu-toggler").on("click", function() {
    $(this).toggleClass("open");
    $("body").toggleClass("hidden");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .link").on("click", function() {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  //
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 508) {
      $("header").addClass("navscroll");
      if ($(window).width() < 1200) $(".menu-toggler").addClass("navscroll");
    } else {
      if ($(window).width() < 1200) $(".menu-toggler").removeClass("navscroll");
      $("header").removeClass("navscroll");
    }
  });
});
