(function() {
    var mobNav = new MobileNavigation();
})();


$(function() {
    $('.c-hero__slides').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});