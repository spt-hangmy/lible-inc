$(document).ready(function () {
  $(".wrap-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    dots: true,
    centerMode: true,
    arrows: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  });

  $("#toggle-menu").click(function () {
    $(".wrap-menu-mb").slideToggle();
    $(".menu-icon, .close-icon").toggle();

    // Thêm hoặc xóa lớp chặn scroll cho body
    $("body").toggleClass("no-scroll");
  });

  $(".close").click(function () {
    $(".wrap-menu-mb").slideUp();
    $(".menu-icon, .close-icon").toggle();

    // Xóa lớp chặn scroll khi đóng menu
    $("body").removeClass("no-scroll");
  });
});
