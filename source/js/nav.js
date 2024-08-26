const navList = document.querySelector('.header__nav');
const navBurger = document.querySelector('.header__burger-button');
const body = document.querySelector('.page-body');


const onNavBurgerClick = () => {
  if(navList.classList.contains('header__nav--active')){
    navList.classList.remove('header__nav--active');
    navBurger.classList.remove('header__burger-button--active');
    body.classList.remove('page-body--lock');
  } else{
    navList.classList.add('header__nav--active');
    navBurger.classList.add('header__burger-button--active');
    body.classList.add('page-body--lock');
  }
};

const navBurgerInit = () => {
  if (navBurger) {
    navBurger.addEventListener('click', onNavBurgerClick);
  }
};

export {
  navBurgerInit
};
