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


function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice = "rock", computerChoice = "rock") {
    if (humanChoice === computerChoice) {
      return `DRAW - You both chose ${humanChoice}!`;
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
        humanScore++;
        return `WIN - ${humanChoice} beats ${computerChoice}!`
      } else {
        computerScore++;
        return `LOSS - ${computerChoice} beats ${humanChoice}!`
      }
    }
  }

  for (i=0;i<5;i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }

  if (computerScore === humanScore) console.log(`It was a draw! ${humanScore} : ${computerScore}`)
  else if (computerScore >= humanScore) console.log(`The computer won! ${computerScore} : ${humanScore}`)
  else console.log(`You won! ${humanScore} : ${computerScore}`);
}
