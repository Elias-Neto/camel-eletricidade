const swiper = new Swiper("main .product .mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
})

const swiper2 = new Swiper("main .product .mySwiper2", {
  spaceBetween: 10,
  slidesPerView: 1,
  thumbs: {
    swiper: swiper,
  },
})

const relatedProducts = new Swiper("main .relatedProducts", {
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
  },
  spaceBetween: 30,
})
