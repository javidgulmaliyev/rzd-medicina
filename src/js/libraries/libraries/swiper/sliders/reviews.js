import Swiper from "swiper";
import { Keyboard, Navigation } from "swiper/modules";

/** @type {HTMLDivElement} */
const reviewsSlider = document.querySelector(".reviews-slider");

if (reviewsSlider) {
  const prev = reviewsSlider.parentElement.querySelector(".slider-arrow--prev");
  const next = reviewsSlider.parentElement.querySelector(".slider-arrow--next");

  const swiper = new Swiper(reviewsSlider, {
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
