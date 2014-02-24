(function (base, undefined) {
}(window.base = window.base || {}));

$(function () {
  $(window).on('resize load', function () {
    $('.fullscreen-cont').css('height', $(this).innerHeight());
  });
});
