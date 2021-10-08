$(document).ready(function() {
    $(' .main-slide__list .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,

    });
    $(' .main-testimonial .owl-carousel').owlCarousel({
        loop: true,
        navigation: true,
        nav: true,
        dots: true,
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('body').on('click', '.nav-mobi ', function(e) {
        $('.header-nav__link  .list-link ').toggleClass('active');
    });
    $('body').on('click', '.close ', function(e) {
        $('.header-nav__link  .list-link ').removeClass('active');
    });
    // seach
    $('body').on('click', '.search-mobi ', function(e) {
        $('.header-nav__search .search_form').toggleClass('active');
    });
    $('body').on('click', '.close ', function(e) {
        $('.header-nav__search .search_form').removeClass('active');
    });
    $('body').on('click', '.nav-mobi ', function(e) {
        e.preventDefault();
        $('.header-nav__link  .list-link ').toggleClass('click');

    });
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if ($(this).scrollTop() > 150) {
        $(".header-nav").addClass("active");
        $("#myImg").attr("src", "./assets/images/logo-scroll.png");
        $('.header-nav__hotline-cart').find('.hotline').attr("src", "./assets/images/user-white.png");
        $('.header-nav__hotline-cart').find('.cart').attr("src", "./assets/images/cart-white.png");
        $('.list-link a').css('color', 'white');
        // $('.list-link ').css('background', '#4B845E')
    } else {
        $(".header-nav").removeClass("active");
        $("#myImg").attr("src", "./assets/images/logo-header.png");
        $('.header-nav__hotline-cart').find('.hotline').attr("src", "./assets/images/Shape.png");
        $('.header-nav__hotline-cart').find('.cart').attr("src", "./assets/images/Group.png");
        $('.list-link a').css('color', '#111');
        // $('.list-link ').css('background', '#e1ede5')


    }

});