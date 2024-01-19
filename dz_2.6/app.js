'use strict'

let screenPrice;
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
  
    
    {
    // screenPrice = prompt('Какой еще сервис нужен? сервис 2');
    do screenPrice = +prompt('Сколько это будет стоить?', 12000)
    while (Number.isNaN(screenPrice))
    }
    screenPrice = Number(screenPrice)

}



function getAllServicePrices() 
  { 
 for (let i = 0; i < 2; i++) {
  // запускается не больше 2 шагов от 0 до 1.
 if (i == 0) 
  { 
    service1 = prompt('Какой сервис нужен? сервис 1');
    do servicePrice1 = +prompt('Сколько это будет стоить?');
    while (Number.isNaN(servicePrice1))
  }
 if (i == 1) 
  {
    service2 = prompt('Какой еще сервис нужен? сервис 2');
    do servicePrice2 = +prompt('Сколько это будет стоить?');
    while (Number.isNaN(servicePrice2))
  }
}
return  +servicePrice1 + +servicePrice2; //'сумма всех дополнительных услуг'
  }





function getTitle(_titleProject) {
  return _titleProject.charAt(0).toUpperCase() + _titleProject.slice(1).toLowerCase();

}

 


const getRollbackMessage = function(price) {
if (price > 50000) {

   return 'тогда сделаем скидку в 10%';
} else if (price == 50000) {

   return 'тогда сделаем скидку в 8%';
} else if (price > 20000 & price < 40000) {
  
   return 'тогда сделаем скидку в 5%';
} else if (price == 20000) {
  
   return 'тогда сделаем скидку в 3%';
} else if (price < 20000 & price > 0) {
  
   return 'скидка не предусмотрена';
} else if (price == 0) {
   return 'какие могут быть скидки?'; 
} else if (price < 0) {
  
  return 'что-то пошло не так'; 
}

}
getRollbackMessage();




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
console.log(getRollbackMessage(fullPrice));









//console.log()
// const screenPrice = 70000;



// let fullPrice = screenPrice + servicePrice1 + servicePrice2;

// let rollback = Math.round(+fullPrice * 0.10);


// servicePercentPrice = fullPrice - +rollback; // полная стоимость за вычетом скидки

// let servicePercentPrice = getFullPrice - Math.round(+getFullPrice*0,10); // полная стоимость за вычетом скидки
 
// if (fullPrice > 50000) {

//    getRollbackMessage('тогда сделаем скидку в 10%');
// } else if (fullPrice == 50000) {

//  getRollbackMessage('тогда сделаем скидку в 8%');
// } else if (fullPrice > 20000 & fullPrice < 40000) {
  
//    getRollbackMessage('тогда сделаем скидку в 5%');
// } else if (fullPrice == 20000) {
  
//    getRollbackMessage('тогда сделаем скидку в 3%');
// } else if (fullPrice < 20000 & fullPrice > 0) {
  
//   getRollbackMessage('скидка не предусмотрена');
// } else if (fullPrice == 0) {
//   getRollbackMessage('какие могут быть скидки?'); 
// } else if (fullPrice < 0) {
  
//   getRollbackMessage('что-то пошло не так'); 
// }

// function getRollbackMessage(discount) {
  
//   console.log('Скидка', discount);
// }
// //getRollbackMessage();






//  function getAllServicePrices() 
//   { 
   
//    return  +servicePrice1 + +servicePrice2; //'сумма всех дополнительных услуг'
//   }


// for(let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let num2 = 0

// for(let i = 10; i > num2; i--) {
//   console.log(i);
// }

// let a = 10
// let d = 1
// let r = a-d

// console.log(r);



//  function getAllServicePrices() 
//   { 
   
//    return  +servicePrice1 + +servicePrice2; //'сумма всех дополнительных услуг'
//   }


// let service1 = prompt('Какой сервис нужен?');
// let servicePrice1 = +prompt('Сколько это будет стоить?');
// let service2  = prompt('Какой еще сервис тебе нужен?');
// let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");



// function getServicePercentPrices() {


// if (!Number.isNaN(sum)) {
//   console.log('Это число.');
// } else {
//   console.log('Это не число.');
// }

//    }