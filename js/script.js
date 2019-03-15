// Получить кнопку "Начать расчет"
let startPayment = document.getElementById('start');

// Получить все блоки в правой части программы через классы
blocksValue = document.querySelectorAll('[class$=value]');

//  Получить поля(input) c обязательными расходами через класс.
expItem = document.getElementsByClassName('expenses-item');

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
approveBtn = document.getElementsByTagName('button')[0];
approveBtn2 = document.getElementsByTagName('button')[1];
calculateBtn = document.getElementsByTagName('button')[2];

// Получить поля для ввода необязательных расходов
optItem = document.querySelectorAll('.optionalexpenses-item');

// Получить оставшиеся поля через querySelector
savCheckbox = document.querySelector('.checksavings');
labelSum = document.querySelector('.choose-sum');
labelPercent = document.querySelector('.choose-percent');
yearValue = document.querySelector('.year-value');
monthValue = document.querySelector('.month-value');
dayValue = document.querySelector('.day-value');
// console.log(savCheckbox, labelSum, labelPercent, yearValue, monthValue, dayValue);