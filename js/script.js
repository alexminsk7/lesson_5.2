// Получить кнопку "Начать расчет"
let startPayment = document.getElementById('start');

// Получить все блоки в правой части программы через классы
let blocksValue = document.getElementsByClassName('result').getElementsByClassName('result-table')[1];
// other version
let resultTable = document.getElementsByClassName('result-table');
let resultElements = resultTable.getElementsByClassName('result-table')[1];

//  Получить поля(input) c обязательными расходами через класс.
let expItem = document.getElementsByClassName('expenses-item');

// let blocks = document.getElementsByClassName('result')
// document.getElementById('main').getElementsByClassName('test');
// let blocks = document.getElementsByClassName('red test');
// var elements = tableElem.getElementsByTagName('input');


// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
let approveBtn = document.getElementsByTagName('button');
let calculateBtn = document.getElementsByTagName('button');

// Получить поля для ввода необязательных расходов
let optItem = document.querySelectorAll('.optionalexpenses-item');

// Получить оставшиеся поля через querySelector
let chooseIncomeLabel = document.querySelector('.choose-income-label');
let savCheckbox = document.querySelector('.checksavings')[0];
let labelSum = document.querySelector('sum');
let labelPercent = document.querySelector('percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');