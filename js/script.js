let playerSelection = null;
let machineSelection = null;
let scoreCap = 0;

const getComputerSelection = () =>{
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

const setPlayerSelection = (choice) =>{
    playerSelection = choice;
}
const setMachineSelection = () =>{
    machineSelection = getComputerSelection();
}

const updateMachineScore = () =>{
    machineScore.textContent = (parseInt(machineScore.textContent) + 1).toString();
} 
const updatePlayerScore = () =>{
    playerScore.textContent = (parseInt(playerScore.textContent) + 1).toString();
} 
const updateWinnerMessage = (message) =>{
    winnerMessage.textContent = message;
}


const playRound = (computerSelection, playerSelection) => {
    // score = 0 machine won =1 tie =2 player won 
    let score = 1;
    switch (playerSelection){
        case "rock":
            if(computerSelection == "rock"){
                updateWinnerMessage("Draw");
            }
            if(computerSelection == "paper"){
                score--;
                updateWinnerMessage("You lost this round");
            }
            if(computerSelection == "scissors"){
                score++;
                updateWinnerMessage("You won this round");
            }
            break;

        case "paper":
            if(computerSelection == "rock"){
                score++;
                updateWinnerMessage("You won this round");
            }
            if(computerSelection == "paper"){
                updateWinnerMessage("Draw");
            }
            if(computerSelection == "scissors"){
                score--;
                updateWinnerMessage("You lost this round");
            }
            break;

        case "scissors":
            if(computerSelection == "rock"){
                score--;
                updateWinnerMessage("You lost this round");
            }
            if(computerSelection == "paper"){
                score++;
                updateWinnerMessage("You won this round");
            }
            if(computerSelection == "scissors"){
                updateWinnerMessage("Draw");
            }
            break;
        default:
            console.log("something went wrong");
    }
    
    return score;
};

const game = (choice) =>{
    
    switch(choice){
        case 'rock':
            setPlayerSelection('rock');
            break;
        case 'paper':
            setPlayerSelection('paper');
            break;
        case 'scissors':
            setPlayerSelection('scissors');
            break;
        default:
            console.log('click event player selection unexpected behaviour');
    }
    setMachineSelection();

    let result = playRound(machineSelection,playerSelection);
    // result = 0 machine won =1 tie =2 player won 
    switch (result){
        case 0:
            updateMachineScore();
            break;
        case 1:

            break;
        case 2:
            updatePlayerScore();
            break;
        default:
            console.log("unexpected error");
    }
    

    
}


let displayVerdict = () =>{
    
        if (playerScore.textContent > machineScore.textContent){
            playerScore.textContent = 0;
            machineScore.textContent = 0;
            updateWinnerMessage("You are the winner!!!");
            scoreCap = 0;
        }else if (playerScore.textContent < machineScore.textContent){
            playerScore.textContent = 0;
            machineScore.textContent = 0;
            updateWinnerMessage("The Machines Win!!!");
            scoreCap = 0;
        }else if (playerScore.textContent == machineScore.textContent){
            playerScore.textContent = 0;
            machineScore.textContent = 0;
            updateWinnerMessage("It's A Draw!!!");
            scoreCap = 0;
        }
    
}

////////////////////////////
//Site elements behaviour//
//////////////////////////

// images
const images = document.querySelectorAll('img');
images.forEach((image)=>{

    image.addEventListener('mouseover', (e)=>{
        e.target.classList.toggle('imageHover');
        e.target.style.cursor ="pointer";
    });

    image.addEventListener('mouseout', (e)=>{
        e.target.classList.toggle('imageHover');
    });
    
    image.addEventListener('click', (e)=>{
        game(e.target.alt);
        scoreCap++;
        if(scoreCap >= 5){
            displayVerdict();
        }
    });

});

// score
const machineScore = document.querySelector('.machineScore');
const playerScore = document.querySelector('.playerScore');

// endGame
const winnerMessage = document.querySelector('.verdict');
