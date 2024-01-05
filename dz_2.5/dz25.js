let titleProject = prompt('Название вашего проекта?');
let screensValue = prompt('Вам нужен шаблонный проект, с уникальным дизайном или с анимацией?');
let responsive;
let adapt = prompt('Нужен ли адаптивный сайт? Напишите да или нет');
if (adapt == 'да') {
	responsive = true;
} else {
	responsive = false;
}
let screenPrice = 10000
let service1 = prompt('Какой сервис нужен?');
let price1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let price2 = prompt('Сколько будет стоить этот второй сервис?')
let servicePrice1 = +price1;
let servicePrice2 = +price2;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let per10 = fullPrice * 0.1;
let servicePercentPrice = (Math.round(fullPrice - per10));
//if (servicePercentPrice >= 50000) {
//  console.log('Сделаем скидку 10%');
//} else if (servicePercentPrice < 20000) {
//  console.log('Скидка не предусмотренна');
//} else if (servicePercentPrice > 20000 || servicePercentPrice < 40000) {
//  console.log('Сделаем скидку 5%');
//} else if (servicePercentPrice < 0) {
//  console.log('Что-то пошло не так');
//}
//let percentage = 10
//let fullPrice = 10000
//console.log(titleProject);
//console.log(screensValue);
//console.log(responsive);
//console.log(service1);
//console.log(servicePrice1);
//console.log(servicePrice2);
//console.log(fullPrice);
//console.log(servicePercentPrice);
let allServicePrices;
const getAllServicePrices = function() {
	allServicePrices = servicePrice1 + servicePrice2;
	return allServicePrices;
}

getAllServicePrices();
function getFullPrice() {
	fullPrice = screenPrice + allServicePrices;
	return fullPrice;
}
getFullPrice();

let firstChar;
let upperFirstChar;
let restOfString;
let result;
function getTitle() {
	firstChar = titleProject.charAt(0);
	upperFirstChar = firstChar.toUpperCase();
	restOfString = titleProject.slice(1);
	result = upperFirstChar + restOfString;
	return result;
	
}
getTitle();
console.log('Название проекта "', result, '"')

function getServicePercentPrices() {
	return servicePercentPrice;
}
getServicePercentPrices();
console.log('Стоимость с учётом скидки', servicePercentPrice);


function showTypeOf() {
	console.log('Типы экранов ', screensValue);
}
showTypeOf()

function getRollbackMessage() {
	if (servicePercentPrice >= 50000) {
		alert('Сделаем скидку 10%');
		} else if (servicePercentPrice < 20000) {
		  alert('Скидка не предусмотренна');
		} else if (servicePercentPrice > 20000 || servicePercentPrice < 40000) {
		  alert('Сделаем скидку 5%');
		} else if (servicePercentPrice < 0) {
		  alert('Что-то пошло не так');
		}
	}
getRollbackMessage();
