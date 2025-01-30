$(document).ready(function () {
  new WOW().init();
});

$(".trigger").click(function (e) {
  e.preventDefault();
  $("body").toggleClass("slip");
  $(".toogle-menu").slideToggle();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    // You can adjust the scroll position threshold
    $("header").addClass("scrolled");
    $(".toogle-menu").slideUp();
    $("body").removeClass("slip");
  } else {
    $("header").removeClass("scrolled");
  }
});

$("#currentYear").text(new Date().getFullYear());
