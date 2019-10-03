let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    optionalExpensesBtn = document.getElementsByClassName('optionalexpenses-btn')[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalBtn = document.getElementsByTagName('button')[1],
    // dayBudgetBtn = document.getElementsByTagName('button')[2],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('input#savings'),
    chooseSum = document.querySelector('input.choose-sum'),
    choosePercent = document.querySelector('input.choose-percent'),
    yearValue = document.querySelector('input.year-value'),
    monthValue = document.querySelector('input.month-value'),
    dayValue = document.querySelector('input.day-value');
    allBtns = document.getElementsByTagName('button');

let money, time;
let sumOfExpensesValue;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}


for (key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
    console.log("Наша программа включает в себя значения: " + appData[key]);
}

for(let i = 0; i < allBtns.length; i++) {
    if (appData.budget == undefined) {
        allBtns[i].setAttribute('disabled', '');
        if (allBtns[i].classList.contains("start")) {
            allBtns[i].removeAttribute('disabled');
        }
    }
}


startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    if (appData.budget != undefined){
        for(let i = 0; i < allBtns.length; i++) {
            allBtns[i].removeAttribute('disabled');
        }
    }
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    };
    expensesValue.textContent = sum;
    sumOfExpensesValue = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let opt = optionalExpensesItems[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    };
})

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = 'Error';
        }
    } else {
        dayBudgetValue.textContent = 'Error';
    }
    
    // Первый способ:
    // appData.moneyPerDay = (appData.budget - sumOfExpensesValue) / 30;
    // dayBudgetValue.textContent = appData.moneyPerDay.toFixed(1);

    //Второй способ
    let sum = 0;
    for (key in appData.expenses) {
        sum += +appData.expenses[key];
    }
    appData.moneyPerDay = (appData.budget - sum) / 30;
    dayBudgetValue.textContent = appData.moneyPerDay.toFixed(1);
});


chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkbox.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

console.log(yearSavingsValue);