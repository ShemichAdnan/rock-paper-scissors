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


let humanScore=0
let computerScore=0
const announce=document.querySelector("#announce");
const hScore=document.querySelector("#hScore");
const cScore=document.querySelector("#cScore");
const hChoice=document.querySelector("#hChoice");
const cChoice=document.querySelector("#cChoice");

function playRound(humanChoice, computerChoice) {
    console.log(`${humanChoice} vs ${computerChoice}`)
    hChoice.textContent=humanChoice.toUpperCase();
    cChoice.textContent=computerChoice.toUpperCase();
    if(humanChoice=="rock"){
        if(computerChoice=="rock") {
            announce.textContent="Tie! You both chose Rock";
            announce.style.color="gray";
            return
        }else if(computerChoice=="paper"){
            announce.textContent="You lose! Paper beats Rock";
            announce.style.color="red";
            computerScore++;
            cScore.textContent=computerScore;
            return 
        }else if(computerChoice=="scissors"){
            announce.textContent="You won! Rock beats Scissors";
            announce.style.color="green";
            humanScore++;
            hScore.textContent=humanScore;
            return 
        }
    }else if(humanChoice=="paper"){
        if(computerChoice=="rock") {
            announce.textContent="You won! Paper beats Rock";
            announce.style.color="green";
            humanScore++;
            hScore.textContent=humanScore;
            return
        }else if(computerChoice=="paper"){
            announce.textContent="Tie! You both chose Paper";
            announce.style.color="gray";
            return 
        }else if(computerChoice=="scissors"){
            announce.textContent="You lose! Scissors beats Paper";
            announce.style.color="red";
            computerScore++;
            cScore.textContent=computerScore;
            return 
        }
    }else if(humanChoice=="scissors"){
        if(computerChoice=="rock") {
            announce.textContent="You lose! Rock beats Scissors";
            announce.style.color="red";
            computerScore++;
            cScore.textContent=computerScore;
            return
        }else if(computerChoice=="paper"){
            announce.textContent="You won! Scissors beats Paper";
            announce.style.color="green";
            humanScore++;
            hScore.textContent=humanScore;
            return 
        }else if(computerChoice=="scissors"){
            announce.textContent="Tie! You both chose Scissors";
            announce.style.color="gray";
            return 
        }
    }
}
  

  
/*let playGame=()=>{
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`${humanScore} - ${computerScore}`)
    
    if(humanScore>computerScore){
        console.log(`You won the game! [${humanScore} - ${computerScore}]`)
    }else if(humanScore<computerScore){
        console.log(`Computer won the game! [${computerScore} - ${humanScore}]`)
    }else if(humanScore==computerScore){
        console.log(`Tie! [${computerScore} - ${humanScore}]`)
    }
    computerScore=0
    humanScore=0
    alert("Thanks for playing!")
}*/
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");
rock.addEventListener("click",()=>{
    playRound("rock",getComputerChoice())
})
paper.addEventListener("click",()=>{
    playRound("paper",getComputerChoice())
})
scissors.addEventListener("click",()=>{
    playRound("scissors",getComputerChoice())
})