const options = document.querySelector("#image-container");
const results = document.querySelector("#results");

const reminder = document.createElement("p");
reminder.textContent = "Psst - Click the button";
reminder.setAttribute("id", "reminder");

let humanScore = 0;
let computerScore = 0;

options.addEventListener("click", evt => {
  if (evt.target.tagName === "BUTTON") {
    if (document.body.contains(reminder)) document.body.removeChild(reminder);
    
    playRound(capitalise(evt.target.id), getComputerChoice());

  } else if (evt.target.tagName === "IMG") {
    document.body.insertBefore(reminder, results);
  }

})

function capitalise(str) {
  return str.split(" ").reduce((result, word) => result + " " + word[0].toUpperCase() + word.slice(1).toLowerCase(), "").slice(1);
}

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

function playRound(humanChoice, computerChoice) {

  const humanImage = document.querySelector("#results .human-image");
  humanImage.src = `./images/${humanChoice.toLowerCase()}.jpg`;
  const computerImage = document.querySelector("#results .computer-image");
  computerImage.src = `./images/${computerChoice.toLowerCase()}.jpg`;
  const displayMessage = document.querySelector("#results .message");

  if (humanChoice === computerChoice) {
    displayMessage.textContent = `DRAW - You both chose ${humanChoice}!`;
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
      displayMessage.textContent = `WIN - ${humanChoice} beats ${computerChoice}!`
    } else {
      computerScore++;
      displayMessage.textContent = `LOSS - ${computerChoice} beats ${humanChoice}!`
    }
  }

  if (humanScore >=5 || computerScore >= 5) {
    // win sequence
  }
}
