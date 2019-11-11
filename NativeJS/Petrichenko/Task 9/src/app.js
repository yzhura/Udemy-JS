"use strict";

window.addEventListener('DOMContentLoaded', function () {
  'use sctrict';

  var calc = require('./js/calc.js'),
      form = require('./js/form.js'),
      slider = require('./js/slider.js'),
      tabs = require('./js/tabs.js'),
      timer = require('./js/timer.js'),
      modal = require('./js/modal.js');
      scroll = require('./js/scroll.js');

  calc();
  form();
  slider();
  tabs();
  timer();
  modal();
  scroll();
});