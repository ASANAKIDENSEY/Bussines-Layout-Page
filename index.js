//--Swiper
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  slideToClikedSlide: true,
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "bullets",
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //adaptivity slider
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1.9,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});
