const signupForm = document.querySelector('[data-js="signup-form"]');
const successDialog = document.querySelector('[data-js="success-dialog"]');
const dialogEmail = document.querySelector('[data-js="dialog-email"]');
const dismissButton = document.querySelector('[data-js="dismiss-button"]');

signupForm.addEventListener("submit", (event) => {
  console.log("clicked");
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  event.target.reset();
  successDialog.showModal();
});

dismissButton.addEventListener("click", () => {
  successDialog.close();
});
