import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

export class ServicesSlider {
  constructor(selector, options) {
    this.slider = new Swiper(selector, {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 0,
      roundLengths: true,
      loop: true,
      slideToClickedSlide: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1199: {
          spaceBetween: 0,
        },
      },
    });
  }
}