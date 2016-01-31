
var mobNav = new MobileNavigation();

mobNav;

$(function() {
    $('.c-hero__slides').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});