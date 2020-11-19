//Enter page display opacity  
document.querySelector(".btn-entergame").addEventListener("click", function(){

    let enterScreen = document.querySelector(".entergame");

    enterScreen.style.opacity = "0.9";
    setTimeout(() =>{ enterScreen.style.opacity = "0.7";}, 200);
    setTimeout(() =>{ enterScreen.style.opacity = "0.6";}, 300);
    setTimeout(() =>{ enterScreen.style.opacity = "0.5";}, 400);
    setTimeout(() =>{ enterScreen.style.opacity = "0.4";}, 500);
    setTimeout(() =>{ enterScreen.style.opacity = "0.2";}, 600);
    setTimeout(() =>{ enterScreen.style.opacity = "0.1";}, 700);
    setTimeout(() =>{ enterScreen.style.opacity = "0";}, 800);
    setTimeout(() =>{ enterScreen.remove()}, 1000);

});  

//Function to get computer choice
function getComputerChoice(){

    let randomNumber = Math.random();

    if (randomNumber <=0.33) {
        computerChoice = "rock";
    } else if (randomNumber <=0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

};

//Function for Compare 
let playerChoice;
let computerChoice; 

function playMatch(){
 
    if (playerChoice === "rock" && computerChoice === "paper"){
        return result = "YOU LOSE";
    }else if (playerChoice === "rock" && computerChoice === "scissors"){
        result = "YOU WIN";
    }else if (playerChoice === "paper" && computerChoice === "scissors"){
        result = "YOU LOSE";
    }else if (playerChoice === "paper" && computerChoice === "rock"){
        result = "YOU WIN";
    }else if (playerChoice === "scissors" && computerChoice === "rock"){
        result = "YOU LOSE";
    }else if (playerChoice === "scissors" && computerChoice === "paper"){
        result = "YOU WIN";
    } else {
        result = "A TIE";
    }
}; 

//Function to change the handicon + animation
let playerChoiceLogo = document.querySelector(".playerhandicon");
let computerChoiceLogo = document.querySelector(".computerhandicon");

function ChangeHandIcon(){

     // animation for hand  
    playerChoiceLogo.style.animation = "bounce 1s 1.5 ease";
    computerChoiceLogo.style.animation = "bounce 1s 1.5 ease";

    //change hand icons with timeout
    setTimeout(() =>{ 
    
    playerChoiceLogo.setAttribute('src', "img/" + playerChoice + "-player.png");
    computerChoiceLogo.setAttribute('src', "img/" + computerChoice + "-computer.png");
    
    }, 1500);

};

//Function to display result
function displayResult(){
setTimeout(() =>{ 
    
    let displayResult = document.querySelector("h3");
    displayResult.innerHTML = result;

    }, 1500);
};

// Play again page
let matchScreen = document.querySelector(".match");
let playAgainScreen = document.querySelector(".playagain");

function playAgain(){

    setTimeout(() =>{ playAgainScreen.style.display = 'block'; }, 3500 );

    document.querySelector(".btn-playagain").addEventListener("click", function(){

        //playagain btn fade out slowly after click
        playAgainScreen.style.opacity = "0.7";
        setTimeout(() =>{ playAgainScreen.style.opacity = "0.5";}, 100);
        setTimeout(() =>{ playAgainScreen.style.opacity = "0.3";}, 200);
        setTimeout(() =>{ playAgainScreen.style.display = "none";}, 300);
        setTimeout(() =>{ location.reload();},400);

    });
    
};


//get player choice - ROCK
document.getElementById("playerRock").addEventListener("click", function(){

    playerChoice = "rock";

    getComputerChoice();
    ChangeHandIcon();
    playMatch();
    displayResult();
    playAgain();

});

//get player choice - PAPER
document.getElementById("playerPaper").addEventListener("click", function(){

    playerChoice = "paper";

    getComputerChoice();
    ChangeHandIcon();
    playMatch();
    displayResult();
    playAgain();

});

//get player choice - SCISSORS
document.getElementById("playerScrissors").addEventListener("click", function(){

    playerChoice = "scissors";

    getComputerChoice();
    ChangeHandIcon();
    playMatch();
    displayResult();
    playAgain();

});
