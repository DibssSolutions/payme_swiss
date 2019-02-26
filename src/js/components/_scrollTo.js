import {WIN, ACTIVE} from '../constants';
import {SCROLL_TO} from '../utils';

;(function() {

  let $blockItem = $('.js-navigation-section');
  let link = $('.js-menu-link');

  function onScroll(event) {
    var $scrollPos = WIN.scrollTop();
    $blockItem.each(function() {
      let $that = $(this);
      let id = $that.attr('id');
      let headerHeight = $('.header').innerHeight();
      if (Math.floor($that.offset().top - headerHeight) <= $scrollPos && Math.floor($that.offset().top - headerHeight) + $that.innerHeight() >= $scrollPos) {
        link.removeClass(ACTIVE);
        $('[href="#' + id + '"]').addClass(ACTIVE);
      }

    });
  };

  link.on('click', function(event) {
    event.preventDefault();
    let thisAttr = $(this).attr('href');
    let position = $(thisAttr).offset().top;
    let headerHeight = $('.header').outerHeight();
    SCROLL_TO(Math.floor(position));
  });

  WIN.on('scroll touchend', onScroll);

})();
