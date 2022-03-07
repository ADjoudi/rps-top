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

const playRound = (computerSelection, playerSelection) => {
    // score = 0 machine won =1 tie =2 player won 
    let score = 1;
    switch (playerSelection){
        case "rock":
            if(computerSelection == "rock"){
                console.log("Draw");
            }
            if(computerSelection == "paper"){
                score--;
                console.log("You Lost");
            }
            if(computerSelection == "scissors"){
                score++;
                console.log("You Won");
            }
            break;

        case "paper":
            if(computerSelection == "rock"){
                score++;
                console.log("You Won");
            }
            if(computerSelection == "paper"){
                console.log("Draw");
            }
            if(computerSelection == "scissors"){
                score--;
                console.log("You Lost");
            }
            break;

        case "scissors":
            if(computerSelection == "rock"){
                score--;
                console.log("You Lost");
            }
            if(computerSelection == "paper"){
                score++;
                console.log("You Won");
            }
            if(computerSelection == "scissors"){
                console.log("Draw");
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

const updateWinnerMessage = (message) =>{
    winnerMessage.textContent = message;
}

let checkForWinner = (cap) =>{
    if(cap >= 5){
        images.forEach((image) =>{
            // remove clickability from choices
        })
        if (playerScore.textContent > machineScore.textContent){
            updateWinnerMessage("You are the winner!!!");
        }
        if (playerScore.textContent < machineScore.textContent){
            updateWinnerMessage("The Machines Win!!!");
        }
        if (playerScore.textContent == machineScore.textContent){
            updateWinnerMessage("It's A Draw!!!");
        }
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
        winnerMessage.textContent = `Round ${scoreCap}`;
        checkForWinner(scoreCap);
    });

});

// score
const machineScore = document.querySelector('.machineScore');
const playerScore = document.querySelector('.playerScore');

// endGame
const winnerMessage = document.querySelector('.verdict');
const restart = document.querySelector('.restart');

restart.addEventListener('click', ()=>{
    //restore clickability to choices
    machineScore.textContent = 0;
    playerScore.textContent = 0;

    scoreCap = 0;
    winnerMessage.textContent = `Round ${scoreCap}`;
});

restart.addEventListener('mouseover', (e)=>{
    e.target.style.cursor ="pointer";
});