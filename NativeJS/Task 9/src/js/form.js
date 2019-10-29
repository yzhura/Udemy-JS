"use strict";

function form() {
  var message = {
    loading: 'Загрузка',
    success: 'Спасибо!',
    failure: 'Ошибка'
  };
  var form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  var formCall = document.getElementById('form'),
      inputCall = form.getElementsByTagName('input');
  formCall.addEventListener('submit', function (event) {
    event.preventDefault();
    formCall.appendChild(statusMessage);
    sendReques(inputCall);
  });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);
    sendReques(input);
  });

  function sendReques(inputs) {
    var request = new XMLHttpRequest();
    request.open('POST', 'served.php'); // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    var formData = new FormData(form);
    var obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    var json = JSON.stringify(obj); // request.send(formData);

    request.send(json);
    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  }
}

module.exports = form;