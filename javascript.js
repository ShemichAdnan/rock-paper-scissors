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
        choice=prompt("Unesite izbor (rock,paper,scissors): ")
        if(choice !="rock" && choice !="paper" && choice !="scissors"){
            alert("[GRESKA] Unijeli ste pogresan izbor!")
            console.log("[GRESKA] Unijeli ste pogresan izbor!")
        }
    }while(choice !="rock" && choice !="paper" && choice !="scissors")
        return choice;
}
console.log(getHumanChoice())

