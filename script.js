const cards = document.querySelectorAll("[data-modal]");
const dialogs = document.querySelectorAll("dialog.modal");
let lastTrigger = null;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const dialog = document.getElementById(card.dataset.modal);
    if (!dialog) return;
    lastTrigger = card;
    dialog.showModal();
  });
});

dialogs.forEach((dialog) => {
  dialog.addEventListener("close", () => lastTrigger?.focus());
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    const clickedBackdrop = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (clickedBackdrop) dialog.close();
  });
});
