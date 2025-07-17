function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "paper";
    case 1:
      return "rock";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Enter Rock, Paper or Scissors").toLowerCase();
}
