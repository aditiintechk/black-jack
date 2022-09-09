let firstCard = getRandomCard();
let secondCard = getRandomCard();
 
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

const messageEle = document.getElementById("message-el");
const sumEle = document.querySelector("#sum-el");
const cardEle = document.getElementById("card-el");

function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1;
}

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
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}
