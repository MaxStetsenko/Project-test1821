import "./import/modules";

const burger = document.querySelector('.menu-icon'),
	header = document.querySelector('.header');

burger.addEventListener('click', () => {
	burger.classList.toggle('clicked')
	header.classList.toggle('active')
})



// =============================================================
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay]);

// init Swiper:
const swiperSlider = document.querySelector('.slider')


const mySwiper = new Swiper(swiperSlider, {
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: (index, className) => {
			return `<span class=${className}> 0${index + 1}</span>`;
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
})