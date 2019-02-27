import { DOC, OPEN } from '../constants';
import Cookies from 'js-cookie';

DOC.ready(() => {
  var container = $('.js-cookies');
  var btn = $('.js-cookies-btn');

  var stateCookies = Cookies.get('visited');
  if (!+stateCookies) container.addClass(OPEN);
  btn.on('click', () => {
    Cookies.set('visited', 1);
    container.removeClass(OPEN);
  });
});
