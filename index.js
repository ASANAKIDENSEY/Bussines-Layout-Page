//--Swiper
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  // direction: "vertical",
  // loop: true,
  slidesPerView: 4.5,
  spaceBetween: 10,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
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
