function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3);
    if (selection == 0) {
        return "rock";
    } else if (selection == 1) {
        return "paper";
    } else if (selection == 2) {
        return "scissors";
    } else {
        return "error1";
    }
}

function result(user, computer, winner) {
    let message = '';
    if (winner == 'user') {
        userWins++;
        message = `You win the round, ${user} beats ${computer}!`;
        spanUserWins.textContent = userWins;
    } else if (winner == 'computer') {
        compWins++;
        message = `You loose the round, ${computer} beats ${user}!`;
        spanCompWins.textContent = compWins;
    } else if (winner == 'tie') {
        ties++;
        message = `This round was a tie, you both chose ${user}!`;
        spanTies.textContent = ties;
    }
    const pResult = document.querySelector('#lastRound');
    pResult.textContent = message;

    if (userWins + ties + compWins == 5) {
        let resultMessage = "";

        if (userWins > compWins) {
            resultMessage = `You win! You won ${userWins} rounds, you lost ${compWins} rounds, and there were ${5-userWins-compWins} ties`;
        } else if (userWins < compWins) {
            resultMessage = `You loose! You won ${userWins} rounds, you lost ${compWins} rounds, and there were ${5-userWins-compWins} ties`;
        } else if (userWins == compWins) {
            resultMessage = `It is a tie! You won ${userWins} rounds, you lost ${compWins} rounds, and there were ${5-userWins-compWins} ties`;
        }

        document.querySelector('#result').textContent = resultMessage;

        rock.removeEventListener('click', playRound);
        paper.removeEventListener('click', playRound);
        scissors.removeEventListener('click', playRound);
    }

}

function playRound(e) {
    let computer = getComputerChoice();
    user = e.target.id.toLowerCase();

    if (user == computer) {
        result(user, computer, 'tie');
    } else if ((user == "rock" && computer == "scissors") || (user == "paper" && computer == "rock") || (user == "scissors" && computer == "paper")) {
        result(user, computer, 'user');
    } else if ((user == "rock" && computer == "paper") || (user == "paper" && computer == "scissors") || (user == "scissors" && computer == "rock")) {
        result(user, computer, 'computer');
    } else {
        return "error2";
    }

}

let userWins = 0;
let compWins = 0;
let ties = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', playRound);

const paper = document.querySelector('#paper');
paper.addEventListener('click', playRound);

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', playRound);

const spanUserWins = document.querySelector('#userWinCount');
const spanTies = document.querySelector('#tieCount');
const spanCompWins = document.querySelector('#compWinCount');