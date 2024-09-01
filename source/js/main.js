import {
  swiperHero,
  swiperTours,
  swiperTraining,
  swiperReviews,
  swiperAdv,
  swiperGallery
} from './swiper.js';

import {
  form
} from './var-form.js';

import {
  onSubmitCheckForm
} from './chek-form.js';

import {
  navBurgerInit
} from './nav.js';

navBurgerInit();
swiperHero();
swiperTours();
swiperTraining();
swiperReviews();
swiperAdv();
swiperGallery();


form.addEventListener('submit', onSubmitCheckForm);
