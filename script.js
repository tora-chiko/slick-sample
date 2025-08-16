$(function () {
  $(".sample-slick .slick").slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $(".sample-slick-fade .slick").slick({
    infinite: true,
    dots: true,
    arrows: true,
    fade: true,
    cssEase: "linear"
  });
});
