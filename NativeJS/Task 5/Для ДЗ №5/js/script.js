document.body.style.backgroundImage = "url(img/apple_true.jpg)";

let answer = prompt("Отношение к яблоку?", ""),
    textarea = document.getElementById("prompt");

textarea.textContent = answer;

let title = document.getElementById('title');
title.textContent = "Мы продаем только подлинную технику Apple";

let collumns = document.getElementsByClassName('column');
let ads = document.getElementsByClassName('adv');
collumns[1].removeChild(ads[0]);

let menuList = document.querySelector(".menu");
let li = document.createElement('li'),
    className = "menu-item";
    li.classList.add(className);
    li.textContent = "Пятый пункт";
menuList.appendChild(li);

let items = document.getElementsByClassName('menu-item');
items[1].textContent = "Второй пункт"
items[2].textContent = "Третий пункт"