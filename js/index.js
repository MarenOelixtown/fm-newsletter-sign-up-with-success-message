const signupForm = document.querySelector('[data-js="signup-form"]');
const emailInput = document.querySelector('[data-js="email-input"]');
const emailAlert = document.querySelector('[data-js="email-alert"]');
const successDialog = document.querySelector('[data-js="success-dialog"]');
const dialogEmail = document.querySelector('[data-js="dialog-email"]');
const dismissButton = document.querySelector('[data-js="dismiss-button"]');

emailInput.addEventListener("input", function () {
  if (!emailInput.checkValidity()) {
    emailAlert.classList.remove("hidden");
    emailInput.classList.add("signup-form_email-input--invalid");
  } else {
    emailAlert.classList.add("hidden");
    emailInput.classList.remove("signup-form_email-input--invalid");
  }
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  dialogEmail.textContent = data.email;
  successDialog.showModal();
  event.target.reset();
});

dismissButton.addEventListener("click", () => {
  successDialog.close();
});
