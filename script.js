let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "Paper";
    case 1:
      return "Rock";
    case 2:
      return "Scissors";
  }
}


function getHumanChoice() {
  let choice = prompt("Enter Rock, Paper or Scissors");
  return choice[0].toUpperCase() + choice.slice(1).toLowerCase();
}


function playRound(humanChoice = "rock", computerChoice = "rock") {
  if (humanChoice === computerChoice) {
    console.log(`You both chose ${humanChoice} so it's a draw!`);
  } else {
    let winner;

    switch (humanChoice) {
      case "Paper":
        winner = (computerChoice === "Rock") ? humanChoice : computerChoice;
        break;
      case "Rock":
        winner = (computerChoice === "Scissors") ? humanChoice : computerChoice;
        break;
      case "Scissors":
        winner = (computerChoice === "Paper") ? humanChoice : computerChoice;
        break;
    }

    if (winner === humanChoice) {
      console.log(`You win! ${humanChoice.slice(1)} beats ${computerChoice}!`)
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
      computerScore++;
    }
  }
}
