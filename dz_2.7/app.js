const gameBotFunction = function () {
	function randomGenerate(min, max) {
			return Math.floor(min + Math.random() * (max - min + 1));
	}

	let mysteryNumber;
	let tries;

	const isNumber = function (num) {
			return !isNaN(parseFloat(num)) && isFinite(num);
	};

	const playAgain = function () {
			return confirm('Хотите сыграть снова?');
	};

	const getResult = function () {
			let answer = prompt(`Угадайте число от 1 до 100. Осталось попыток: ${tries}`);

			if (answer === null) {
					alert('Конец игры');
					return;
			}

			while (!isNumber(answer) || answer.trim() === '') {
					alert('Вы ввели некорректное значение.');
					answer = prompt(`Угадайте число от 1 до 100. Осталось попыток: ${tries}`);
			}

			answer = Number(answer);

			if (mysteryNumber > answer) {
					alert('Число больше.');
			} else if (mysteryNumber < answer) {
					alert('Число меньше.');
			} else {
					const isUserWantNewGame = playAgain();

					if (isUserWantNewGame) {
							tries = 5;
							mysteryNumber = randomGenerate(1, 100);
					} else {
							alert('Конец игры');
							return;
					}
			}

			tries--;

			if (tries > 0) {
					getResult();
			} else {
					const again = confirm('Попыток больше нет, конец игры. Хотите ещё?');

					if (again) {
							tries = 5;
							mysteryNumber = randomGenerate(1, 100);
							getResult();
					} else {
							alert('Конец игры');
							return;
					}
			}
	};

	return function () {
			mysteryNumber = randomGenerate(1, 100);
			tries = 5;
			getResult();
	};
};

let launchGameBot = gameBotFunction();
launchGameBot();



