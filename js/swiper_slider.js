(() => {
  var __webpack_exports__ = {};
  const slider = new Swiper(".main-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 500,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      550: {
        slidesPerView: 3.5
      },
      650: {
        slidesPerView: 4
      },
      750: {
        slidesPerView: 4.5
      },
      850: {
        slidesPerView: 5
      },
      950: {
        slidesPerView: 5.5
      },
      1050: {
        slidesPerView: 6
      },
      1150: {
        slidesPerView: 6.5
      },
      1250: {
        slidesPerView: 7
      }
    },
    watchOverflow: true,
    observer: true,
    observeParents: true,
    resizeObserver: true,
    on: {
      reachEnd: function() {
        setTimeout(() => {
          this.slideTo(0, 0, false);
        }, 200);
      }
    },
    grabCursor: true,
    resistanceRatio: .6
  });
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();