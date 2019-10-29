"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var age = document.getElementById('age');
  var user = {
    name: 'John',
    value: age.value
  };

  function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
  }

  showUser.apply(user);
});