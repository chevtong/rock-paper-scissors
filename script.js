
//add animation @keyframe, ease in 
// change the title and intro
//maybe put the result in a function? 
//play again button


let playerChoice;
let computerChoice; 




// Function to get computer choice
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

function ChangeHandIcon(){

    let playerChoiceLogo = document.querySelector(".playerhandicon");

    let computerChoiceLogo = document.querySelector(".computerhandicon");

    // animation for hand    
    playerChoiceLogo.style.animation = "bounce 1s 1.5 ease";
    computerChoiceLogo.style.animation = "bounce 1s 1.5 ease";

    setTimeout(() =>{ 
    
    playerChoiceLogo.setAttribute('src', "img/" + playerChoice + "-player.png");
 
    
    computerChoiceLogo.setAttribute('src', "img/" + computerChoice + "-computer.png");
    
    }, 1500);


  
    



};



//get player choice - ROCK
document.getElementById("playerRock").addEventListener("click", function(){

    playerChoice = "rock";
    getComputerChoice();
    ChangeHandIcon();
    playMatch();

    let displayResult = document.querySelector("h3");
    displayResult.innerHTML = result;



    




console.log("player :" + playerChoice);
console.log("computer :" + computerChoice);
console.log(result);
    
});

//get player choice - PAPER
document.getElementById("playerPaper").addEventListener("click", function(){

    playerChoice = "paper";
    getComputerChoice();
    ChangeHandIcon();
    playMatch();

    let displayResult = document.querySelector("h3");
    displayResult.innerHTML = result;





console.log("player :" + playerChoice);
console.log("computer :" + computerChoice);
console.log(result);
});

//get player choice - SCISSORS
document.getElementById("playerScrissors").addEventListener("click", function(){

    playerChoice = "scissors";
    getComputerChoice();
    ChangeHandIcon();
    playMatch();
    
    let displayResult = document.querySelector("h3");
    displayResult.innerHTML = result;

console.log("player :" + playerChoice);
console.log("computer :" + computerChoice);
console.log(result);
});
