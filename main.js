function getComputerChoice() { 
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}




function playGround(playerSelection, computerSelection) {
if (playerSelection == "ROCK" && computerSelection == "PAPER"){
    return "Computer chose PAPER. Computer WON!";
}
else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
    return "Computer chose SCISSORS. You WON!";
}
else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
  return "Computer chose ROCK. You WON!";
}
else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
    return "Computer chose SCISSORS. Computer WON!";
}
else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
    return "Computer chose ROCK. You WON!";
} 
else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
    return "Computer chose PAPER. You WON!";
}
else if (playerSelection == "ROCK" && computerSelection == "ROCK"){
  return "You both chose ROCK. It's a TIE!";
}
else if (playerSelection == "PAPER" && computerSelection == "PAPER"){
  return "You both chose PAPER. It's a TIE!";
}
else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS"){
  return "You both chose SCISSORS. It's a TIE!";
}
else {
  return "ERROR! Please try again.";
}
}

function game() {
  for (let i = 1; i <= 5; i++) {
    let lowerCaseChoice = prompt("Choose between Rock, Papers, and Scissors!: ");
    let upperCaseChoice = lowerCaseChoice.toUpperCase();
    let computerSelection = getComputerChoice();
    let playerSelection = upperCaseChoice; 

    alert(playGround(playerSelection, computerSelection));
  }
}

game();





