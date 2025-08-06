new Swiper(".ambassadorsSwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active",
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  },
});
