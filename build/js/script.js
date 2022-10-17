$(document).ready(function () {
  $('.subheader-slider ').slick({
    prevArrow: "<img src='img/svg/icons/icon-left.svg' class='sudheader_prev' >",
    nextArrow: "<img src='img/svg/icons/icon-right.svg' class='sudheader_next' >"
  });
  $('.discover-block--slider').slick({
    prevArrow: "<img src='img/svg/icons/Chevron-left-large.png' class='discover_prev' >",
    nextArrow: "<img src='img/svg/icons/Chevron-right-large.png' class='discover_next' >",
    dots: true
  });
  $('.retailer_stores-block--slider').slick({
    dots: true,
    arrows: false
  });
  $('.bestseller-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true
  });
  $('.review-slider').slick({
    prevArrow: "<img src='img/svg/icons/icon-left--big.svg' class='review_prev' >",
    nextArrow: "<img src='img/svg/icons/icon-right--big.svg' class='review_next' > ",
    slidesToShow: 2,
    slidesToScroll: 1
  });
  $('.our_categories-slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: false
  });
  $('.meet_our_team-slider').slick({
    prevArrow: "<img src='img/svg/icons/meet_our_team-slider-prev.svg' class='meet_our_team-slider-prev' >",
    nextArrow: "<img src='img/svg/icons/meet_our_team-slider-next.svg' class='meet_our_team-slider-next' > ",
    dots: true,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).data('title');
      return '<span class="dots__item"><span class="dots__number">0' + Number(i + 1) + '</span>' + title + ' </span>';
    },
    dotsClass: 'slider-dots'
  });
});
//# sourceMappingURL=script.js.map
