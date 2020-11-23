
var swiper = new Swiper('.mv-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: true,
},
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
          slidesPerView: 1.5,
          centeredSlides : true,
          },
  },
  slidesPerView: 1,
  centeredSlides: true,
});


var swiper = new Swiper('.footer-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
},
    breakpoints: {
      768: {
          slidesPerView: 7.5,
          centeredSlides : true,
          },
  },

});

