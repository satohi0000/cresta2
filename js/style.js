$("#c-BTN1").on("click", function () {
  $(this).toggleClass("active");
  $(".p-nav-list").toggleClass("open");
  $(".p-mask").toggleClass("open1");
  $("body").toggleClass("no_scroll");
  return false;
});

$(function () {
  var $win = $(window),
    $main = $("main"),
    $nav = $("l-header-inner"),
    navHeight = $nav.outerHeight(),
    navPos = $nav.offset().top,
    fixedClass = "is-fixed";

  $win.on("load scroll", function () {
    var value = $(this).scrollTop();
    if (value > navPos) {
      $nav.addClass(fixedClass);
      $main.css("margin-top", navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css("margin-top", "0");
    }
  });
});
