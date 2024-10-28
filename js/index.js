const subscribeButton = document.querySelector('[data-js="subscribe-button"]');
const successDialog = document.querySelector('[data-js="success-dialog"]');
const dismissButton = document.querySelector('[data-js="dismiss-button"]');

subscribeButton.addEventListener("click", () => {
  console.log("clicked");
  successDialog.showModal();
});

dismissButton.addEventListener("click", () => {
  successDialog.close();
});
