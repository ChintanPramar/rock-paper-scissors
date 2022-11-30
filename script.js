function getComputerChoice() {
  let keywords = ["Rock", "Paper", "Scissor"];
  let randomNumber = Math.floor(Math.random() * 3);
  return keywords[randomNumber].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return `Game Tie! ${playerSelection} can not beat ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beat ${computerSelection}`;
  } else {
    return `You loss!  ${playerSelection} beat ${computerSelection} `;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt(
      "Which you one selected rock, paper and scissor?"
    );
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

// game();
