"use strict";

const popupBtnOpen = document.querySelector("#js-contacts-btn");
const popupBtnClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

if (popupBtnOpen) {
  popupBtnOpen.addEventListener("click", (evt) => {
    evt.preventDefault();
    popup.classList.toggle("popup--active");
  });
}

if (popupBtnClose) {
  popupBtnClose.addEventListener("click", (evt) => {
    evt.preventDefault();
    popup.classList.toggle("popup--active");
  });
}
