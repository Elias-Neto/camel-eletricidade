const configurationSwiper = {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 8,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  spaceBetween: 30,
  // freeMode: true,
  // cssMode: true,
}

const categoriesSwiper = new Swiper(
  "main .categories.swiper",
  configurationSwiper
)

const brandsSwiper = new Swiper("main .brands.swiper", configurationSwiper)

const publicitySwiper = new Swiper("main .publicity.swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})
