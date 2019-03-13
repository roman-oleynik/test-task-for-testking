$(document).ready(function() {
    var scrolled = 0;
    $('.slider-container__button_right').on('click', function() {
        scrolled-=210;
        if(scrolled < -420) {
			scrolled = 0;
        }
        if (scrolled === 0) {
            $('.slider-pagination__page').removeClass('slider-pagination__page_active');
            $('.slider-pagination__page-1').addClass('slider-pagination__page_active');
        }
        else if (scrolled === -210) {
            $('.slider-pagination__page').removeClass('slider-pagination__page_active');
            $('.slider-pagination__page-2').addClass('slider-pagination__page_active');
        }
        else if (scrolled === -420) {
            $('.slider-pagination__page').removeClass('slider-pagination__page_active');
            $('.slider-pagination__page-3').addClass('slider-pagination__page_active');
        }
        $('.slider-container-slides-only').css('left', scrolled + 'px')
        $('.slider-container-slides-only').css('transition', '0.3s')
    });
    $('.slider-container__button_left').on('click', function() {
        scrolled+=210;
        if(scrolled > 0) {
			scrolled = -420;
        }
        if (scrolled === 0) {
            $('.slider-pagination__page').removeClass('slider-pagination__page_active');
            $('.slider-pagination__page-1').addClass('slider-pagination__page_active');
        }
        else if (scrolled === -210) {
            $('.slider-pagination__page').removeClass('slider-pagination__page_active');
            $('.slider-pagination__page-2').addClass('slider-pagination__page_active');
        }
        else if (scrolled === -420) {
            $('.slider-pagination__page').removeClass('slider-pagination__page_active');
            $('.slider-pagination__page-3').addClass('slider-pagination__page_active');
        }
        
        $('.slider-container-slides-only').css('left', scrolled + 'px')
        $('.slider-container-slides-only').css('transition', '0.3s')
    });

    $('.about-course__button').on('click', function() {
        $('.about-text-container').removeClass('about-course__text-container');
        $('.about-text-container').addClass('about-course__text-container_full');
        $('.about-course__button').css('display', 'none');
    });
});