//--Swiper
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  slidesPerView: 4.5,
  spaceBetween: 25,
  slideToClikedSlide: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
