let firstCard = 10;
let secondCard = 11;

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

// 1. store message-el in a variable
const messageEle = document.getElementById("message-el");

// 2. store sum-el & card-el in a variable

// more dynamic - broader expression
const sumEle = document.querySelector("#sum-el");
const cardEle = document.getElementById("card-el");

function startGame() {
    cardEle.textContent = "Cards: " + firstCard + " " + secondCard;
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
    console.log("Do you wanna draw a new card?")
}