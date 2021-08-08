let player = {
    name:"Ani",
    chips:200,
}
let age = 21;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let cards = []
let sum = 0;

let messageEl  = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl  = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ":   $" + player.chips

function getRandomCard(){
    let randomCard = Math.floor( Math.random() * 13) + 1;
    if (randomCard === 1){
        randomCard = 11;
    }
    else if(randomCard >10){
        randomCard = 10;
    }
    return randomCard;
    
}

function startGame(){
    isAlive= true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum  = firstCard + secondCard;
    cards.push(firstCard, secondCard);
    
    renderGame();
}
function renderGame(){

    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent =  "Cards: " 
    for(i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    if(sum < 21){
        message ="Wanna draw a card?";
    }
    else if (sum === 21){
        message ="Hooray!! BlackJack";
        hasBlackjack = true;
    }
    else{
        message = "You've lost Gambler"
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    if (isAlive === true && hasBlackjack===false){
        let card = getRandomCard();
        sum+= card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
}