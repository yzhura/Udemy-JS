let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?","");
    time = prompt("Введите дату в формате YYYY-MM-DD","");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?","");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце","");
            let b = prompt("Во сколько обойдется?","");
        
            if( (typeof(a)) === 'string' && (typeof(a)) != null  && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Eжедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay > 2000 ) {
            console.log("Высокий уровень достатка");
        } else {
            console.log('Error');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");
    
            if( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                appData.optionalExpenses[i + 1] = a;
            } else {
                i--;
            }
        };
    },
    chooseIncome: function() {
        for(let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

            if( (typeof(items) === 'string' && (typeof(items)) != null && items != '') ) {
                appData.income = items.split(", ");
                appData.income.push(prompt('Может что-то еще?',''));
                appData.income.sort();
                appData.income.forEach(function(item, n, mass) {
                    let numberArr = n+1;
                    alert("Способы доп. заработка: " + numberArr + " " + item);
                });
            } else {
                i--;
            }
        }
    }
}

for(key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}


// Сколько типов данных существует в JS?
// 7 типов данных: String, Number, Boolean, Object, Null, Undefined, Symbol

// Как вывести информацию в консоль?
// console.log();

// Какая функция операторов || и &&?
// || - возвращает если один из аргументов равен true
// && - если ве аргументы равны true

// Сколько видов циклов существует в JS?
// 3 