// Declaration of variabeles
let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";
let player = {
    name: "Aditi",
    chips: 145
}

// Defining Target elements
const messageEle = document.getElementById("message-el");
const sumEle = document.querySelector("#sum-el");
const cardEle = document.getElementById("card-el");
let playerEle = document.getElementById("player-el");

// Display player Info
playerEle.textContent = player.name + ": $" + player.chips;

// Function to get a random card
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if(randomCard === 1) return 11;
    else if(randomCard > 10) return 10;
    else return randomCard; 
} 

// function to start the game
function startGame() {
    isAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;

    renderGame();
}

// render the game and display the cards
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

// new card function feature
function newCard() {
    if(isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
