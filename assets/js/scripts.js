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
setTimeout(() => {
    pageLoaded();
    headerFixed();
}, 4000);
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
    .on('click', '.lang-btn', function () {
        let lang = $('html').attr('lang');
        if (lang == 'en') {
            $(this).text('En');
            $('html').attr('dir', 'rtl').attr('lang', 'ar');
        } else {
            $(this).text('عربي');
            $('html').attr('dir', 'ltr').attr('lang', 'en');
        }
    })
    .on('click', '.acc-item .head', function() {
        $(this).parent().toggleClass('active');
        $(this).siblings('.acc-content').slideToggle();
    })
/*********************************************
 * FUNCTIONS
/*********************************************/
function initAos() {
    AOS.init({
        easing: "ease-in-out-sine",
        offset: 0, //($(window).height() * 0.05),
        once: true,
        delay: 200,
        // duration: 1e3,
        duration: 700
    });
}
function pageLoaded() {
    $('.page').css('margin-top', $('header').outerHeight());
    $('#loading').fadeOut(function () {
        if ($(window).width() > 992) {
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