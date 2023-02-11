const getComputerChoice = () => {
  return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
};

const playRound = (playerSelection, computerSelection) => {
  const choices = ["rock", "paper", "scissors"];
  playerSelection = playerSelection.toLowerCase().trim();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === null) {
    return;
  }

  if (choices.indexOf(playerSelection) === -1) {
    return "Invalid selection. Please choose Rock, Paper or Scissors.";
  }

  if (playerSelection === computerSelection) {
    return `Tie, both players selected ${playerSelection}`;
  }

  return playerSelection ===
    choices[(choices.indexOf(computerSelection) + 1) % 3]
    ? `You Win! ${playerSelection} beats ${computerSelection}`
    : `You Lose! ${computerSelection} beats ${playerSelection}`;
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  alert("Play five rounds of rock, paper, scissors against the computer");

  let i = 0;
  while (i < 5) {
    const playerSelection = prompt("Choose Rock, Paper or Scissors:");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(i + 1 + ". " + result);
    if (result.includes("Win")) {
      playerScore++;
      console.log(
        "Player score: " + playerScore + " Computer score: " + computerScore
      );
    } else if (result.includes("Lose")) {
      computerScore++;
      console.log(
        "Player score: " + playerScore + " Computer score: " + computerScore
      );
    }
    i++;
  }

  if (playerScore > computerScore) {
    console.log("Final result: You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Final result: You lose the game.");
  } else {
    console.log("Final result: It's a tie.");
  }
};

game();
