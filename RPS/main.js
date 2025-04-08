function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock";
    else if (randomNumber === 1) return "paper";
    else if (randomNumber === 2) return "scissors";
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "Game is a Tie";
    }
    if (userChoice === "rock" && computerChoice === "paper") {
      return "Paper beats Rock, Computer wins!";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
      return "Rock beats Scissors, You win!";
    }
    if (userChoice === "paper" && computerChoice === "rock") {
      return "Paper beats Rock, You win!";
    } else if (userChoice === "paper" && computerChoice === "scissors") {
      return "Scissors beats Paper, Computer wins!";
    }
    if (userChoice === "scissors" && computerChoice === "paper") {
      return "Scissors beats paper, you win!";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
      return "Rock beats Scissors, Computer wins!";
    }
  }
  
  function playGame(userChoice) {
   document.getElementById("userChoiceDisplay").innerText = "You selected: " + userChoice
   
   const computerChoice = getComputerChoice();
   document.getElementById("computerChoiceDisplay").innerText = "Computer selected: " + computerChoice;
   
   const result = determineWinner(userChoice, computerChoice);
   document.getElementById("resultDisplay").innerText = result;
  }
  playGame("");
  
