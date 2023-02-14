"use strict";

var swiper = new Swiper(".course-swiper", {
  autoplay: {
    disableOnInteraction: false,
    delay: 0
  },
  speed: 1500,
  loop: true,
  spaceBetween: 16,
  slidesPerView: 3,
  //多欄
  breakpoints: {
    768: {
      slidesPerView: 6
    },
    992: {
      slidesPerView: 9
    }
  }
});
"use strict";

var swiper1 = new Swiper(".Swiper1", {
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
    reverseDirection: false
  },
  speed: 1500,
  loop: true,
  spaceBetween: 16,
  slidesPerView: 3,
  //多欄
  breakpoints: {
    768: {
      slidesPerView: 6
    },
    992: {
      slidesPerView: 9
    }
  }
});
var swiper2 = new Swiper(".Swiper2", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: true
});
//# sourceMappingURL=all.js.map
