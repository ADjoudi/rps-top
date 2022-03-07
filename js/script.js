let getComputerSelection = () =>{
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

let getPlayerSelection = () =>{
    let input;
    do{
        input = prompt("enter your choice").toLowerCase().trim();
       
    }while(!input.match(/^(rock|paper|scissors)$/));

    return input;
}

let playRound = (computerSelection, playerSelection) => {
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

let game = () =>{
    let playerScore = 0;
    let machineScore = 0;
    for(let counter = 1; counter <=5; counter++){
        let machineSelection = getComputerSelection();
        let playerSelection = getPlayerSelection();
        let result = playRound(machineSelection,playerSelection);
        switch (result){
            case 0:
                machineScore++;
                break;
            case 1:

                break;
            case 2:
                playerScore++;
                break;
            default:
                console.log("unexpected error");
        }
    }
    if (playerScore > machineScore){
        console.log("You are the winner!!!");
    }
    if (playerScore < machineScore){
        console.log("The Machines Win!!!");
    }
    if (playerScore == machineScore){
        console.log("It's A Draw!!!");
    }
}

//game();

