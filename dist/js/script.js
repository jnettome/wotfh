(function (base, undefined) {
}(window.base = window.base || {}));

$(function () {
  $('.fullscreen-cont').css('height', $(window).innerHeight());
  $(window).on('resize', function () {
    $('.fullscreen-cont').css('height', $(this).innerHeight());
  });
});
