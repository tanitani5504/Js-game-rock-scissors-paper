let playerSelection;
let computerSelection;
let roundResult;
let computerGameScore = 0;
let playerGameScore = 0;


function computerPlay() {
    const gameOptions = ["rock", "paper", "scissors"];
    let computerSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return computerSelection
}

function playRound() {
    playerSelection = prompt(`Choose: "rock", "paper" or "scissors" to play.`);
    computerSelection = computerPlay();
    console.log(playerSelection)
    if (playerSelection === null) {
        return alert("You're exiting this game...")
    } else {
        playerSelection = playerSelection.toLowerCase().trim();
        playerSelection = playerSelection.replaceAll(" ", "");
        while ((playerSelection != "rock") && (playerSelection != "paper") && (playerSelection != "scissors")) {
            playerSelection = prompt(`${playerSelection} is not valid. Please pick: rock or paper or scissors`);
            playerSelection = playerSelection.toLowerCase().trim();
            playerSelection = playerSelection.replaceAll(" ", "");
        }
        if (playerSelection === "rock" && computerSelection === "paper") {
            result = "You Lose! Paper beats Rock. ";
            computerGameScore++;
        } else if (playerSelection === "rock" && computerSelection == "scissors") {
            result = "You Win! Rock beats Scissors. ";
            playerGameScore++;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            result = "You Win! Paper beats Rock. ";
            playerGameScore++;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            result = "You Lose! Scissors beats Paper. ";
            computerGameScore++;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            result = "You Lose! Rock beats Scissors. ";
            computerGameScore++;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            result = "You Win! Scissors beats Paper. ";
            playerGameScore++;
        } else if (playerSelection === computerSelection) {
            result = "Draw! Try again. ";
        } else {
            result = 'Oops, something went wrong, put correct answer: "rock", "paper" or "scissors"'
        }
        return alert(result)
    }

}

function game() {
    computerGameScore = 0;
    playerGameScore = 0;
    alert("Are you ready? Let's start the game!")
    for (let i = 0; i < 5; i++) {
        alert("Round " + (i + 1));
        playRound();
        if (playerSelection === null) {
            break;
        }
        console.log(computerGameScore);
        console.log(playerGameScore)
    }

    gameResult();
    newGame();

}
game();

function gameResult() {
    if (playerGameScore === computerGameScore) {
        alert("Computer score is " + computerGameScore + ", your score is " + playerGameScore + " . Game over. It's a draw!")
    }
    if (playerGameScore > computerGameScore) {
        alert("Computer score is " + computerGameScore + ", your score is " + playerGameScore + " . Game is over. You won!")
    }
    if (playerGameScore < computerGameScore) {
        alert("Computer score is " + computerGameScore + ", your score is " + playerGameScore + " . Game is over. You lost!")
    }
}

function newGame() {
    let newGameStartAgain = prompt("Would you like to start new game? Answer: yes or no")
    newGameStartAgain = newGameStartAgain.toLowerCase().trim();
    if (newGameStartAgain === "yes") {
        game()
    } else if (newGameStartAgain === null) {
        alert("Your input is empty! Please type: yes or no")
        newGame()
    } else if (newGameStartAgain === "no") {
        alert("Was a pleasure to play! If you would like to play again anytime - just refresh this page. Have a great day!")
    } else {
        alert("Your input is incorrect. Try again")
        newGame()
    }
}