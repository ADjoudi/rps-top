let computerSelection = () =>{
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
console.log(computerSelection());
let playerSelection = () =>{
    let input;
    do{
        input = prompt("enter your choice").toLowerCase().trim();

    }while(!input.match(/^(rock|paper|scissors)$/));

    return input;
}
console.log(playerSelection());



