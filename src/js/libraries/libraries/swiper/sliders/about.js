import Swiper from "swiper";
import { Keyboard, Navigation } from "swiper/modules";

/** @type {HTMLDivElement} */
const aboutSlider = document.querySelector(".about-slider");

if (aboutSlider) {
  const prev = aboutSlider.querySelector(".slider-arrow--prev");
  const next = aboutSlider.querySelector(".slider-arrow--next");

  const swiper = new Swiper(aboutSlider, {
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
    spaceBetween: 8,
    rewind: true,
  });
}
