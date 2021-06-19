//Storing the DOM Elements
const button = document.getElementById("button");
const status = document.getElementById("status");
const player1Dice = document.getElementById("player1dice");
const player2Dice = document.getElementById("player2dice");

//Function to check the winning status
function checkWin(randomNumber1, randomNumber2) {
  status.style.display = "none";
  //Check win status
  if (randomNumber1 > randomNumber2) {
    //Change win status
    setTimeout(() => {
      status.innerHTML = "Player 1 Won!!";
      status.style.display = "block";
    }, 300);
  } else if (randomNumber2 > randomNumber1) {
    //Change win status
    setTimeout(() => {
      status.innerHTML = "Player 2 Won!!";
      status.style.display = "block";
    }, 300);
  } else {
    //Change win status
    setTimeout(() => {
      status.innerHTML = "It's a Draw!!";
      status.style.display = "block";
    }, 300);
  }
}

// Function to roll dice when button is clicked
function rollDice() {
  //Generate a random number between 1 to 6 so that the dice for player1 can be changed
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  //Generate a random number between 1 to 6 so that the dice for player2 can be changed
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);
  player1Dice.style.display = "none";
  //Change the dice for player1
  setTimeout(() => {
    player1Dice.setAttribute("src", `images/dice${randomNumber1}.png`);
    player1Dice.style.display = "block";
  }, 300);
  player2Dice.style.display = "none";
  //Change the dice for player2
  setTimeout(() => {
    player2Dice.setAttribute("src", `images/dice${randomNumber2}.png`);
    player2Dice.style.display = "block";
  }, 300);
  //Check the winning status
  checkWin(randomNumber1, randomNumber2);
}

// Adding event listener to the button
button.addEventListener("click", rollDice);
