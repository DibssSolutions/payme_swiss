// var Rellax = require('rellax');
// console.log(Rellax);
// var rellax = new Rellax('.rellax');

import { TimelineMax, TweenMax } from 'gsap/all';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';

// var tween = TweenMax.staggerTo('.rellax', 1, { y: '+=150' }, 0.2);

var scrollProcessController = new ScrollMagic.Controller();
var scene_1 = new ScrollMagic.Scene({
  triggerElement: '.prepaid',
  duration: 300
})
  .addIndicators({ name: '2, duration: 300' })
  .addTo(scrollProcessController)
  .setTween('.rellax-1', 1, { y: '+=100' });
// .reverse(false);
// .setTween('.rellax-2', 1, { y: '+=150' })
// .setTween('.rellax-3', 1, { y: '+=100' });
// .setTween('.rellax-4', 1, { y: '+=50' });
// .addTween(tween);

var scene_2 = new ScrollMagic.Scene({
  triggerElement: '.prepaid',
  duration: 300
})
  .addIndicators({ name: '2, duration: 300' })
  .addTo(scrollProcessController)
  .setTween('.rellax-2', 1, { y: '+=75' }, { y: '-=150' });
// .reverse(false);

var scene_3 = new ScrollMagic.Scene({
  triggerElement: '.prepaid',
  duration: 300
})
  .addIndicators({ name: '2, duration: 300' })
  .addTo(scrollProcessController)
  .setTween('.rellax-3', 1, { y: '+=50' });
// .reverse(false);

var scene_4 = new ScrollMagic.Scene({
  triggerElement: '.prepaid',
  duration: 300
})
  .addIndicators({ name: '2, duration: 300' })
  .addTo(scrollProcessController)
  .setTween('.rellax-4', 1, { y: '+=25' });
// .reverse(false);

// =====================================================================
var btnAnimationController = new ScrollMagic.Controller();
var btn_scene = new ScrollMagic.Scene({
  triggerElement: '.solutions'
})
  .addIndicators({ name: '2, duration: 300' })
  .setClassToggle('.js-solutions-btn', 'is-animate')
  .reverse(false)
  .addTo(btnAnimationController);

// btn_scene.on('enter', function(event) {
//   $('.js-solutions-btn').addClass('is-animate');
// });
