$(document).ready(function(){$(" .main-slide__list .owl-carousel").owlCarousel({loop:!0,nav:!1,dots:!0,items:1}),$(" .main-testimonial .owl-carousel").owlCarousel({loop:!0,navigation:!0,nav:!0,dots:!1,items:1,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(" .main-trademark__list .owl-carousel").owlCarousel({loop:!0,navigation:!0,dots:!1,margin:36,items:5,responsive:{0:{items:2},600:{items:2},1e3:{items:5}}}),$("body").on("click",".nav-mobi ",function(e){$(".header-nav__link  .list-link ").toggleClass("active")}),$("body").on("click",".close ",function(e){$(".header-nav__link  .list-link ").removeClass("active")}),$("body").on("click",".search-mobi ",function(e){$(".header-nav__search .search_form").toggleClass("active")}),$("body").on("click",".close ",function(e){$(".header-nav__search .search_form").removeClass("active")}),$("body").on("click",".nav-mobi ",function(e){e.preventDefault(),$(".header-nav__link  .list-link ").toggleClass("click")})}),$(window).scroll(function(){$(window).scrollTop();$(this).scrollTop()>150?($(".header-nav").addClass("active"),$("#myImg").attr("src","./assets/images/logo-scroll.png"),$(".header-nav__hotline-cart").find(".hotline").attr("src","./assets/images/user-white.png"),$(".header-nav__hotline-cart").find(".cart").attr("src","./assets/images/cart-white.png"),$(".list-link a").css("color","white")):($(".header-nav").removeClass("active"),$("#myImg").attr("src","./assets/images/logo-header.png"),$(".header-nav__hotline-cart").find(".hotline").attr("src","./assets/images/Shape.png"),$(".header-nav__hotline-cart").find(".cart").attr("src","./assets/images/Group.png"),$(".list-link a").css("color","#111"))});