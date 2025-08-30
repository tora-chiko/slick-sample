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

// ===== キャプションを1文字ずつ span に分解 =====
$(".caption").each(function () {
  var html = $(this).html(); // <br>対応のため .html()
  $(this).empty();

  html = html.replace(/<br\s*\/?>/gi, "¶"); // 改行マーカーに置換

  Array.from(html).forEach(function (ch) {
    if (ch === "¶") {
      $(this).append("<br>");
    } else {
      $(this).append("<span>" + ch + "</span>");
    }
  }, this);
});

// ===== フェードイン制御 =====
function animateCaption($caption) {
  $caption.find("span").each(function (i) {
    var $span = $(this);
    setTimeout(function () {
      $span.addClass("show");
    }, i * 150);
  });
}

$(".slick").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  $(slick.$slides).find(".caption span").removeClass("show");
});

$(".slick").on("afterChange", function (event, slick, currentSlide) {
  var $caption = $(slick.$slides[currentSlide]).find(".caption");
  animateCaption($caption);
});

// 初期表示用
animateCaption($(".slick .slick-current .caption"));
