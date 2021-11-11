"use strict";

const popupBtnOpen = document.querySelector("#js-contacts-btn");
const popupBtnClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const form = document.querySelector(".feedback-form");
const formSubmitBtn = document.querySelector(".feedback-form__btn");
const inputs = document.querySelectorAll(".feedback-form input");

if (popupBtnOpen) {
  popupBtnOpen.addEventListener("click", (evt) => {
    evt.preventDefault();
    popup.classList.remove("popup--close-animation");
    popup.classList.add("popup--active-animation");
    setTimeout(() => {
      popup.classList.toggle("popup--active");
    }, 300);
  });
}

if (popupBtnClose) {
  popupBtnClose.addEventListener("click", (evt) => {
    evt.preventDefault();
    popup.classList.remove("popup--active-animation");
    popup.classList.add("popup--close-animation");
    setTimeout(() => {
      popup.classList.toggle("popup--active");
    }, 300);
  });
}

form.addEventListener("submit", (evt) => {
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];

    if (element.validity.valid) {
      evt.preventDefault();
      form.classList.toggle("feedback-form--error");
    }
  }
});
