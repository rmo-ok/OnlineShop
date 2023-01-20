 
    function ShowSearchResult() {

        var $win = $(window);
        var $input = $(".js-input");
        var $result = $(".js-searh_result");

        $win.on("click", function (event) {
            if ($input.is(event.target) || $result.has(event.target).length == 1) {
                $result.addClass("d-lg-block");
                $result.addClass("d-md-block");
                $input.css("border-radius", "0 5px 0px 0");
            }
            else {
                $result.removeClass("d-lg-block");
                $result.removeClass("d-md-block");
                $input.css("border-bottom", "none");
            }
        });

        //deleting last search
        $('.js-btn_lastsearch-delete').click(function () {
            $(this).parent().hide();
        });
        ///
    }

    ShowSearchResult();
  ///drop down category in navbar
function Show_Categories() {
    $('.js-category_active,.js-category-container').hover(function () {
        $('.js-category-container').css("display", "block");
        $('.js-cover').css("display", "block");
    }, function () {
        $('.js-category-container').css("display", "none");
        $('.js-cover').css("display", "none");
    }) 
}
Show_Categories();
/////////////////////////////
    function Main_Swiper() {

        const mainswiper = new Swiper('.js-mainswiper', {

            autoplay: {
                delay: 4000,
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },


            slidesPerView: 1,
            spaceBetween: 2,
            // Responsive breakpoints


        });
    }
    Main_Swiper();

    function Wonder_Swiper() {

        const wonderswiper = new Swiper('.wonderswiper', {
            // Optional parameters

            // If we need pagination


            // Navigation arrows
            navigation: {
                nextEl: '.btn-next',
                prevEl: '.btn-prev',
            },


            slidesPerView: 7,
            spaceBetween: 2,
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 2,
                    sliderPerGroup: 1,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 2,
                    sliderPerGroup: 1,
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 5,
                    spaceBetween: 2,
                    sliderPerGroup: 1,
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 2,
                    sliderPerGroup: 10,
                }
            }

        });
    }
    Wonder_Swiper();
   
    function Recommend_Swiper() {

        const recommend = new Swiper('.js-recommend_swiper', {


            slidesPerView: 5,
            spaceBetween: 10,

            // Navigation arrows
            navigation: {
                nextEl: '.js-btn_recommend-next',
                prevEl: '.js-btn_recommend-prev',
            },


            breakpoints: {

                slidesPerView: 5,
                spaceBetween: 2,
                // Responsive breakpoints

                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 2,
                    sliderPerGroup: 1,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                    spaceBetween: 2,
                    sliderPerGroup: 1,
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 2,
                    sliderPerGroup: 1,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 2,
                    sliderPerGroup: 1,
                }

            }

        });
    }
    Recommend_Swiper();
 

    function AddingStyle() {

        var winsize = 0;
        $(window).on('resize', function () {

            winsize = $(window).width();
            if (winsize < 767) {
                $(".js-secondhalf").css({ "margin-top": "51px" })
                $(".js-secondhalf").css({ "margin-bottom": "14px" })
                $(".c-container_icon").css({ "margin-bottom": "41px" });
                $(".js-btn_next").hide();
                $(".js-btn_prev").hide();
            } else {
                $(".js-secondhalf").css({ "margin-top": "0px" });
                $(".js-btn_next").show();
                $(".js-btn_prev").show();
            }

            ////////////////mainslider///////////////

            if (winsize < 770) {

                $(".js-swiper-button-next").css({ 'display': 'none' });
                $(".js-swiper-button-prev").css({ 'display': 'none' });
            }

            //////////////////////////////////////

            ///////////////advertising//////////////////////
            if (winsize < 1024) {
                $(".js-advertinsing_item").css({ "width": "49%" })
            }
            else {
                $(".js-advertinsing_item").css({ 'width': '24%', 'display': 'block', 'margin-left': '5px !important' })
                $('.js-advertinsing').css({ 'justify-content': 'space-between' })
            }
            ////////////////////////////////////////////

            //////////////////////for container class/////////////

            if (winsize < 1009) {
                $('.container').css({ 'min-width': 'unset' });
            }
            ////////////////////////////////////////////
        });
    }
    AddingStyle();


    function Category() {
        var winsize = 0;
        $(window).on('resize', function () {
            winsize = $(document).width();
            if (winsize < 1025) {
                $('.js-category_item').css({ 'width': '90px' });
                $('.js-category_item').css({ 'height': '90px' })
            }
            else {
                $('.js-category_item').css({ 'width': '170px' });
                $('.js-category_item').css({ 'height': '170px' })
            }
            if (winsize < 407) {
                $('.js-category_item').css({ 'margin-left': '23px' });
            }

        });
    }

    Category();

