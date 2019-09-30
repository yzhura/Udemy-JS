
let money = +prompt("Ваш бюджет на месяц?","");
let time = prompt("Введите дату в формате YYYY-MM-DD","");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

for(let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце","");
    let b = prompt("Во сколько обойдется?","");

    if( (typeof(a))=== 'string' && (typeof(a)) != null  && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
};

// let i = 0;
// while(i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце","");
//     let b = prompt("Во сколько обойдется?","");
//     if( (typeof(a))=== 'string' && (typeof(a)) != null  && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//     } else {

//     }
//     i++;
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце","");
//     let b = prompt("Во сколько обойдется?","");
//     if( (typeof(a))=== 'string' && (typeof(a)) != null  && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//     } else {

//     }
//     i++;
// } while (i < 2);


appData.moneyPerDay = appData.budget / 30;

alert("Eжедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if(appData.moneyPerDay > 2000 ) {
    console.log("Высокий уровень достатка");
} else {
    console.log('Error');
}



// Вопросы к этому заданию:

// Сколько типов данных существует в JS?
// 7 типов данных: String, Number, Boolean, Object, Null, Undefined, Symbol

// Как вывести информацию в консоль?
// console.log();

// Какая функция операторов || и &&?
// || - возвращает если один из аргументов равен true
// && - если ве аргументы равны true

// Сколько видов циклов существует в JS?
// 3