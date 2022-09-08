document.addEventListener("DOMContentLoaded", () => {
  const emailForm = document.querySelector<HTMLInputElement>("#email");
  const phoneForm = document.querySelector<HTMLInputElement>("#phone");
  const submitButton = document.querySelector<HTMLInputElement>("#submit");
  let emailIsValid = false;
  let phoneIsValid = false;

  if (!emailForm || !phoneForm || !submitButton) {
    return;
  }

  /*
  web@bae.co
  web@bae.com
  web@bae.design
  */

  const validateEmail = (value: string): boolean => {
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (value.match(emailValidation)) {
      return true;
    }
    return false;
  };

  /*
  123-456-7890
  1234567890
  (123) 456-7890
  123 456 7890
  123.456.7890
  +91 (123) 456-7890
  */

  const validatePhone = (value: string): boolean => {
    const phoneValidation =
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (value.match(phoneValidation)) {
      return true;
    }
    return false;
  };

  const applyInvalidStyles = (el: HTMLInputElement) => {
    //el.style.borderColor = "red";
    el.classList.remove("input-valid-state");
    el.classList.add("input-error-state");
  };

  const applyValidStyle = (el: HTMLInputElement) => {
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

  // EVENT LISTENERS
  emailForm.addEventListener("input", (event) => {
    const emailFormValue = (<HTMLInputElement>event.target).value;
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
    const phoneFormValue = (<HTMLInputElement>event.target).value;
    if (validatePhone(phoneFormValue)) {
      phoneIsValid = true;
      applyValidStyle(phoneForm);
    } else {
      phoneIsValid = false;
      applyInvalidStyles(phoneForm);
    }
    updateSubmitButton();
  });

  //EXECUTION
  updateSubmitButton();
});