function Brand_Swiper() {

    const brand = new Swiper('.js-brand_swiper', {


        slidesPerView: 6,
        spaceBetween: 10,

        // Navigation arrows
        navigation: {
            nextEl: '.js-brand_next',
            prevEl: '.js-brand_prev',
        },


        breakpoints: {

            slidesPerView: 7,
            spaceBetween: 2,
            // Responsive breakpoints

            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 2,
                sliderPerGroup: 1,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 2,
                sliderPerGroup: 1,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 2,
                sliderPerGroup: 1,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 2,
                sliderPerGroup: 1,
            }

        }

    });

}
Brand_Swiper();



    function More_Sale() {

        const moresale = new Swiper('.js-more_sale-swiper', {


            slidesPerView: 4,
            spaceBetween: 10,

            // Navigation arrows
            navigation: {
                nextEl: '.js-btn_more-sale_next',
                prevEl: '.js-btn_more-sale_prev',
            },


            breakpoints: {


                // Responsive breakpoints

                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    sliderPerGroup: 1,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    sliderPerGroup: 1,
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    sliderPerGroup: 1,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    sliderPerGroup: 1,
                }

            }

        });
    }
    More_Sale();

    function Products() {
        var winsize = 0;
        $(window).on('resize', function () {
            winsize = $(document).width();
            if (winsize < 1024) {

                if (($('.js-products_items').width()) + 300 < 843) {

                    $('.js-products_item').css({ 'width': '100%' });
                    $('.js-products_item').css({ 'border-left': 'unset' });
                    $('.js-product_container').css({ 'justify-content': 'center', 'align-items': 'center' });
                    $('.js-products').css({ 'border': 'unset' });

                } else {
                    $('.js-products').css({ 'border': '1px solid #e4e4e4' });
                }
            }
        });
    }

    Products();

    function QuickSend() {
        var winsize = 0;
        $(window).on('resize', function () {
            winsize = $(document).width();
            if (winsize < 533) {

                $('.js-quick_send-product div').css({ 'width': '56px' });
            }
        });

    }

    QuickSend();

    function DigiClub() {
        $(window).on('resize', function () {
            winsize = $(document).width();
            if (winsize < 400) {

                $('.c-lmp').css({ 'flex-direction': 'column', 'align-items': 'unset' });
                $('.c-lmp .c-lmp_img').css({ 'width': '88%' });
                $('.c-lmp .c-lmp_img img').css({ 'width': '100%', 'height': '100%' });

            }
        });
    }

    DigiClub();

    function Disocunt_Sale() {

        var content = $('.js-discount_sale-products');
        var slide = content.find('.c-discount_sale-products_slide');
        console.log();


        $(window).on('resize', function () {
            winsize = $(document).width();
            if (winsize < 700) {
                $('.js-discount_sale-products .c-discount_sale-products_slide:nth-child(2n)').css({ 'border-left': 'unset' });

            } else {

                $('.js-discount_sale-products .c-discount_sale-products_slide:nth-child(2n)').css({ 'border-left': '1px solid #e4e4e4' });
                $('.c-discount_sale-products .c-discount_sale-products_slide:nth-child(6n)').css({ 'border-left': 'unset' });
            }
        });
    }

    Disocunt_Sale();

 
  
function Btn_Scrool_Up() {
    $('.js-btn_come-up').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 500);
    })
}

Btn_Scrool_Up();

function Enamad_Passages() {

    $(window).on('resize', function () {
        winsize = $(document).width();
        if (winsize < 700) {
            $('.js-discription_footer').css({ 'flex-basis': '100%', 'min-width': '100%' });
            $('.j-enamad').css({ 'flex-basis': '100%', 'min-width': '100%', 'justify-content': 'center' });

        } else {

            $('.js-discription_footer').css({ 'flex-basis': '70%', 'min-width': '70%' });
            $('.j-enamad').css({ 'flex-basis': '30%', 'min-width': '30%' });
        }
    });
}
Enamad_Passages();

function See_More_Btn_Fotter() {

    var content = $('.js-passage_content');

    $('.js-see_more').click(function () {

        if (content.is(':visible')) {

            content.hide(500);
            $(this).html('مشاهده بیشتر');

        } else {

            content.show(500);
            $(this).html('بستن');
        }

    });
}

See_More_Btn_Fotter();


function Logo_in_Footer() {

    $(window).on('resize', function () {
        winsize = $(document).width();
        if (winsize < 800) {
            $('.js-footer_brand-icon').css({ 'flex-basis': '33.33%', 'min-width': '33.33%' });
            $('.js-footer_brand-icon img').css({ 'width': '116%', 'height': '100%' });
            $('.js-digi_express').css({ 'flex-basis': '33.3%', 'min-width': '33.3%' });
            $('.js-digi_express img').css({ 'width': '150%' });
            $('.js-digiaffiliate').css({ 'flex-basis': '100%', 'min-width': '100%' });

        } else {
            $('.js-footer_brand-icon').css({ 'flex-basis': '14.28%', 'min-width': '14.28%' });

            $('.js-footer_brand-icon img').css({ 'width': '80%', 'height': '100%' });
            $('.js-digi_express').css({ 'flex-basis': '50%', 'min-width': '50%' });
            $('.js-digi_express img').css({ 'width': '48%' });

            $('.js-digiaffiliate').css({ 'flex-basis': '50%', 'min-width': '50%' });
        }
    });
}

Logo_in_Footer();