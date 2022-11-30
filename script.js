function getComputerChoice() {
  let keywords = ["Rock", "Paper", "Scissor"];
  let randomNumber = Math.floor(Math.random() * 3);
  return keywords[randomNumber].toLowerCase();
}

function checkRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    displayInfo(playerScore, computerScore, "It's Tie");
    displayTagLine(playerSelection, computerSelection, "Tie with");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    playerScore++;
    displayInfo(playerScore, computerScore, "You Won");
    displayTagLine(playerSelection, computerSelection, "beat");
  } else {
    computerScore++;
    displayInfo(playerScore, computerScore, "You Loss");
    displayTagLine(playerSelection, computerSelection, "beaten by");
  }
}

function displayInfo(playerScore, computerScore, winLoss) {
  pScore.innerText = `Player Score: ${playerScore}`;
  cScore.innerText = `Computer Score: ${computerScore}`;
  winLossInfo.innerText = `${winLoss}!`;
}

function displayEmoji(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      playerDisplay.innerHTML = "&#129704;";
      break;
    case "paper":
      playerDisplay.innerHTML = "&#128195;";
      break;
    case "scissor":
      playerDisplay.innerHTML = "&#9988;";
      break;

    default:
      playerDisplay.innerHTML = "&#x2754;";
      break;
  }

  switch (computerSelection) {
    case "rock":
      computerDisplay.innerHTML = "&#129704;";
      break;

    case "paper":
      computerDisplay.innerHTML = "&#128195;";
      break;

    case "scissor":
      computerDisplay.innerHTML = "&#9988;";
      break;

    default:
      computerDisplay.innerHTML = "&#x2754;";
      break;
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function displayTagLine(playerSelection, computerSelection, twice) {
  tagLine.innerText = `${playerSelection} ${twice} ${computerSelection}`;
}

function Play(playerSelection) {
  if (isGameOver()) {
    playerScore = 0;
    computerScore = 0;
    tagLine.innerText = "Game Over! Play Again";
    winLossInfo.innerText = "Choose your weapon";
    return;
  }

  computerSelection = getComputerChoice();
  checkRound(playerSelection, computerSelection);
  displayEmoji(playerSelection, computerSelection);
}

let playerScore = 0;
let computerScore = 0;

const pScore = document.getElementById("p-score");
const cScore = document.getElementById("c-score");
const winLossInfo = document.getElementById("win-loss-info");

const playerDisplay = document.getElementById("chosen-emoji-player");
const computerDisplay = document.getElementById("chosen-emoji-com");
const tagLine = document.getElementById("tagLine");

const btnRock = document.getElementById("button-rock");
const btnPaper = document.getElementById("button-paper");
const btnScissor = document.getElementById("button-scissor");

btnRock.addEventListener("click", () => {
  Play("rock");
});
btnPaper.addEventListener("click", () => {
  Play("paper");
});
btnScissor.addEventListener("click", () => {
  Play("scissor");
});
