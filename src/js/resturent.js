$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                autoplay:true,
                autoplayTimeout:3000,
            },
            600:{
                items:3,
                nav:false,
                autoplay:true,
                autoplayTimeout:3000,
            },
            1000:{
                items:3,
                nav:true,
                loop:true,
                autoplay:true,
                autoplayTimeout:3000,
            }
        }
    })
  
    
    $('#lightSlider').lightSlider({
        item:3,
        loop:true,
        margin:10,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:1000,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:4,
                    auto:true
                  }
            },
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:4,
                    auto:true
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1,
                    loop:true,
                    slideMargin:4,
                    auto:true
                  }
            }
        ]
    });  

    $('#lightSliderTwo').lightSlider({
        item:3,
        loop:true,
        margin:10,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:1000,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:4,
                    auto:true
                  }
            },
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:4,
                    auto:true
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1,
                    loop:true,
                    slideMargin:4,
                    auto:true
                  }
            }
        ]
    });  























})
