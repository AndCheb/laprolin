const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
