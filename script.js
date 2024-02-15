const choices = ["rock","paper","scissors"];
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const resultsSpan = document.createElement("span");
const resultsDiv = document.getElementById("resultsdiv");
resultsDiv.appendChild(resultsSpan);

const choiceResults = document.createElement("p");
const resultsOutput = document.createElement("p");



function getComputerChoice(){
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function getPlayerChoice(){
    playerSelection = prompt("What is your choice?").toLowerCase();
}

function playRound(computerSelection, playerSelection) {

    if (playerSelection === computerSelection){
        return "It's a tie"
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return "Player wins this round"
    } else {
        computerScore += 1;
        return "Computer wins this round"
    }
}

function game() {
    const computerSelection = getComputerChoice();
    choiceResults.innerHTML = "Player's choice: " + playerSelection + " " + "Computer's choice: " + computerSelection;
    resultsSpan.appendChild(choiceResults);
    resultsOutput.innerHTML = playRound(computerSelection, playerSelection);
    resultsSpan.appendChild(resultsOutput);
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    rounds += 1;
    document.getElementById("winner").innerHTML = "";

    if (playerScore === 5 || computerScore === 5){
        let winner = "";
         
        if (playerScore > computerScore) {
            winner = "Player";
            document.getElementById("winner").innerHTML = `The winner is ${winner}`;
        } else {
            winner = "Computer";
            document.getElementById("winner").innerHTML = `The winner is ${winner}`;
        }
        
        playerScore = 0;
        computerScore = 0;
            
    }

}

document.getElementById("rock").onclick = function(){
    playerSelection = "rock";    
    game();
}

document.getElementById("paper").onclick = function(){
    playerSelection = "paper";
    game();
}

document.getElementById("scissors").onclick = function(){
    playerSelection = "scissors";
    game();
}

document.getElementById("rounds").innerHTML = rounds;



/*
console.log("Player score: " + playerScore);
console.log("Computer score: " + computerScore);

function printScore(){
    if (computerScore > playerScore) {
        console.log("The computer wins with a score of " + computerScore);
    } else {
        console.log("You win with a score of " + playerScore);
    }
}

while ((computerScore + playerScore) < 5){
    console.log("Tie breaker round!");
    game();
}

console.log("Player score: " + playerScore);
console.log("Computer score: " + computerScore);
printScore();
*/
