const swiper = new Swiper(".chanel-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
        nextEl: ".chanel-button-next",
        prevEl: ".chanel-button-prev",
    },
});

const recomendedSwiper = new Swiper(".recomended-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
      nextEl: ".recomended-button-next",
      prevEl: ".recomended-button-prev",
  },
});

const foodSwiper = new Swiper(".food-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
      nextEl: ".food-button-next",
      prevEl: ".food-button-prev",
  },
});
