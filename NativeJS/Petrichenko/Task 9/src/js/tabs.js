"use strict";

function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(tabs) {
    for (var i = tabs; i < tabContent.length; i++) {
      tabContent[i].classList.add('hide');
      tabContent[i].classList.remove('show');
    }
  }

  hideTabContent(1);

  function showTabContent(tabs) {
    if (tabContent[tabs].classList.contains('hide')) {
      tabContent[tabs].classList.remove('hide');
      tabContent[tabs].classList.add('show');
    }
  }

  info.addEventListener('click', function (e) {
    var target = e.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;