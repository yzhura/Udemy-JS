function zeroPad(number, width) {
    var string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(zeroPad(cows, 3) + " Коров");
    console.log(zeroPad(chickens, 3) + " Куриц");
    console.log(zeroPad(pigs, 3) + " Свиней");
}

printFarmInventory(7, 16, 3);

// «Функция с хорошим, понятным именем zeroPad облегчает понимание кода. И её можно использовать во многих ситуациях, 
// не только в нашем случае. К примеру, для вывода отформатированных таблиц с числами.»

// Отрывок из книги: Марейн Хавербеке. «Выразительный JavaScript». Apple Books. 