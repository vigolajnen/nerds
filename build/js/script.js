  var itemTabs = document.querySelectorAll('.tabs__item');
  var priceItems = document.querySelectorAll('.season-ticket__price');
  var priceItemsArr = [5000, 1700, 2700];

  function priceItem(result) {
    for (var i = 0; i < priceItems.length; i++) {
      for (var j = 0; j < result.length; j++) {
        if (i === j) {
          priceItems[i].innerHTML = result[j] + '<svg width="30" height="42"><use xlink:href="img/sprite_auto.svg#icon-rub"></use></svg>';
          priceItems[i].setAttribute('data-price', result[j]);
        }
      }
    }
  }  

if (itemTabs) {
    itemTabs.forEach(function (item) {
      item.addEventListener('click', function () {
        var count = item.getAttribute('data-count');
        var activeItem = document.querySelector('.tabs__item.tabs__item--active');
        activeItem.classList.remove('tabs__item--active');
        item.classList.add('tabs__item--active');

        var result = priceItemsArr.map(function (priceActive) {
          return priceActive * count;
        });

        priceItem(result);
      });
    });
  }
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
