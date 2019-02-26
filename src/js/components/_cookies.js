import { DOC, OPEN } from '../constants';

DOC.ready(() => {
  setTimeout(() => $('.js-cookies').addClass(OPEN), 1000);
  setTimeout(() => $('.js-cookies').removeClass(OPEN), 3000);
});

