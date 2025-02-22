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
}, 3000);

/*********************************************/
var heroVideo;
function importYoutube() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
function onYouTubeIframeAPIReady() {
    let videoElm = $('#heroVideo')
    heroVideo = new YT.Player('heroVideo', {
        videoId: videoElm.data('vid'),
        playerVars: {
            enablejsapi: 1,
            loop: 0,
            rel: 0,
            showinfo: 0,
            fs: 0,
            modestbranding: 0,
            playsinline: 1,
            listType: videoElm.data('vid'),
        },
        events: {
            'onReady': function () {
                if ($('.popup').hasClass('active')) {
                    heroVideo.playVideo();
                }
            },
            'onStateChange': function (e) {
                if (e.data == YT.PlayerState.ENDED) {
                    // heroVideo.seekTo(0);
                    // heroVideo.stopVideo();
                }
            }
        }
    });
}
$(document)
    .on('click', '.hero-content .play', function () {
        // var video = $(this).closest('.hero-content').find('video');
        // video.get(0).play();
        // $(this).parent().addClass('playing')
        openMenu('.popup');
        setTimeout(() => {
            heroVideo?.playVideo();
        }, 500);
    })
    .on('click', '.popup .close', function () {
        heroVideo?.pauseVideo();
        // heroVideo?.pauseVideo();
        $('.popup').find('.aos-init').removeClass('aos-animate');
        setTimeout(() => {
            $('body').removeClass('menu-opened');
            $('.popup').removeClass('active');
        }, 350);
    })

/*********************************************/
/*********************************************/
$(document)
    .ready(function () {
        importYoutube();
        animation();
        if (location.href.includes('127.0.0.1')) {
            $("menu").load("partial/menu.html");
            $("header").load("partial/header.html");
            $(".footer-section").load("partial/footer.html");
        }
        if (!$('.home-page').length) {
            $('header').removeClass('home-header');
        }
        var lang = localStorage.getItem('language') || 'en';
        $('html').attr('dir', lang == 'en' ? 'ltr' : 'rtl').attr('lang', lang);
        setTimeout(() => {
            $('.lang-btn').text(lang == 'ar' ? 'En' : 'عربي');
        }, 100);
    })
function openMenu(menu) {
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
        $('menu, .popup').find('.aos-init').removeClass('aos-animate');
        setTimeout(() => {
            $('body').removeClass('menu-opened');
            $('menu').removeClass('active');
        }, 350);
    })
    .on('click', '.lang-btn', function () {
        let lang = $('html').attr('lang');
        if (lang == 'en') {
            // $(this).text('En');
            // $('html').attr('dir', 'rtl').attr('lang', 'ar');
            localStorage.setItem('language', 'ar');
        } else {
            // $(this).text('عربي');
            // $('html').attr('dir', 'ltr').attr('lang', 'en');
            localStorage.setItem('language', 'en');
        }
        location.reload();
    })
    .on('click', '.acc-item .head', function () {
        $(this).parent().toggleClass('active');
        $(this).siblings('.acc-content').slideToggle();
    })
    .on('click', '.blog-list-wrapper .filters button', function () {
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
    })

$(document).ready(function () {
    let isDown = false;
    let startX;
    let scrollLeft;
    const slider = $(".blog-list-wrapper .filters");

    function startDrag(e) {
        isDown = true;
        slider.css("cursor", "grabbing");
        startX = e.pageX || e.originalEvent.touches[0].pageX;
        scrollLeft = slider.scrollLeft();
    }

    function moveDrag(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX || e.originalEvent.touches[0].pageX;
        const walk = (x - startX) * 2; // Adjust scroll speed
        slider.scrollLeft(scrollLeft - walk);
    }

    function stopDrag() {
        isDown = false;
        slider.css("cursor", "grab");
    }

    // Mouse Events
    slider.mousedown(startDrag);
    $(document).mousemove(moveDrag);
    $(document).mouseup(stopDrag);

    // Touch Events (For Mobile)
    slider.on("touchstart", startDrag);
    slider.on("touchmove", moveDrag);
    slider.on("touchend", stopDrag);
});
// const video = document.querySelector(".hero-content video");

// video.addEventListener("pause", (event) => {
//     $('.media-container').removeClass('playing');
// });
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
    // $('.page').css('padding-top', $('header').outerHeight());
    $('#loading').fadeOut(function () {

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

if ($('#gallery-container').length) {
    lightGallery(document.getElementById("gallery-container"), {
        //   speed: 500,
        toggleThumb: true,
        thumbnail: true,
        plugins: [lgVideo, lgThumbnail],
    });
}
if ($('#media-gallery').length) {
    lightGallery(document.getElementById("media-gallery"), {
        //   speed: 500,
        toggleThumb: true,
        thumbnail: true,
        plugins: [lgVideo, lgThumbnail],
    });
}