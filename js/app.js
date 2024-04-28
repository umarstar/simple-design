const swiper5 = new Swiper("#swiper5", {
  spaceBetween: 24,
  loop: true,
  slidesPerView: 1,
  centeredSlides: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper("#mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 13,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
  },
});

let SwiperTop = new Swiper(".swiper--top", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 10000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView: "auto",
  allowTouchMove: false,
  disableOnInteraction: true,
});

var swiper = new Swiper("#mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
