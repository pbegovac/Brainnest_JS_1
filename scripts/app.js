const getComputerChoice = () => {
  return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
};

const playRound = (playerSelection, computerSelection) => {
  const choices = ["rock", "paper", "scissors"];
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (choices.indexOf(playerSelection) === -1) {
    return "Invalid selection. Please choose Rock, Paper or Scissors.";
  }

  if (playerSelection === computerSelection) {
    return `Tie, both players selected ${playerSelection}`;
  }

  return playerSelection === choices[choices.indexOf(computerSelection) + 1]
    ? `You Win! ${playerSelection} beats ${computerSelection}`
    : `You Lose! ${computerSelection} beats ${playerSelection}`;
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  let i = 0;
  while (i < 5) {
    const playerSelection = prompt("Choose Rock, Paper or Scissors:");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
    i++;
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game.");
  } else {
    console.log("It's a tie.");
  }
};

game();
