let computerChoose = Math.floor(Math.random() * 3);
let userGuess = prompt('Rock, Paper, Scissors?').toLowerCase(); // Mengonversi input pengguna ke huruf kecil

let comChoose;
if (computerChoose === 0) {
    comChoose = "rock";
} else if (computerChoose === 1) {
    comChoose = "paper";
} else if (computerChoose === 2) {
    comChoose = "scissors";
}

let result;
if (userGuess === comChoose) {
    result = "It's a tie!";
} else if (
    (userGuess === "rock" && comChoose === "scissors") ||
    (userGuess === "scissors" && comChoose === "paper") ||
    (userGuess === "paper" && comChoose === "rock")
) {
    result = "You Win!!";
} else {
    result = "You lose";
}

alert(`You chose ${userGuess}, computer chose ${comChoose}. ${result}`);
