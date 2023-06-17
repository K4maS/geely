// slider hero
$(".hero__slider").slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    swipe: true,
});
// offer horizontal slider
$(".offer__h-slider").slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    swipe: false,
});
// offer vertical slider
$(".offer__v-slider").slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    vertical: true,
    verticalSwiping: true,
    swipe: false,
});
// on click burger btn
$('.burger').on('click', () => {
    $('body').addClass('overflow-hidden');
    $('.blackout').addClass('blackout--active');
    $('.nav__right-list').addClass('nav__right-list--active');
})
// on click blackout
$('.blackout').on('click', () => {
    $('.blackout').removeClass('blackout--active');
    $('.nav__right-list').removeClass('nav__right-list--active');
    $('body').removeClass('overflow-hidden');
})
// on click link of menu
$('.nav__right-list a').on('click', () => {
    $('.blackout').removeClass('blackout--active');
    $('.nav__right-list').removeClass('nav__right-list--active');
    $('body').removeClass('overflow-hidden');
})