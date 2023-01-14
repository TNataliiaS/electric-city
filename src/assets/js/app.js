'use strict';
document.addEventListener('DOMContentLoaded', function () {

    // Site-nav Slider (swiper js https://swiperjs.com/ )
    // ****************
    const SiteNavSwiperSlider = new Swiper('.site-nav', {
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        speed: 800,
        navigation: {
            nextEl: '.site-nav__btn--next',
            prevEl: '.site-nav__btn--prev'
        },
    });
});