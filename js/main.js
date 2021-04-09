const swiper = new Swiper(".chanel-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: ".chanel-button-next",
        prevEl: ".chanel-button-prev",
    },

    breakpoints: {
        // when window width is >= 320px
        1400: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 5,
        },
        // when window width is >= 480px
        1100: {
            slidesPerView: 4,
        },
        // when window width is >= 640px
        900: {
            slidesPerView: 3,
        },
        740: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 1,
        },
    },
});

const recomendedSwiper = new Swiper(".recomended-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: ".recomended-button-next",
        prevEl: ".recomended-button-prev",
    },

    breakpoints: {
        // when window width is >= 320px
        1400: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 3,
        },
        870: {
            slidesPerView: 2,
        },
    },
});

const foodSwiper = new Swiper(".food-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: ".food-button-next",
        prevEl: ".food-button-prev",
    },

    breakpoints: {
        // when window width is >= 320px
        1400: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 5,
        },
        // when window width is >= 480px
        1100: {
            slidesPerView: 4,
        },
        // when window width is >= 640px
        900: {
            slidesPerView: 3,
        },
        760: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 1,
        },
    },
});

let searchButton = document.querySelector(".mobile-search");
let mobileSearch = document.querySelector(".input-group");

searchButton.addEventListener("click", () => {
  mobileSearch.classList.toggle('is-open')
});

if (document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  recomendedSwiper.destroy();
  foodSwiper.destroy();
}
