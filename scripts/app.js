alert("Play five rounds of rock, paper, scissors against the computer");
const choices = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * 3)];
};

const playRound = () => {
  playerSelection = prompt("Choose Rock, Paper or Scissors:")
    .toLowerCase()
    .trim();
  computerSelection = getComputerChoice();

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

  let i = 0;
  while (i < 5) {
    const result = playRound();
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
    } else if (result.includes("Invalid")) {
      i--;
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
