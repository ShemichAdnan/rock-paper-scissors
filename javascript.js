let getComputerChoice=()=>{
    let choice=Math.floor(Math.random() * 3)
    if(choice==0){
        return "rock"
    }else if(choice==1){
        return "paper"
    }else if(choice==2){
        return "scissors"
    }
}
let getHumanChoice=()=>{
    let choice
    do{
        choice=prompt("Write your choice (rock,paper,scissors): ")
        if(choice!=null){
            choice=choice.toLowerCase();
            if(choice !="rock" && choice !="paper" && choice !="scissors"){
                alert("[GRESKA] Unijeli ste pogresan izbor!")
                console.log("[GRESKA] Unijeli ste pogresan izbor!")
            }
        }
    }while(choice !="rock" && choice !="paper" && choice !="scissors")
        return choice;
}

let humanScore=0
let computerScore=0

function playRound(humanChoice, computerChoice) {
    console.log(`${humanChoice} vs ${computerChoice}`)
    if(humanChoice=="rock"){
        if(computerChoice=="rock") {
            console.log("Draw! You both chose Rock")
            return
        }else if(computerChoice=="paper"){
            console.log("You lose! Paper beats Rock")
            computerScore++;
            return 
        }else if(computerChoice=="scissors"){
            console.log("You won! Rock beats Scissors")
            humanScore++;
            return 
        }
    }else if(humanChoice=="paper"){
        if(computerChoice=="rock") {
            console.log("You won! Paper beats Rock")
            humanScore++;
            return
        }else if(computerChoice=="paper"){
            console.log("Draw! You both chose Paper")
            return 
        }else if(computerChoice=="scissors"){
            console.log("You lose! Scissors beats Paper")
            computerScore++;
            return 
        }
    }else if(humanChoice=="scissors"){
        if(computerChoice=="rock") {
            console.log("You lose! Rock beats Scissors")
            computerScore++;
            return
        }else if(computerChoice=="paper"){
            console.log("You won! Scissors beats Paper")
            humanScore++;
            return 
        }else if(computerChoice=="scissors"){
            console.log("Draw! You both chose Scissors")
            return 
        }
    }
}
  

  
let playGame=()=>{
    for(let round=1;round<=5;round++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round - ${round}`)
        playRound(humanSelection, computerSelection);
        console.log(`${humanScore} - ${computerScore}`)
    }
    if(humanScore>computerScore){
        console.log(`Human won the game! [${humanScore} - ${computerScore}]`)
    }else if(humanScore<computerScore){
        console.log(`Computer won the game! [${computerScore} - ${humanScore}]`)
    }
    alert("Thanks for playing!")
}