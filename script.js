function getComputerChoice() {
  let move = Math.floor(Math.random() * 3);
  switch (move) {
    case 0:
      return "paper";
    case 1:
      return "rock";
    case 2:
      return "scissors";
  }
}
