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


    // Menu Toggle
    // ****************
    const burgerToggle = document.getElementById('burger');
    const burgerClose = document.getElementById('burger-close');
    const catalogMenuShow = document.getElementById('catalog-menu');
    const bodyDisableScroll = document.querySelector('body');

    burgerToggle.addEventListener('click', () => {
        catalogMenuShow.classList.add('catalog-menu--show');
        bodyDisableScroll.classList.add('no-scroll');
    });

    burgerClose.addEventListener('click', () => {
        catalogMenuShow.classList.remove('catalog-menu--show');
        bodyDisableScroll.classList.remove('no-scroll');
    });
});