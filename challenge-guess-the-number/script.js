let randomNumber = Math.floor(Math.random() * 100 + 1);
let numOfTriesLeft = 7;
// document.getElementById("btnNewGame").value = randomNumber;

function guessNumber() {
  //Collect input from the user

  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess <= 0 || guess > 100) {
    // finalOutput.innerHTML = "Please enter a number between 1 and 100";
    document.querySelector(".final-output").innerHTML =
      "Please enter a number between 1 and 100";
    document.querySelector(
      ".Tries-output"
    ).innerHTML = `Number of Tries: ${numOfTriesLeft}`;
    console.log("Guess button clicked!");
  } else {
    numOfTriesLeft--;
    // if (numOfTriesLeft >= 1) {
    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    if(numOfTriesLeft >= 1){
      if (guess > randomNumber) {
            document.querySelector(".final-output").innerHTML =
              "Number is too high, try again";
            document.querySelector(
              ".Tries-output"
            ).innerHTML = `Number of Tries: ${numOfTriesLeft}`;
          } 
          else if (guess < randomNumber) {
            document.querySelector(".final-output").innerHTML =
        "Number is too low, try again";
            // numOfTriesLeft--;
            document.querySelector(
              ".Tries-output"
            ).innerHTML = `Number of Tries: ${numOfTriesLeft}`;
          }
          else if (guess == randomNumber) {
            document.querySelector(".final-output").innerHTML =
        "Guess is correct. You win!";
            document.querySelector(".Tries-output").innerHTML = ``;
    }
    }else {
      if (guess == randomNumber) {
            document.querySelector(
              ".final-output"
            ).innerHTML = `Guess is correct. You win!`;
            document.querySelector(".Tries-output").innerHTML = ``;
          }
          else{
            document.querySelector(
              ".final-output"
            ).innerHTML = `You Lose, the number was ${randomNumber}`;
            document.querySelector(".Tries-output").innerHTML = ``;
          }
    }

    
    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
   
    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    
   
   
      
    
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  numOfTriesLeft = 7;
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  // document.querySelector(".inputs-Values").reset();
  //Reset tries, and triesTaken by the user
  document.querySelector(".Tries-output").innerHTML = "Number of Tries: 7";
  document.querySelector(".final-output").innerHTML =
    "Guess a number between 1 and 100";
  console.log("New game clicked!");
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.getElementById("btnNewGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);
