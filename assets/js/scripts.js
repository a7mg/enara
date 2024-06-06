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
}, 1000);
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
function openMenu(menu) {
    console.log(menu);
    $(menu).find('.aos-init').removeClass('aos-animate');
    $('body').addClass('menu-opened');
    $(menu).addClass('active');
    setTimeout(() => {
        $(menu).find('.aos-init').addClass('aos-animate');
    }, 100);
}
$(document)
    .on('click', '.backtop', function () {
        $('html, body').animate({
            scrollTop: 0
        });
    })
    .on('click', '.nav-btn', function () {
        openMenu('header + menu');
    })
    .on('click', '.login-btn', function () {
        openMenu('header  menu');
    })
    .on('click', 'menu .close, menu .overlay', function () {
        $('menu .aos-init').removeClass('aos-animate');
        setTimeout(() => {
            $('body').removeClass('menu-opened');
            $('menu').removeClass('active');
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
    .on('click', '.acc-item .head', function () {
        $(this).parent().toggleClass('active');
        $(this).siblings('.acc-content').slideToggle();
    })
    .on('click', '.blog-list-wrapper .filters button', function () {
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
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
    $('.page').css('padding-top', $('header').outerHeight());
    $('#loading').fadeOut(function () {

    })
    animation();
}
function headerFixed(position = $(window).scrollTop()) {
    if (position > 100) {
        $('header').addClass('fixed');
        $('header .wow').addClass('animated').removeClass('wow');
    } else {
        $('header').removeClass('fixed');
    }
}
function animation() {
    initAos();
    if ($('.faq').length) return;
    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    // ScrollTrigger.normalizeScroll(true);
    // let smoother = ScrollSmoother.create({
    //     smooth: 2,
    //     effects: true,
    //     normalizeScroll: true
    // });
}