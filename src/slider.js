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

export default slider;