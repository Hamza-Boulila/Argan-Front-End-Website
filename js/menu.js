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
    } else {
      $("header").removeClass("navscroll");
    }
  });
});
