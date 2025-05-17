//#bolvdlhP
//
//  описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
//
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
let findA = deckOfCards.find(card => card.rank === 'A' && card.suit === 'spades');
console.log(findA);
//
let find6 = deckOfCards.filter(card => card.rank === '6');
console.log(find6);
//
let findRed = deckOfCards.filter(card => card.color === 'red');
console.log(findRed);
//
let findDiamonds = deckOfCards.filter(card => card.suit === 'diamonds');
console.log(findDiamonds);
//
function cardRating(card){
    if(card.rank === '6' || card.rank === '7' || card.rank === '8' || card.rank === '9' || card.rank === '10'){
        return Number(card.rank);
    } else if (card.rank === 'J'){
        return 11;
    } else if (card.rank === 'Q'){
        return 12;
    }
    else if (card.rank === 'K'){
        return 13;
    }
    else if (card.rank === 'A'){
        return 14;
    }
}

let findBigClubs = deckOfCards.filter(card => card.suit === 'clubs' && cardRating (card) >= 9);
console.log(findBigClubs);
