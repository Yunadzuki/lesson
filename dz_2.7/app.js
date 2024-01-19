
const gameBotFunction = function () {
	function randomGenerate(min, max) {
		let rand = min - 0.5 + Math.random() * (max - min + 1)
		return Math.round(rand)
	}
	let mysteryNumber = randomGenerate(1, 100)
	let answer = ''
	let tries = 5;

	const isNumber = function(num) {
		return !isNaN(parseFloat(num)) && isFinite(num)
	}
	
	return function getResult() {
		answer = prompt('Угадайте число от 1 до 100')
		if(answer === null) {
			alert('Конец игры')
			return
		}
	
		while(!isNumber(answer) || answer.trim() === '') {
			alert('Вы ввели строку:')
			answer = prompt('Угадайте число от 1 до 100')
		}
		answer = Number(answer)

		if(mysteryNumber > answer) {
				alert('Число больше: ' + 'Осталось попыток: ' + tries)
			} else if(mysteryNumber < answer) {
				alert('Число меньше: ' + 'Осталось попыток: ' + tries)
			} else if(mysteryNumber === answer) {
				const isUserWantNewGame = confirm('Поздравляем, вы угадали! Хотите сыграть снова?')
			} if(isUserWantNewGame) {
					tries = 2
					mysteryNumber = randomGenerate(1, 100)
			} else {
					tries = 0
			}
		}

		
		if (tries > 0) {
				tries ==
				getResult();
		} else {
			const again = confirm('Попыток больше нет, конец игры. Хотите ещё?')
			if (again) {
				tries = 5
				getResult();
			} else {
				alert('Конец игры')
				return
			}
		}
}
let launchGameBot = gameBotFunction();
launchGameBot();



