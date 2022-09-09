// 8SEP
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const emailForm = document.querySelector("#email");
  const phoneForm = document.querySelector("#phone");
  const submitButton = document.querySelector("#submit");
  let emailIsValid = false;
  let phoneIsValid = false;
  if (!emailForm || !phoneForm || !submitButton) {
    return;
  }
  const validateEmail = (value) => {
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (value.match(emailValidation)) {
      return true;
    }
    return false;
  };
  const validatePhone = (value) => {
    const phoneValidation =
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (value.match(phoneValidation)) {
      return true;
    }
    return false;
  };
  const applyInvalidStyles = (el) => {
    el.classList.remove("input-valid-state");
    el.classList.add("input-error-state");
  };
  const applyValidStyle = (el) => {
    el.classList.remove("input-error-state");
    el.classList.add("input-valid-state");
  };
  const disableSubmitButton = () => {
    submitButton.disabled = true;
    submitButton.classList.add("submit-disabled-state");
  };
  const enableSubmitButton = () => {
    submitButton.disabled = false;
    submitButton.classList.remove("submit-disabled-state");
  };
  const updateSubmitButton = () => {
    if (emailIsValid && phoneIsValid) {
      enableSubmitButton();
    } else {
      disableSubmitButton();
    }
  };
  emailForm.addEventListener("input", (event) => {
    const emailFormValue = event.target.value;
    if (validateEmail(emailFormValue)) {
      emailIsValid = true;
      applyValidStyle(emailForm);
    } else {
      emailIsValid = false;
      applyInvalidStyles(emailForm);
    }
    updateSubmitButton();
  });
  phoneForm.addEventListener("input", (event) => {
    const phoneFormValue = event.target.value;
    if (validatePhone(phoneFormValue)) {
      phoneIsValid = true;
      applyValidStyle(phoneForm);
    } else {
      phoneIsValid = false;
      applyInvalidStyles(phoneForm);
    }
    updateSubmitButton();
  });
  updateSubmitButton();
});
