import Swiper from "swiper";
import { Keyboard, Navigation } from "swiper/modules";

/** @type {HTMLDivElement} */
const licensesSlider = document.querySelector(".licenses-slider");

if (licensesSlider) {
  const prev = licensesSlider.parentElement.querySelector(".slider-arrow--prev");
  const next = licensesSlider.parentElement.querySelector(".slider-arrow--next");

  const swiper = new Swiper(licensesSlider, {
    modules: [Keyboard, Navigation],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    navigation: {
      enabled: true,
      nextEl: next,
      prevEl: prev,
    },
    breakpoints: {
      "500.1": {
        spaceBetween: 24,
        slidesPerView: 2,
      },
      "768.1": {
        spaceBetween: 24,
        slidesPerView: 3,
      },
      "1024.1": {
        spaceBetween: 32,
        slidesPerView: 4,
      },

    },
    spaceBetween: 24,
    slidesPerView: 1,
    rewind: true,
  });
}
