import { OPEN } from '../constants';

$('.js-mob-toggler').on('click', () => {
  $('.js-header').toggleClass(OPEN);
});
