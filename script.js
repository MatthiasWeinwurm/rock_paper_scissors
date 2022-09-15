function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3);
    if (selection == 0) {
        return "rock";
    } else if (selection == 1) {
        return "paper";
    } else if (selection == 2) {
        return "scissors";
    } else {
        return "error";
    }
}

function playRound(user, computer) {
    user = user.toLowerCase();
    if (user == "rock") {
        if (computer == "rock") {
            return "It is a tie!";
        } else if (computer == "paper") {
            return "You loose! Paper beats rock!";
        } else if (computer == "scissors") {
            return "You win! Rock beats scissors!";
        }
    } else if (user == "paper") {
        if (computer == "rock") {
            return "You win! Paper beats rock!";
        } else if (computer == "paper") {
            return "It is a tie!";
        } else if (computer == "scissors") {
            return "You loose! Scissors beats paper!";
        }
    } else if (user == "scissors") {
        if (computer == "rock") {
            return "You loose! Rock beats scissors!";
        } else if (computer == "paper") {
            return "You win! Scissors beats paper!";
        } else if (computer == "scissors") {
            return "It is a tie!";
        }
    }
    return "error";
}

function game() {
    let userWins = 0;
    let compWins = 0;
    for (let i = 0; i < 5; i++) {
        let user = prompt("Please enter your choice of rock, paper or scissors! ");
        let result = playRound(user, getComputerChoice());
        if (result.slice(0, 8) == "You win!") {
            userWins++;
        } else if (result.slice(0, 8) == "You loos") {
            compWins++;
        }
        console.log(result);
    }
    if (userWins > compWins) {
        return `You win! You won ${userWins} rounds, you lost ${compWins} rounds, and there were ${5-userWins-compWins} ties`;
    } else if (userWins < compWins) {
        return `You loose! You won ${userWins} rounds, you lost ${compWins} rounds, and there were ${5-userWins-compWins} ties`;
    } else if (userWins == compWins) {
        return `It is a tie! You won ${userWins} rounds, you lost ${compWins} rounds, and there were ${5-userWins-compWins} ties`;
    }
}

alert(game());