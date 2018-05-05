
 //Variable Setup
    var cpuchoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
    var wins = 0; // Set the variable that holds the wins, starting at 0
    var losses = 0; // Set the variable that holds the losses, starting at 0
    var guessesLeft = 9; // Set the number of guesses
    var guessesSoFar = []; // Array to push(send) user choices to
   
   // A Function will start when the user press a keyboard key
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); // Takes the  user guess
        var computerGuess = cpuchoices[Math.floor(Math.random()*cpuchoices.length)];  //Computer selects a Random Letter from Array
        guessesSoFar.push(userGuess); // Pushes(sends) user guess to array guessesSoFar
       
  // Test the User Choice VS CPU Choice & Shows the Result

if (userGuess == computerGuess) {
            wins++; // Adds 1 to var wins
            guessesLeft = 9; // Resets the guesses back to 9 so that the user can play again 
            guessesSoFar.length = 0; // This removes everything from the guessesSoFar array, so that the guesses from the previous round don't show
        }
        else if (guessesLeft == 0){
            losses++; //Adds 1 to var losses
            guessesLeft = 9; // Resets guesses to 9
            guessesSoFar.length = 0; // Resets array guessesSoFar so previous guesses are gone
        }
        else if (userGuess !== computerGuess){
            guessesLeft--; //decrementing the guesses left by 1
        }  



   // Displays the results on the Page      
   
var element = document.getElementById("01");
element.innerHTML = "Wins: " + wins;
var element = document.getElementById("02");
element.innerHTML = "Losses: " + losses;
var element = document.getElementById("03");
element.innerHTML = "Guesses Left: " + guessesLeft;
var element = document.getElementById("04");
element.innerHTML = "Your Guesses so far: " + guessesSoFar;
      
    }