new Swiper(document.querySelector('.swiper-container'), {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  slideToClickedSlide: true,
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 35
    },

		1201: {
      slidesPerView: 3
		}

	}
});