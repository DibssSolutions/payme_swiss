import slick from 'slick-carousel';
import { mediaWidth } from '../utils';
import { WIN } from '../constants';

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

  const options = {
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false
  };

  const detectWindowWidth = () => {
    const initSlider = $('.js-mobile-slider.slick-slider');
    if (mediaWidth(768)) {
      if (initSlider.length) return;
      mobSlider.slick(options);
    } else {
      if (!initSlider.length) return;
      mobSlider.slick('unslick');
    }
  };

  detectWindowWidth();

  let sliderMobTimeout;

  WIN.resize(() => {
    clearTimeout(sliderMobTimeout);
    sliderMobTimeout = setTimeout(detectWindowWidth, 100);
  });

  WIN.on('load resize orientationchange', function(e) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      for (let i = 0; i <= sliderIcons.length - 1; i++) {
        $(sliderIcons[i]).attr('xlink:href', `${arrayHref[i]}`);
      }
    }, 120);
  });

});
