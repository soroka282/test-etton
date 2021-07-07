import {textLength} from './const';

const cardsDescription = document.querySelectorAll('.cards__description');

const SLICE = 'SLICE';
const DEFAULT = 'DEFAULT';
const LENGTH_DESCRIPTION = 46;

const getLengthDescription = (value) => {
  for(let i = 0; i < cardsDescription.length; i++) {
    const text = cardsDescription[i].innerText;
    switch(value) {
      case SLICE:
        cardsDescription[i].textContent = text.slice(0, LENGTH_DESCRIPTION) + '...';
        break;
      case DEFAULT:
        cardsDescription[i].textContent = text;
        break;
    }
  }
};

getLengthDescription(textLength.SLICE);
