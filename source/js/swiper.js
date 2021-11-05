"use strict";

var swiper = new Swiper(".slider-promo", {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  loop: false,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".slider-subscription", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    700: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

var swiper3 = new Swiper(".slider-images", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  autoHeight: true,

  breakpoints: {
    700: {
      centeredSlides: false,
      slidesPerView: 4,
      spaceBetween: 0,
      centeredSlides: true,
    },
    1024: {
      centeredSlides: true,
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1447: {
      centeredSlides: true,
      slidesPerView: 10,
      spaceBetween: 0,
    },
  },
});
