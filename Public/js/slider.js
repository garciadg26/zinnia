$(document).ready(function(){
    //CAROUCEL BRAND
    $('.brand-carousel').owlCarousel({
        loop:true,
	    // autoplay: true,
        autoplayTimeout:2200,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            1200:{
                items:1
            }
        }
    });

    //CAROUCEL TESTIMONIALS
    $('.owl-carousel').owlCarousel({
        loop:true,
        // autoplay: true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});