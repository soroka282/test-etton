/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/cards.js":
/*!*************************!*\
  !*** ./src/js/cards.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/js/const.js");


const cardsDescription = document.querySelectorAll('.cards__description');

const SLICE = 'SLICE';
const DEFAULT = 'DEFAULT';
const LENGTH_DESCRIPTION = 45;

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

getLengthDescription(_const__WEBPACK_IMPORTED_MODULE_0__["textLength"].SLICE);


/***/ }),

/***/ "./src/js/const.js":
/*!*************************!*\
  !*** ./src/js/const.js ***!
  \*************************/
/*! exports provided: DisplayValue, textLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayValue", function() { return DisplayValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textLength", function() { return textLength; });
const DisplayValue = {
  NONE: 'none',
  BLOCK: 'block',
  FLEX: 'flex',
};

const textLength = {
  DEFAULT: 'DEFAULT',
  SLICE: 'SLICE',
};


/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/js/const.js");


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
    form.style.display = form.style.display === _const__WEBPACK_IMPORTED_MODULE_0__["DisplayValue"].NONE ? _const__WEBPACK_IMPORTED_MODULE_0__["DisplayValue"].FLEX : _const__WEBPACK_IMPORTED_MODULE_0__["DisplayValue"].NONE;

    document.addEventListener('keydown', (evt) => {
      if (evt.key === ('Escape' || false)) {
        evt.preventDefault();
        form.style.display = _const__WEBPACK_IMPORTED_MODULE_0__["DisplayValue"].NONE;
      }
    });
  });
}

if (formButtonCancel) {
  formButtonCancel.addEventListener('click', () => {
    form.style.display = _const__WEBPACK_IMPORTED_MODULE_0__["DisplayValue"].NONE;
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


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./src/js/cards.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/js/form.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./src/js/const.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");






/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/js/const.js");


const menuButtonOpen = document.querySelector('.header__button-open');
const menuNavigation = document.querySelector('.nav');
const menuButtonClose = document.querySelector('.nav__button-close');

menuButtonOpen.addEventListener('click', () => {
  menuNavigation.style.display = _const__WEBPACK_IMPORTED_MODULE_0__["DisplayValue"].BLOCK;

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || false)) {
      evt.preventDefault();
      menuNavigation.style.display = _const__WEBPACK_IMPORTED_MODULE_0__["DisplayValue"].NONE;
    }
  });
});

menuButtonClose.addEventListener('click', () => {
  menuNavigation.style.display = _const__WEBPACK_IMPORTED_MODULE_0__["DisplayValue"].NONE;
});


/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map