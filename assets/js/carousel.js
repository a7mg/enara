var navText = [`<svg xmlns="http://www.w3.org/2000/svg" width="32.73" height="32.73" viewBox="0 0 32.73 32.73">
<g id="Group_38732" data-name="Group 38732" transform="translate(16.555 30.73) rotate(-135)">
<path id="Path_7553" data-name="Path 7553" d="M0,20.047,20.584,0" transform="translate(0 0)" fill="none" stroke="#430664" stroke-linecap="round" stroke-width="2"/>
<line id="Line_11" data-name="Line 11" x1="6.682" transform="translate(13.902 0)" fill="none" stroke="#430664" stroke-linecap="round" stroke-width="2"/>
<line id="Line_12" data-name="Line 12" y2="6.075" transform="translate(20.584 0)" fill="none" stroke="#430664" stroke-linecap="round" stroke-width="2"/>
</g>
</svg>`
    , `<svg xmlns="http://www.w3.org/2000/svg" width="32.73" height="32.73" viewBox="0 0 32.73 32.73">
<g id="Group_38732" data-name="Group 38732" transform="translate(16.175 2) rotate(45)">
    <path id="Path_7553" data-name="Path 7553" d="M0,20.047,20.584,0" transform="translate(0 0)" fill="none" stroke="#430664" stroke-linecap="round" stroke-width="2"/>
    <line id="Line_11" data-name="Line 11" x1="6.682" transform="translate(13.902 0)" fill="none" stroke="#430664" stroke-linecap="round" stroke-width="2"/>
    <line id="Line_12" data-name="Line 12" y2="6.075" transform="translate(20.584 0)" fill="none" stroke="#430664" stroke-linecap="round" stroke-width="2"/>
</g>
</svg>`];
$('#Who-use').owlCarousel({
    items: 3,
    // loop: true,
    nav: true,
    dots: false,
    autoplay: false,
    margin: 50,
    responsive: {
        0: {
            items: 1,
            margin: 30
        },
        600: {
            items: 2,
            margin: 40
        },
        1000: {
            items: 3
        },
        1400: {
            items: 4
        }
    },
    navText
});
$('#parents-say').owlCarousel({
    items: 2,
    nav: true,
    dots: false,
    autoplay: false,
    margin: 60,
    responsive: {
        // 0: {
        //     items: 1.25,
        //     margin: 25
        // },
        // 600: {
        //     items: 1.5,
        //     margin: 25
        // },
        // 1700: {
        //     items: 2.2
        // }
        0: {
            items: 1,
            margin: 25
        },
        600: {
            items: 2,
            margin: 25
        },
        1700: {
            items: 2
        }
    },
    navText
});
$('#awards-slider').owlCarousel({
    items: 4,
    nav: false,
    dots: false,
    autoplay: true,
    loop: true,
    margin: 60,
    responsive: {
        0: {
            items: 2,
            margin: 25
        },
        600: {
            items: 3,
            margin: 25
        },
        1000: {
            items: 4
        }
    }
});


var heroHomeCarousel = $('.hero-slider')
    .on('change.owl.carousel', function (e) {
        // if (!e.namespace) return;
        // var carousel = e.relatedTarget;
        // let item = carousel.relative(carousel.current()) + 1;
        $('.hero-slider .aos-init').attr('data-aos-delay', 0);
        // $('.hero-slider .aos-init').attr('data-aos-duration', 300);
        setTimeout(() => {
            $('.hero-slider .aos-init').removeClass('aos-animate');
        }, 150);
    })
    .on('translated.owl.carousel', function (e) {
        setTimeout(() => {
            $('.hero-slider .aos-init').addClass('aos-animate');
        }, 200);
    })
    .owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['', ''],
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: false,
        smartSpeed: 500,
        // animateOut: 'hello'
        // slideTransition: 'fadeIn',
        // onTranslated: checkClasses,
        // onInitialized: checkClasses,
        // navContainer: '#slider-nav'
    });
/**
//////////////////////////////////////
**/
function checkClasses(ele) {
    var total = $(ele.currentTarget).find('.owl-item.active').length;

    $(ele.currentTarget).find('.owl-item').removeClass('firstActiveItem lastActiveItem');

    $(ele.currentTarget).find('.owl-item.active').each(function (index) {
        if (index === 0) {
            $(this).addClass('firstActiveItem');
        }
        if (index === total - 1 && total > 1) {
            $(this).addClass('lastActiveItem');
        }
    });
}