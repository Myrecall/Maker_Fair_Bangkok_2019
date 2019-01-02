$('.owl-carousel').owlCarousel({
    loop:true,
    autoWidth:true,
    center:false,
    autoplayHoverPause:true,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        515:{
            items:3,
        },
        768:{
            items:4,
        },
        1000:{
            items:7,
            center:false,
            autoplay: false,
            autoHeight:true,
            loop:false,
        }
    }
})