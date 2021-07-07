import {DisplayValue} from './const';

const addItemButton = document.querySelector('.main__button');
const form = document.querySelector('.form');
const formButtonCancel = document.querySelector('.form__button-cancel');
const formButtonSubmit = document.querySelector('.form__button-submit');
const formCheckbox = document.querySelector('.form__checkbox');
const formTextarea = document.querySelector('.form__textarea');
const formInputFile = document.querySelector('.form__input--file');
const formLabelFileUpload  = document.querySelector('.form__label-file-upload ');

const DEFAULT_MSG = 'File upload';

if (formButtonSubmit) {
  formButtonSubmit.disabled = true;
}

if (addItemButton) {
  addItemButton.addEventListener('click', () => {
    form.style.display = form.style.display === DisplayValue.NONE ? DisplayValue.FLEX : DisplayValue.NONE;

    document.addEventListener('keydown', (evt) => {
      if (evt.key === ('Escape' || 'Esc')) {
        evt.preventDefault();
        form.style.display = DisplayValue.NONE;
      }
    });
  });
}

if (formButtonCancel) {
  formButtonCancel.addEventListener('click', () => {
    form.style.display = DisplayValue.NONE;
  });
}

if (formInputFile) {
  formInputFile.addEventListener('input', () => {
    if(formInputFile.files.length !== 0) {
      return formLabelFileUpload.value = formInputFile.files[0].name;
    } else {
      return formLabelFileUpload.value = DEFAULT_MSG;
    }
  });
}

if (form) {
  form.addEventListener( 'input', () => {
    if (formTextarea.value !== '' && formInputFile.value !== '' && formCheckbox.checked !== false) {
      return formButtonSubmit.disabled = false;
    } else {
      return formButtonSubmit.disabled = true;
    }
  });
}
