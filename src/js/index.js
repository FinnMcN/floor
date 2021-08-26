$(document).ready(function() {
    var swiperPrice;
    new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".work__slider-next",
            prevEl: ".work__slider-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    new Swiper(".quality__slider", {
        centeredSlides: true,
        slidesPerView: 3,
        loop: true,
        pagination: {
            el: ".quality__slider-pagination",
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 40,
            },

            767: {
                slidesPerView: 2,
            },

            1055: {
                slidesPerView: 3,
            },
        },
    });

    //animation
    AOS.init({
        disable: "mobile",
    });

    
    //accrodion
    $(".questions__item").each(function () {
        let context = this;
        $(".questions__item-dropbtn", this).on("click", function () {
            $(context).toggleClass("active");
            $(".questions__item-answer", context).slideToggle();
        });
    })
    $(".header__menu-icon").on("click", function () {
        $(".header__nav, .header__menu-icon, body").toggleClass("active");
    });
    function enableSwiper() {
        swiperPrice = new Swiper(".services__swiper-mobile", {
            slidesPerView: 1,
            freeMode: true,
        });
    }
    function toggleSwiper(width) {
        if (width <= 480) {
            if (swiperPrice === undefined) {
                enableSwiper();                             
            }
        } else { 
            if (swiperPrice !== undefined) {
                swiperPrice.destroy(true, true);                   
                swiperPrice = undefined;         
            } 
                  
            
        }
    }
    function adaptive_materials(width) {
        if (width <= 540) {
            if (!$(".materials__img-items").hasClass("done")) {
                $(".materials__img-items").addClass("done").insertAfter(".materials__img");
            }
        } else {
            if ($(".materials__img-items").hasClass("done")) {
                $(".materials__img-items").removeClass("done").appendTo(".materials__img");
            }
        }
    } 
    function adaptive_header(width) {
        if (width >= 1400) {
            if (!$(".header__main-offer").hasClass("lock")) {
                $(".header__main-offer").addClass("lock").appendTo(".header__main-container");
            }
        } else {
            if ($(".header__main-offer").hasClass("lock")) {
                $(".header__main-offer").removeClass("lock").prependTo(".header__main");
            }
        }
        if (width <= 768) {
            if (!$(".header__main-offer").hasClass("done")) {
                $(".header__main-offer").addClass("done").appendTo(".header__main-container");
            }
        } else {
            if ($(".header__main-offer").hasClass("done")) {
                $(".header__main-offer").removeClass("done").prependTo(".header__main");
            }
        }
    }
    
    function adaptive_function() {
        let w = $(window).outerWidth();
        adaptive_header(w);
        adaptive_materials(w);
        toggleSwiper(w);
    }
    $(window).resize(function (event) {
        adaptive_function();
    });
    adaptive_function();
});