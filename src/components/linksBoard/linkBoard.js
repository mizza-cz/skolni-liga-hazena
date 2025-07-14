const modalEl = document.getElementById("modalVideo");
modalEl.addEventListener("hidden.bs.modal", () => {
  const iframe = modalEl.querySelector("#videoFrame");
  // Сбрасываем src — iframe перезагрузится и остановит видео
  iframe.src = iframe.src;
});
