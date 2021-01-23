/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/slider.js");






document.addEventListener('DOMContentLoaded',() => {

   (0,_slider__WEBPACK_IMPORTED_MODULE_0__.default)({

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

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function slider({ container,slide,nextArrow,prevArrow,totalCounter,currentCounter,wrapper,field }) {

   // Слайдер 

   const slides = document.querySelectorAll(slide),
      slider = document.querySelector(container),
      next = document.querySelector(nextArrow),
      prev = document.querySelector(prevArrow),
      total = document.querySelector(totalCounter),
      current = document.querySelector(currentCounter),
      slidersWrapper = document.querySelector(wrapper),
      slidesField = document.querySelector(field),
      width = window.getComputedStyle(slidersWrapper).width;

   let slidesIndex = 1;
   let offset = 0;

   if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textContent = `0${slidesIndex}`;
   } else {
      total.textContent = slides.length;
      current.textContent = slidesIndex;
   }

   slidesField.style.width = 100 * slides.length + '%';
   slidesField.style.display = 'flex';
   slidesField.style.transition = '0.5s all';

   slidersWrapper.style.overflow = 'hidden';

   slides.forEach(slide => {
      slide.style.width = width;
   });

   slider.style.position = 'relative';

   const indicators = document.createElement('ol'),
      dots = [];
   indicators.classList.add('carousel-indicators');
   indicators.style.cssText = `
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
      display: flex;
      justify-content: center;
      margin-right: 15%;
      margin-left: 15%;
      list-style: none;

   `;
   slider.append(indicators);

   for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('li');
      dot.setAttribute('data-slide-to',i + 1);
      dot.style.cssText = `
         box-sizing: content-box;
         flex: 0 1 auto;
         width: 30px;
         height: 6px;
         margin-right: 3px;
         margin-left: 3px;
         cursor: pointer;
         background-color: #fff;
         background-clip: padding-box;
         border-top: 10px solid transparent;
         border-bottom: 10px solid transparent;
         opacity: .5;
         transition: opacity .6s ease;
   `;

      if (i == 0) {
         dot.style.opacity = 1;
      }
      indicators.append(dot);
      dots.push(dot);
   }

   function changeDotsOpacity() {
      dots.forEach(dot => dot.style.opacity = '0.5');
      dots[slidesIndex - 1].style.opacity = 1;
   }
   function changeCurrentCounter() {
      if (slides.length < 10) {
         current.textContent = `0${slidesIndex}`;
      } else {
         current.textContent = slidesIndex;
      }
   }
   function deleteNotDigints(str) {
      return +str.replace(/\D/g,'');
   }
   next.addEventListener('click',() => {
      if (offset == deleteNotDigints(width) * (slides.length - 1)) {
         offset = 0;
      } else {
         offset += deleteNotDigints(width);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slidesIndex == slides.length) {
         slidesIndex = 1;
      } else {
         slidesIndex++;
      }

      changeCurrentCounter();
      changeDotsOpacity();
   });

   prev.addEventListener('click',() => {
      if (offset == 0) {
         offset = deleteNotDigints(width) * (slides.length - 1);
      } else {
         offset -= deleteNotDigints(width);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slidesIndex == 1) {
         slidesIndex = slides.length;
      } else {
         slidesIndex--;
      }

      changeCurrentCounter();
      changeDotsOpacity();
   });

   dots.forEach(dot => {
      dot.addEventListener('click',(e) => {
         const slideTo = e.target.getAttribute('data-slide-to');

         slidesIndex = slideTo;
         offset = deleteNotDigints(width) * (slideTo - 1);

         slidesField.style.transform = `translateX(-${offset}px)`;

         changeCurrentCounter();
         changeDotsOpacity();
      });
   });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map