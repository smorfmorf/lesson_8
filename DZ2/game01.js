function playGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess;

    while (true) {
        guess = prompt("Угадай число от 1 до 100:");

        if (guess === null) {
            console.log("Игра окончена.");
            break;
        }

        guess = Number(guess);

        if (isNaN(guess)) {
            console.log("Введи число!");
            continue;
        }

        if (guess > secretNumber) {
            console.log("Меньше!");
        } else if (guess < secretNumber) {
            console.log("Больше!");
        } else {
            console.log("Правильно!");
            break;
        }
    }
}

playGame();
