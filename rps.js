let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.getElementById("action-message");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userShape_div = document.getElementById("shape");
const computerShape_div = document.getElementById("shape-computer");
const userChoice_image = document.getElementById("player-image");
const computerChoice_image = document.getElementById("computer-image");
const colorRed = "#dc3d19";
const colorYellow = "#f7ba54";
const colorWhite = "#fff2e2";

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomNumber];
  console.log("computer: " + computerChoice);
  return computerChoice;
}





function resultMessage() {
  setTimeout(() => {
    result_p.textContent = "ROCK...";
  }, 50);

  // Wait another 1 second, then change to "paper"
  setTimeout(() => {
    result_p.textContent = "PAPER..";
  }, 100);

  // Wait another 1 second, then change to "scissors"
  setTimeout(() => {
    result_p.textContent = "SCISSORS...";
  }, 150);
}

function userImageChange(userChoice, computerChoice) {
  if (userChoice === "r") {
    userChoice_image.classList.replace("player-image", "user-rock");
  }
  if (userChoice === "p") {
    userChoice_image.classList.replace("player-image", "user-paper");
  } 
  if (userChoice === "s") {
    userChoice_image.classList.replace("player-image", "user-scissors");
  }
  
}

function computerImageChange(computerChoice) {
  
  if (computerChoice === "r") {
    userChoice_image.classList.replace("computer-image", "computer-rock");
  }
  if (computerChoice === "p") {
    userChoice_image.classList.replace("computer-image", "computer-paper");
  } 
  if (computerChoice === "s") {
    computerChoice_image.classList.replace("computer-image", "computer-scissors");
  }
}



function reset() {
  userShape_div.style.background = colorYellow;
  computerShape_div.style.background = colorYellow;
  result_p.innerHTML = `Choose a fighter to play again.`;
  userChoice_image.classList.remove("user-rock", "user-paper", "user-scissors");
  userChoice_image.classList.add("player-image");
  computerChoice_image.classList.remove(
    "computer-rock",
    "computer-paper",
    "computer-scissors"
  );
  computerChoice_image.classList.add("computer-image");
  result_p.style.color = colorWhite;
}

function userWin(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  userShape_div.style.background = colorRed;
  result_p.innerHTML = `You win!`;
  computerImageChange(computerChoice);
  userImageChange(userChoice);
  setTimeout(function () {
    reset();
  }, 2000);
}

function userLost(userChoice, computerChoice) {
  computerImageChange(computerChoice);
  userImageChange(userChoice);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  computerShape_div.style.background = colorRed;
  result_p.innerHTML = `You lost...`;
  setTimeout(function () {
    reset();
  }, 2000);
}

function draw(userChoice, computerChoice) {
  computerImageChange(computerChoice);
  userImageChange(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTMl = computerScore;
  result_p.innerHTML = `It's a draw!`;
  setTimeout(function () {
    reset();
  }, 2000);
}

function gameResults(userChoice) {
  const computerChoice = getComputerChoice();
  
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      userWin(userChoice, computerChoice);
      console.log("user wins");
      console.log("user: " + userChoice);;

      break;
    case "rp":
    case "ps":
    case "sr":
      userLost(userChoice, computerChoice);
      console.log("user lost");
      console.log("user: " + userChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      console.log("draw");
      console.log("user: " + userChoice);
      break;
  }
}

function game(userChoice) {
  result_p.textContent = "rock";

  setTimeout(() => {
    result_p.textContent = "paper";
  }, 1000);

  setTimeout(() => {
    result_p.textContent = "scissors";
  }, 2000);

  setTimeout(() => {
    gameResults(userChoice);
  }, 3000);
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
