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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  'use sctrict';\n\n  var calc = __webpack_require__(/*! ./js/calc.js */ \"./src/js/calc.js\"),\n      form = __webpack_require__(/*! ./js/form.js */ \"./src/js/form.js\"),\n      slider = __webpack_require__(/*! ./js/slider.js */ \"./src/js/slider.js\"),\n      tabs = __webpack_require__(/*! ./js/tabs.js */ \"./src/js/tabs.js\"),\n      timer = __webpack_require__(/*! ./js/timer.js */ \"./src/js/timer.js\"),\n      modal = __webpack_require__(/*! ./js/modal.js */ \"./src/js/modal.js\");\n\n  calc();\n  form();\n  slider();\n  tabs();\n  timer();\n  modal();\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/calc.js":
/*!************************!*\
  !*** ./src/js/calc.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction calc() {\n  var persons = document.querySelectorAll('.counter-block-input')[0],\n      restDays = document.querySelectorAll('.counter-block-input')[1],\n      place = document.getElementById('select'),\n      totalValue = document.getElementById('total'),\n      personsSum = 0,\n      daysSum = 0,\n      total = 0;\n  totalValue.innerHTML = 0;\n  persons.addEventListener('change', function () {\n    personsSum = +this.value;\n    total = (daysSum + personsSum) * 4000;\n\n    if (restDays.value == '' || persons.value == '') {\n      totalValue.innerHTML = 0;\n    } else {\n      totalValue.innerHTML = total;\n    }\n  });\n  restDays.addEventListener('change', function () {\n    daysSum = +this.value;\n    total = (daysSum + personsSum) * 4000;\n\n    if (restDays.value == '' || persons.value == '') {\n      totalValue.innerHTML = 0;\n    } else {\n      totalValue.innerHTML = total;\n    }\n  });\n  place.addEventListener('change', function () {\n    if (restDays.value == '' || persons.value == '') {\n      totalValue.innerHTML = 0;\n    } else {\n      var a = total;\n      totalValue.innerHTML = a * this.options[this.selectedIndex].value;\n    }\n  });\n}\n\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./src/js/calc.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction form() {\n  var message = {\n    loading: 'Загрузка',\n    success: 'Спасибо!',\n    failure: 'Ошибка'\n  };\n  var form = document.querySelector('.main-form'),\n      input = form.getElementsByTagName('input'),\n      statusMessage = document.createElement('div');\n  statusMessage.classList.add('status');\n  var formCall = document.getElementById('form'),\n      inputCall = form.getElementsByTagName('input');\n  formCall.addEventListener('submit', function (event) {\n    event.preventDefault();\n    formCall.appendChild(statusMessage);\n    sendReques(inputCall);\n  });\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n    sendReques(input);\n  });\n\n  function sendReques(inputs) {\n    var request = new XMLHttpRequest();\n    request.open('POST', 'served.php'); // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\n\n    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');\n    var formData = new FormData(form);\n    var obj = {};\n    formData.forEach(function (value, key) {\n      obj[key] = value;\n    });\n    var json = JSON.stringify(obj); // request.send(formData);\n\n    request.send(json);\n    request.addEventListener('readystatechange', function () {\n      if (request.readyState < 4) {\n        statusMessage.innerHTML = message.loading;\n      } else if (request.readyState === 4 && request.status == 200) {\n        statusMessage.innerHTML = message.success;\n      } else {\n        statusMessage.innerHTML = message.failure;\n      }\n    });\n\n    for (var i = 0; i < inputs.length; i++) {\n      inputs[i].value = '';\n    }\n  }\n}\n\nmodule.exports = form;\n\n//# sourceURL=webpack:///./src/js/form.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction modal() {\n  var more = document.querySelector('.more'),\n      overlay = document.querySelector('.overlay'),\n      close = document.querySelector('.popup-close'),\n      tabBtn = document.querySelectorAll('.description-btn'),\n      tabHolder = document.querySelector('.info');\n  more.addEventListener('click', function () {\n    overlay.style.display = 'block';\n    this.classList.add('more-splash');\n    document.body.style.overflow = 'hidden';\n  });\n  close.addEventListener('click', function () {\n    overlay.style.display = 'none';\n    more.classList.remove('more-splash');\n    document.body.style.overflow = '';\n  });\n  tabHolder.addEventListener('click', function (event) {\n    target = event.target;\n\n    if (target && target.classList.contains('description-btn')) {\n      overlay.style.display = 'block';\n      document.body.style.overflow = 'hidden';\n    }\n  });\n}\n\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./src/js/modal.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction slider() {\n  var slideIndex = 1,\n      slides = document.querySelectorAll('.slider-item'),\n      prev = document.querySelector('.prev'),\n      next = document.querySelector('.next'),\n      dotsWrap = document.querySelector('.slider-dots'),\n      dots = document.querySelectorAll('.dot');\n  showSlides(slideIndex);\n\n  function showSlides(n) {\n    if (n > slides.length) {\n      slideIndex = 1;\n    }\n\n    if (n < 1) {\n      slideIndex = slides.length;\n    } //ES 6\n\n\n    slides.forEach(function (item) {\n      return item.style.display = 'none';\n    }); // ES 5\n    // for (let i = 0; i < slides.length; i++) {\n    //     slides[i].style.display = 'none';\n    // }\n\n    dots.forEach(function (item) {\n      return item.classList.remove('dot-active');\n    });\n    slides[slideIndex - 1].style.display = 'block';\n    dots[slideIndex - 1].classList.add('dot-active');\n  }\n\n  function plusSlides(n) {\n    showSlides(slideIndex += n);\n  }\n\n  function currentSlide(n) {\n    showSlides(slideIndex = n);\n  }\n\n  prev.addEventListener('click', function () {\n    plusSlides(-1);\n  });\n  next.addEventListener('click', function () {\n    plusSlides(1);\n  });\n  dotsWrap.addEventListener('click', function (event) {\n    var target = event.target;\n\n    for (var i = 0; i < dots.length + 1; i++) {\n      if (target.classList.contains('dot') && target == dots[i - 1]) {\n        currentSlide(i);\n      }\n    }\n  });\n}\n\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction tabs() {\n  var tab = document.querySelectorAll('.info-header-tab'),\n      info = document.querySelector('.info-header'),\n      tabContent = document.querySelectorAll('.info-tabcontent');\n\n  function hideTabContent(tabs) {\n    for (var i = tabs; i < tabContent.length; i++) {\n      tabContent[i].classList.add('hide');\n      tabContent[i].classList.remove('show');\n    }\n  }\n\n  hideTabContent(1);\n\n  function showTabContent(tabs) {\n    if (tabContent[tabs].classList.contains('hide')) {\n      tabContent[tabs].classList.remove('hide');\n      tabContent[tabs].classList.add('show');\n    }\n  }\n\n  info.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target && target.classList.contains('info-header-tab')) {\n      for (var i = 0; i < tab.length; i++) {\n        if (target == tab[i]) {\n          hideTabContent(0);\n          showTabContent(i);\n          break;\n        }\n      }\n    }\n  });\n}\n\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./src/js/tabs.js?");

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction timer() {\n  var deadline = '2019-12-03';\n\n  function getTimeRemaining(endtime) {\n    var t = Date.parse(endtime) - Date.parse(new Date()),\n        seconds = Math.floor(t / 1000 % 60),\n        minutes = Math.floor(t / 1000 / 60 % 60),\n        hours = Math.floor(t / (1000 * 60 * 60));\n    return {\n      'total': t,\n      'hours': hours,\n      'minutes': minutes,\n      'seconds': seconds\n    };\n  }\n\n  function setClock(id, endtime) {\n    var timer = document.getElementById(id),\n        hours = timer.querySelector('.hours'),\n        minutes = timer.querySelector('.minutes'),\n        seconds = timer.querySelector('.seconds');\n    timeInterval = setInterval(updateClock, 1000);\n\n    function updateClock() {\n      var t = getTimeRemaining(endtime);\n      hours.textContent = t.hours;\n      minutes.textContent = t.minutes;\n      seconds.textContent = t.seconds;\n\n      if (t.total <= 0) {\n        clearInterval(timeInterval);\n      }\n\n      if (seconds.textContent.length < 2) {\n        seconds.textContent = '0' + t.seconds;\n      } else if (minutes.textContent.length < 2) {\n        minutes.textContent = '0' + t.minutes;\n      } else if (hours.textContent.length < 2) {\n        hours.textContent = '0' + t.hours;\n      }\n    }\n  }\n\n  setClock('timer', deadline);\n}\n\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./src/js/timer.js?");

/***/ })

/******/ });