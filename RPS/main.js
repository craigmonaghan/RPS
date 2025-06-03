function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

const outcomes = {
    rock:     { rock: "Game is a Tie", paper: "Paper beats Rock, Computer wins!", scissors: "Rock beats Scissors, You win!" },
    paper:    { rock: "Paper beats Rock, You win!", paper: "Game is a Tie", scissors: "Scissors beats Paper, Computer wins!" },
    scissors: { rock: "Rock beats Scissors, Computer wins!", paper: "Scissors beats Paper, you win!", scissors: "Game is a Tie" }
};

function determineWinner(userChoice, computerChoice) {
    return outcomes[userChoice][computerChoice];
}

function playGame(userChoice) {
    document.getElementById("userChoiceDisplay").innerText = "You selected: " + userChoice;

    const computerChoice = getComputerChoice();
    document.getElementById("computerChoiceDisplay").innerText = "Computer selected: " + computerChoice;

    const result = determineWinner(userChoice, computerChoice);
    document.getElementById("resultDisplay").innerText = result;
}
playGame("");

