import Swiper from 'swiper';
import {
  Pagination
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperHero = new Swiper('.hero__swiper', {
  modules: [Pagination],
  pagination: {
    el: '.hero__paginations',
    clickable: true,
  },
  autoHeight: true,
  breakpoints: {
    320: {
      loop: true,
      simulateTouch: true,
    },
    1440: {
      simulateTouch: false,
    }
  }
});

export { swiperHero };
