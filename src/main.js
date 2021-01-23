'use strict';

import slider from './slider';



document.addEventListener('DOMContentLoaded',() => {

   slider({

      container: '.offer__slider',
      nextArrow: '.offer__slider-next',
      prevArrow: '.offer__slider-prev',
      totalCounter: '#total',
      currentCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      field: '.offer__slider-inner',
      slide: '.offer__slide'

   });
});