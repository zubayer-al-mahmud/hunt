$(function() {



    // ***************** arrow *********** //

    $('.arrow').click(function() {
        $('html,body').animate({
            scrollTop: 0
        })
    })


    // ***************** arrow *********** //




    // ********** navbar ********* //

    $('.banner_img_main').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        prevArrow: '<i class="fa-solid fa-arrow-left prev"></i>',
        nextArrow: '<i class="fa-solid fa-arrow-right next"></i>',
        autoplay: true,
        autoplaySpeed: 1000,

    });

    // ********** navbar ********* //



    // ********* service start *********//


    $('.service_main').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        vertical: true,
        centerMode: true,
        centerPadding: '0',
        prevArrow: '<i class="fa-solid fa-angle-up up"></i>',
        nextArrow: '<i class="fa-solid fa-angle-down down"></i>',
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0',
            }
        }, ],
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0',
            }
        }, ],
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0',
            }
        }, ],
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0',
            }
        }, ],


    });
    // ********* service end *********//





    // ************========== design part start =============***********//

    $('.design_text_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.design_img'
    });
    $('.design_img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.design_text_main',
        vertical: true,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        prevArrow: '<i class="fa-solid fa-angle-up top"></i>',
        nextArrow: '<i class="fa-solid fa-angle-down bottom"></i>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0',
            }
        }, ],
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0',
            }
        }, ],

    });
    // ************========== design part end =============***********//





    // *****************================ pricing plan part start ===========**********//
    $('.count').counterUp({
        delay: 10,
        time: 800
    });
    // *****************================ pricing plan part  end ===========**********//




    // **************** ================ company start ====================**************//

    $('.company_main').slick({

        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0',
            }
        }, ],
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0',
            }
        }, ],
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0',
            }
        }, ],


    });

    // **************** ================ company end ====================**************//

    // ***************  =============== conditions start ====================== ****************//

    $(window).scroll(function() {
        var scrolling = $(this).scrollTop()

        if (scrolling > 10) {
            $('.menu_bg').addClass('nav_bg')
        } else {
            $('.menu_bg').removeClass('nav_bg')
        }

        if (scrolling > 100) {
            $(".arrow").fadeIn("500")
        } else {
            $(".arrow").fadeOut("500")
        }


    })




    // ***************  =============== conditions end ====================== ****************//



    // ======================== pre loader =====================//

    $(window).on('load', function() {
            $(".preloader").delay(1800).fadeOut(400)
        })
        // ======================== pre loader =====================//









})