document.querySelector("#rock").addEventListener("click", gameRock)
document.querySelector("#paper").addEventListener("click", gamePaper)
document.querySelector("#scissors").addEventListener("click", gameScissors)
document.querySelector("#spock").addEventListener("click", gameSpock)
document.querySelector("#lizard").addEventListener("click", gameLizard)


function gameGame(){
    let random = Math.random()
    if (random < .2){
        return "rock"
    }else if(random < .4){
        return "paper"
    }else if(random < .6){
        return "lizard"
    }else if (random < .8){
        return "spock"
    }else{
        return "scissors"
    }
    
}

function gameRock(){
    let myChoice = "rock"
    botChoice = gameGame()
    if ((myChoice === "rock" && botChoice === "scissors") ||( myChoice === "rock" && botChoice === "lizard") || (myChoice === "paper" && botChoice === "rock") ||( myChoice === "paper" && botChoice==="spock") || (myChoice === "lizard" && botChoice === "paper" )||( myChoice === "lizard" && botChoice==="spock") || (myChoice === "spock" && botChoice === "scissors") || ( myChoice === "spock" && botChoice==="rock") || (myChoice === "scissors" && botChoice === "paper") || ( myChoice === "scissors" && botChoice==="lizard")) {
        document.querySelector("#placeToSee").innerText= `You had ${myChoice} and bot had ${botChoice} so you WON!!`
    }else if(myChoice === botChoice){
        document.querySelector("#placeToSee").innerText=`You had ${myChoice} and bot had ${botChoice} so its a TIE!!`
    }else{
        document.querySelector("#placeToSee").innerText= `You had ${myChoice} and bot had ${botChoice} so you LOST!!`
    }
}

function gamePaper(){
    let myChoice = "paper"
    botChoice = gameGame()
    if ((myChoice === "rock" && botChoice === "scissors") ||( myChoice === "rock" && botChoice === "lizard") || (myChoice === "paper" && botChoice === "rock") ||( myChoice === "paper" && botChoice==="spock") || (myChoice === "lizard" && botChoice === "paper" )||( myChoice === "lizard" && botChoice==="spock") || (myChoice === "spock" && botChoice === "scissors") || ( myChoice === "spock" && botChoice==="rock") || (myChoice === "scissors" && botChoice === "paper") || ( myChoice === "scissors" && botChoice==="lizard")) {
        document.querySelector("#placeToSee").innerText= `You had ${myChoice} and bot had ${botChoice} so you WON!!`
    }else if(myChoice === botChoice){
        document.querySelector("#placeToSee").innerText=`You had ${myChoice} and bot had ${botChoice} so its a TIE!!`
    }else{
        document.querySelector("#placeToSee").innerText= `You had ${myChoice} and bot had ${botChoice} so you LOST!!`
    }
}

function gameScissors(){
    let myChoice = "scissors"
    botChoice = gameGame()
    if ((myChoice === "rock" && botChoice === "scissors") ||( myChoice === "rock" && botChoice === "lizard") || (myChoice === "paper" && botChoice === "rock") ||( myChoice === "paper" && botChoice==="spock") || (myChoice === "lizard" && botChoice === "paper" )||( myChoice === "lizard" && botChoice==="spock") || (myChoice === "spock" && botChoice === "scissors") || ( myChoice === "spock" && botChoice==="rock") || (myChoice === "scissors" && botChoice === "paper") || ( myChoice === "scissors" && botChoice==="lizard")) {
        document.querySelector("#placeToSee").innerText= `You had ${myChoice} and bot had ${botChoice} so you WON!!`
    }else if(myChoice === botChoice){
        document.querySelector("#placeToSee").innerText=`You had ${myChoice} and bot had ${botChoice} so its a TIE!!`
    }else{
        document.querySelector("#placeToSee").innerText= `You had ${myChoice} and bot had ${botChoice} so you LOST!!`
    }
}

function gameSpock(){
    let myChoice = "spock"
    botChoice = gameGame()
    if ((myChoice === "rock" && botChoice === "scissors") ||( myChoice === "rock" && botChoice === "lizard") || (myChoice === "paper" && botChoice === "rock") ||( myChoice === "paper" && botChoice==="spock") || (myChoice === "lizard" && botChoice === "paper" )||( myChoice === "lizard" && botChoice==="spock") || (myChoice === "spock" && botChoice === "scissors") || ( myChoice === "spock" && botChoice==="rock") || (myChoice === "scissors" && botChoice === "paper") || ( myChoice === "scissors" && botChoice==="lizard")) {
        document.querySelector("#placeToSee").innerText= `You had ${myChoice} and bot had ${botChoice} so you WON!!`
    }else if(myChoice === botChoice){
        document.querySelector("#placeToSee").innerText=`You had ${myChoice} and bot had ${botChoice} so its a TIE!!`
    }else{
        document.querySelector("#placeToSee").innerText= `You had ${myChoice} and bot had ${botChoice} so you LOST!!`
    }
}

function gameLizard(){
    let myChoice = "lizard"
    botChoice = gameGame()
    if ((myChoice === "rock" && botChoice === "scissors") ||( myChoice === "rock" && botChoice === "lizard") || (myChoice === "paper" && botChoice === "rock") ||( myChoice === "paper" && botChoice==="spock") || (myChoice === "lizard" && botChoice === "paper" )||( myChoice === "lizard" && botChoice==="spock") || (myChoice === "spock" && botChoice === "scissors") || ( myChoice === "spock" && botChoice==="rock") || (myChoice === "scissors" && botChoice === "paper") || ( myChoice === "scissors" && botChoice==="lizard")) {
        document.querySelector("#placeToSee").innerText= `You had ${myChoice} and bot had ${botChoice} so you WON!!`
    }else if(myChoice === botChoice){
        document.querySelector("#placeToSee").innerText=`You had ${myChoice} and bot had ${botChoice} so its a TIE!!`
    }else{
        document.querySelector("#placeToSee").innerText= `You had ${myChoice} and bot had ${botChoice} so you LOST!!`
    }
}



function botVsYou(myChoice){
    botChoice = gameGame()
    //i won
    if ((myChoice === "rock" && botChoice === "scissors") ||( myChoice === "rock" && botChoice === "lizard") || (myChoice === "paper" && botChoice === "rock") ||( myChoice === "paper" && botChoice==="spock") || (myChoice === "lizard" && botChoice === "paper" )||( myChoice === "lizard" && botChoice==="spock") || (myChoice === "spock" && botChoice === "scissors") || ( myChoice === "spock" && botChoice==="rock") || (myChoice === "scissors" && botChoice === "paper") || ( myChoice === "scissors" && botChoice==="lizard")) {
        console.log(`You had ${myChoice} and bot had ${botChoice} so you WON!!`)
    }else if(myChoice === botChoice){
        console.log(`You had ${myChoice} and bot had ${botChoice} so its a TIE!!`)
    }else{
        console.log(`You had ${myChoice} and bot had ${botChoice} so you LOST!!`)
    }
    
}
