document.addEventListener("DOMContentLoaded", () => {
  const elems = document.querySelectorAll(".animate__animated");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add("animate__fadeIn");
          io.unobserve(target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elems.forEach((el) => io.observe(el));
});
