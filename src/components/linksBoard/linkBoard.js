const modalEl = document.getElementById("modalVideo");

if (modalEl) {
  modalEl.addEventListener("hidden.bs.modal", () => {
    const iframe = modalEl.querySelector("#videoFrame");
    if (iframe) {
      iframe.src = iframe.src;
    }
  });
}
