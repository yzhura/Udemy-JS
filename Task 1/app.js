
let money = prompt("Ваш бюджет на месяц?","");
let time = prompt("Введите дату в формате YYYY-MM-DD","");
let expensesQ1 = prompt("Введите обязательную статью расходов в этом месяце","");
let expensesQ2 = prompt("Во сколько обойдется?","");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        expensesQ1: expensesQ2
    },
    optionalExpenses: "",
    income: [],
    savings: false
}

alert(money / 30);



// Вопросы к этому заданию:

// Сколько типов данных существует в JS?
// 7 типов данных: String, Number, Boolean, Object, Null, Undefined, Symbol

// Как вывести информацию в консоль?
// console.log();

// Какая функция операторов || и &&?
// || - возвращает если один из аргументов равен true
// && - если ве аргументы равны true