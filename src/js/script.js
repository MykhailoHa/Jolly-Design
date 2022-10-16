
$(document).ready(function(){
    $('.subheader-slider ').slick({
        prevArrow: "<img src='img/svg/icons/icon-left.svg' class='sudheader_prev' >",
        nextArrow: "<img src='img/svg/icons/icon-right.svg' class='sudheader_next' >",
    })
    $('.discover-block--slider').slick({
        prevArrow: "<img src='img/svg/icons/Chevron-left-large.png' class='discover_prev' >",
        nextArrow: "<img src='img/svg/icons/Chevron-right-large.png' class='discover_next' >",
        dots: true
    })
    $('.retailer_stores-block--slider').slick({
        dots: true,
        arrows: false
    })
    $('.bestseller-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow :3,
        slidesToScroll:1,
        centerMode : true,
        focusOnSelect: true,
        variableWidth: true
    })
    $('.review-slider').slick({
        prevArrow: "<img src='img/svg/icons/icon-left--big.svg' class='review_prev' >",
        nextArrow: "<img src='img/svg/icons/icon-right--big.svg' class='review_next' > ",
        slidesToShow:2,
        slidesToScroll:1
    })
    $('.our_categories-slider').slick({
        arrows: false,
        slidesToShow :4,
        infinite :false,
    })
});
