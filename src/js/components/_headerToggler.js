import { OPEN, BODY } from '../constants';
const close = $('.js-mob-toggler');
const header = $('.js-header');
close.on('click', () => {
  if (!header.hasClass(OPEN)) {
    header.addClass(OPEN);
  }
  else {
    header.removeClass(OPEN);
  }
});


BODY.on('click', e => {
  if ($(e.target).closest(close).length ) return;
  header.removeClass(OPEN);
});
