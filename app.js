const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(choice => choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerText = userChoice;

    generateComputerChoice();

    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = "rock";
    }
    if (randomNumber === 1) {
        computerChoice = "scissors";
    }
    if (randomNumber === 2) {
        computerChoice = "paper";
    }

    computerChoiceDisplay.innerText = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a Draw";
    }
    if (computerChoice === "rock" && userChoice === "paper" 
    || computerChoice === "paper" && userChoice === "scissors" 
    || computerChoice === "scissors" && userChoice === "rock") {
        result = "You Win!";
    }
    if (computerChoice === "rock" && userChoice === "scissors"
    || computerChoice === "paper" && userChoice === "rock" 
    || computerChoice === "scissors" && userChoice === "paper") {
        result = "You Lose!";
    }

    resultDisplay.innerText = result;
}