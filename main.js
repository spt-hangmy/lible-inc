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
});
