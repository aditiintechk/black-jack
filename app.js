let firstCard = 10;
let secondCard = 8;

// define an array to store cards - 
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

// 1. store message-el in a variable
const messageEle = document.getElementById("message-el");

// 2. store sum-el & card-el in a variable
// query selector - more dynamic - broader expression
const sumEle = document.querySelector("#sum-el");
const cardEle = document.getElementById("card-el");

function startGame() {
    renderGame();
}

function renderGame() {
    cardEle.textContent = "Cards: ";
    // For loop to render all cards 
    for(let i = 0; i < cards.length; i++) {
        cardEle.textContent += cards[i] + " ";
    }
    
    sumEle.textContent = "Sum: " + sum;

    if(sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if(sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEle.textContent = message;
}

function newCard() {
    let card = 3;
    sum += card;
    cards.push(card);
    renderGame();
}
