//#EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

const ranks = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let deckOfCards = [];

for (let suit of suits) {
    for (let rank of ranks) {
        if(suit === 'hearts' || suit === 'diamonds'){
        deckOfCards.push({suit, rank, color: 'red'})}
    else{
        deckOfCards.push({suit, rank, color: 'black'});
    }
}}

console.log(deckOfCards)
//

let cardsBySuites = deckOfCards.reduce((acc, card) => {
    if(acc[card.suit]) {
        acc[card.suit].push(card);
    } else {
        acc[card.suit] = [card];
    }
    return acc;
}, {})

console.log(cardsBySuites)
