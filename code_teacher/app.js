'use strict'

const screenPrice = 70000;
let percentage = 10;




let titleProject;
let allServicePrices;
let screensValue;
let responsive;
let servicePercentPrice;
let service1;
let service2 = 'Не выбран';
let servicePrice1 = 0;
let servicePrice2 = 0;
let sum = 0;




const asking = function() {
titleProject = prompt('Название проекта?');
 
 titleProject = getTitle(titleProject);

screensValue = prompt('Тип экрана: шаблонные, с уникальным дизайном, с анимациями?');

responsive = prompt('Нужен ли респонсивный сайт?');

if (responsive == 'да'  || responsive == 'Да') { 

  responsive = true; 
} 
else {
    responsive = false; 
  }
  
}



 function getAllServicePrices() 
  { 
 for (let i = 0; i < 2; i++) {
  // запускается не больше 2 шагов от 0 до 1.
 if (i == 0) 
  { 
    service1 = prompt('Какой сервис нужен?');
    do servicePrice1 = +prompt('Сколько это будет стоить?');
    while (Number.isNaN(servicePrice1))
  }
 if (i == 1) 
  {
    service2 = prompt('Какой еще сервис нужен?');
    do servicePrice2 = +prompt('Сколько это будет стоить?');
    while (Number.isNaN(servicePrice2))
  }
}
return  +servicePrice1 + +servicePrice2; //'сумма всех дополнительных услуг'
  }





function getTitle(_titleProject) {
  return _titleProject.charAt(0).toUpperCase() + _titleProject.slice(1).toLowerCase();
}

  

function getFullPrice() {
  let fullPrice = screenPrice + sum;  // полная стоимость проекта без скидок
  return fullPrice; 
}



asking();
sum = getAllServicePrices();
let fullPrice = getFullPrice();
allServicePrices = sum;
// servicePercentPrice = getServicePercentPrices(); //полная стоимость за вычетом скидки


console.log('Проект - ', titleProject); 
console.log('Тип экрана - ', screensValue);
console.log('Респонсив - ', responsive);
console.log('Сервис первый - ', service1);
console.log('Стоимость первого сервиса - ', servicePrice1); 
console.log('Сервис второй - ', service2);
console.log('Стоимость второго сервиса - ', servicePrice2);
console.log('Полная стоимость без скидки - ', fullPrice); 
console.log('Полная стоимость со скидкой - ', getFullPrice() - Math.round(getFullPrice() * 0.10));

