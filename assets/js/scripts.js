/*********************************************
 * WINDOW EVENTS
/*********************************************/
$(window)
    .on('load', function () {
        pageLoaded();
        headerFixed();
    })
    .on('scroll', function () {
        headerFixed();
        if ($(window).scrollTop() > window.innerHeight) {
            $(".backtop").addClass('show');
        } else {
            $(".backtop").removeClass('show');
        }
    })
/*********************************************/
/*********************************************/
$(document)
    .ready(function () {
        $("menu").load("partial/menu.html");
        $("header").load("partial/header.html");
        $(".footer-section").load("partial/footer.html");
        if ($('.home-page').length) {
            $('header').addClass('home-header');
        }
    })
$(document)
    .on('click', '.backtop', function () {
        $('html, body').animate({
            scrollTop: 0
        });
        return;
        if ($(window).width() > 992) {
            $('body').getNiceScroll().doScrollPos(0, 0);
        } else {
            $('html, body').animate({
                scrollTop: 0
            });
        }
    })
    .on('click', '.nav-btn', function () {
        $('menu .aos-init').removeClass('aos-animate');
        $('body').addClass('menu-opened');
        setTimeout(() => {
            $('menu .aos-init').addClass('aos-animate');
        }, 100);
    })
    .on('click', 'menu .close, menu .overlay', function () {
        $('menu .aos-init').removeClass('aos-animate');
        setTimeout(() => {
            $('body').removeClass('menu-opened');
        }, 350);
    })
    .on('click', '.lang-btn', function() {
        let lang = $('html').attr('lang');
        if (lang == 'en') {
            $(this).text('En');
            $('html').attr('dir', 'rtl').attr('lang', 'ar');
        } else {
            $(this).text('عربي');
            $('html').attr('dir', 'ltr').attr('lang', 'en');
        }
    })
/*********************************************
 * FUNCTIONS
/*********************************************/
function initAos() {
    AOS.init({
        easing: "ease-in-out-sine",
        offset: 0, //($(window).height() * 0.05),
        once: false,
        delay: 200,
        // duration: 1e3,
        duration: 700
    });
}
function pageLoaded() {
    $('#loading').fadeOut(function () {
        if ($(window).width() > 992) {
            // $("body").niceScroll({
            //     background: "#EEE",
            //     cursorcolor: "#801BC5",
            //     cursorborder: "0",
            //     cursorborderradius: "0",
            //     cursorwidth: "8px",
            //     scrollspeed: 80,
            //     zindex: 999,
            //     autohidemode: false
            // });
        }
        initAos();
    })
}
function headerFixed(position = $(window).scrollTop()) {
    if (position > 100) {
        $('header').addClass('fixed');
        $('header .wow').addClass('animated').removeClass('wow');
    } else {
        $('header').removeClass('fixed');
    }
}