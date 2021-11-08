const swiper = new Swiper(".slider-promo", {
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
