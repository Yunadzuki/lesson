let firstName = 'Kirill'
let age = '39'
let adjective = [
	"великолепном",
	"потрясаюем",
	"самом лучшем",
	"красивейшем"
]
let city = 'Санкт-Петербург'
let hobby = [
	"читать книги",
	"петь",
	"рисовать",
	"мечтать о Пашиной доске для сёрфа"
]
let randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
let randomHobby = hobby[Math.floor(Math.random() * hobby.length)];
console.log('Привет, меня зовут', firstName, 'и мне', age, 'лет. Я живу в', randomAdjective, 'городе', city, '.', 'Я обажаю', randomHobby,)