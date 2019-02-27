import slick from 'slick-carousel';

$(document).ready(function() {
  /* MOBILE ONLY SLIDER ON MAIN PAGE */

  let timeOut;
  let arrayHref = [];
  const sliderIcons = $('.js-mobile-slider .icon use');
  sliderIcons.each((i, el) => {
    const atr = $(el).attr('xlink:href');
    arrayHref.push(atr);
  });

  var mobSlider = $('.js-mobile-slider');

  /* Initialisation */
  function mobileOnlySlider() {
    $(mobSlider).slick({
      variableWidth: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      mobileFirst: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: 'unslick'
        }
      ]
    });
  }

  $(window).on('load resize orientationchange', function(e) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      for (let i = 0; i <= sliderIcons.length - 1; i++) {
        $(sliderIcons[i]).attr('xlink:href', `${arrayHref[i]}`);
      }
    }, 100);

    if (window.innerWidth < 768) {
      if (!$(mobSlider).hasClass('slick-initialized')) {
        mobileOnlySlider();
      }
    } else {
      if ($(mobSlider).hasClass('slick-initialized')) {
        $(mobSlider).removeClass('slick-initialized');
      }
    }
  });
});
