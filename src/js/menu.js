import {DisplayValue} from './const';

const menuButtonOpen = document.querySelector('.header__button-open');
const menuNavigation = document.querySelector('.nav');
const menuButtonClose = document.querySelector('.nav__button-close');

menuButtonOpen.addEventListener('click', () => {
  menuNavigation.style.display = DisplayValue.BLOCK;

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      menuNavigation.style.display = DisplayValue.NONE;
    }
  });
});

menuButtonClose.addEventListener('click', () => {
  menuNavigation.style.display = DisplayValue.NONE;
});
