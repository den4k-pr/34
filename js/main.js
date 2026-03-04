(() => {
  var __webpack_modules__ = {
    486(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        default: () => __WEBPACK_DEFAULT_EXPORT__
      });
      const footer__timer = () => {
        const init = () => {
          const footer = document.getElementById("footer");
          if (!footer) return;
          const handleScroll = () => {
            if (window.scrollY >= 400) footer.classList.add("active"); else footer.classList.remove("active");
          };
          window.addEventListener("scroll", handleScroll);
          handleScroll();
          const hoursEl = footer.querySelector(".footer-timer-item:nth-child(1) .footer-timer-value");
          const minutesEl = footer.querySelector(".footer-timer-item:nth-child(2) .footer-timer-value");
          const secondsEl = footer.querySelector(".footer-timer-item:nth-child(3) .footer-timer-value");
          if (!hoursEl || !minutesEl || !secondsEl) return;
          const STORAGE_KEY = "footer_timer_end";
          const FULL_DURATION = 24 * 60 * 60 * 1e3;
          const startTimer = () => {
            let endTime = parseInt(localStorage.getItem(STORAGE_KEY), 10);
            if (isNaN(endTime) || endTime < Date.now()) {
              endTime = Date.now() + FULL_DURATION;
              localStorage.setItem(STORAGE_KEY, endTime);
            }
            const update = () => {
              let remaining = Math.max(0, endTime - Date.now());
              if (remaining <= 0) {
                endTime = Date.now() + FULL_DURATION;
                localStorage.setItem(STORAGE_KEY, endTime);
                remaining = FULL_DURATION;
              }
              const hrs = Math.floor(remaining / (1e3 * 60 * 60));
              const mins = Math.floor(remaining % (1e3 * 60 * 60) / (1e3 * 60));
              const secs = Math.floor(remaining % (1e3 * 60) / 1e3);
              hoursEl.textContent = String(hrs).padStart(2, "0");
              minutesEl.textContent = String(mins).padStart(2, "0");
              secondsEl.textContent = String(secs).padStart(2, "0");
              requestAnimationFrame(update);
            };
            update();
          };
          startTimer();
        };
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", init);
        } else {
          init();
        }
      };
      const __WEBPACK_DEFAULT_EXPORT__ = footer__timer;
    },
    910(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        default: () => __WEBPACK_DEFAULT_EXPORT__
      });
      const questions__main = () => {
        const init = () => {
          const items = document.querySelectorAll(".questionsContainer-item");
          if (!items.length) return;
          items.forEach(item => {
            const top = item.querySelector(".questionsContainer-item-top");
            const bottom = item.querySelector(".questionsContainer-item-bottom");
            const label = item.querySelector(".label");
            if (!top || !bottom || !label) return;
            bottom.style.maxHeight = "0";
            bottom.style.overflow = "hidden";
            bottom.style.transition = "max-height 0.4s ease";
            top.addEventListener("click", () => {
              const isActive = item.classList.contains("active");
              items.forEach(el => {
                el.classList.remove("active");
                const elBottom = el.querySelector(".questionsContainer-item-bottom");
                const elLabel = el.querySelector(".label");
                if (elBottom) elBottom.style.maxHeight = "0";
                if (elLabel) elLabel.textContent = "+";
              });
              if (!isActive) {
                item.classList.add("active");
                bottom.style.maxHeight = bottom.scrollHeight + "px";
                label.textContent = "–";
              }
            });
          });
        };
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", init);
        } else {
          init();
        }
      };
      const __WEBPACK_DEFAULT_EXPORT__ = questions__main;
    },
    658() {
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
    },
    147(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./footer__timer/footer__timer.js": 486,
        "./questions__main/questions__main.js": 910,
        "./swiper_slider/swiper_slider.js": 658
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        }
        return map[req];
      }
      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };
      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 147;
    },
    980(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      function importAll(r) {
        r.keys().forEach(key => {
          const module = r(key);
          if (module.default) module.default();
        });
      }
      importAll(__webpack_require__(147));
    }
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }
  (() => {
    __webpack_require__.n = module => {
      var getter = module && module.__esModule ? () => module["default"] : () => module;
      __webpack_require__.d(getter, {
        a: getter
      });
      return getter;
    };
  })();
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
        }
      }
    };
  })();
  (() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    __webpack_require__.r = exports => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    };
  })();
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(980);
    var _components__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_0__);
    const CACHE_KEY = "loaded-components-v1";
    document.addEventListener("DOMContentLoaded", async () => {
      console.log("🚀 System initialized");
      initSpecificComponents();
      const cached = getCache();
      const mainComponent = document.querySelector('[data-component="main"]');
      const otherComponents = Array.from(document.querySelectorAll('[data-component]:not([data-component="main"])'));
      if (mainComponent) {
        const id = getComponentId(mainComponent);
        if (!cached[id]) {
          await waitUntilReady(mainComponent);
          cached[id] = true;
          saveCache(cached);
        }
        mainComponent.classList.add("is-ready");
        loadedComponentsCache.set(mainComponent, true);
      }
      requestAnimationFrame(() => {
        revealSequentially(otherComponents, {
          minDelay: 30
        }, cached);
      });
    });
    const loadedComponentsCache = new WeakMap;
    function getCache() {
      try {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
      } catch {
        return {};
      }
    }
    function saveCache(cache) {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    }
    function getComponentId(el) {
      return el.dataset.component;
    }
    function initSpecificComponents() {}
    async function revealSequentially(components, {minDelay = 50} = {}, cached) {
      for (const component of components) {
        const id = getComponentId(component);
        if (!cached[id] && !loadedComponentsCache.has(component)) {
          await waitUntilReady(component);
          loadedComponentsCache.set(component, true);
          cached[id] = true;
          saveCache(cached);
        }
        component.classList.add("is-ready");
        await delay(minDelay);
      }
    }
    function waitUntilReady(component) {
      return new Promise(resolve => {
        const images = Array.from(component.querySelectorAll("img"));
        const videos = Array.from(component.querySelectorAll("video"));
        const total = images.length + videos.length;
        if (total === 0) {
          waitForFonts().then(resolve);
          return;
        }
        let loaded = 0;
        const timeout = setTimeout(resolve, 3e3);
        const check = () => {
          loaded++;
          if (loaded >= total) {
            clearTimeout(timeout);
            waitForFonts().then(resolve);
          }
        };
        images.forEach(img => {
          if (img.complete && img.naturalHeight !== 0) check(); else {
            img.addEventListener("load", check);
            img.addEventListener("error", check);
          }
        });
        videos.forEach(video => {
          if (video.readyState >= 3) check(); else {
            video.addEventListener("loadeddata", check);
            video.addEventListener("error", check);
          }
        });
      });
    }
    function waitForFonts() {
      return document.fonts ? document.fonts.ready : Promise.resolve();
    }
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  })();
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();