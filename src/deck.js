
const suits = ['Hearts' , 'Spades' , 'Diamonds' , 'Clubs' ];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

// const cards = [];

// suits.forEach(suit => {
//     values.forEach(value => cards.push(value + suit));
// })
// console.log(cards);

class Card {
    constructor(suit , value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }

    createDeck(suits, values) {
        for(let suit of suits) {
            for(let value of values) {
                this.deck.push(new Card(suit, value));
            }
        }
        return this.deck;
    }

    shuffle() {
        let counter = this.deck.length, temp, i;

        while(counter) {
            i = Math.floor(Math.random() * counter--);
            temp = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = temp;
        }
        return this.deck;
    }

    deal(x) {
        let hand = [x];
        while(hand.length < x) {
            hand.push(this.deck.pop());
        }
        return hand;
       }
}


let deck = new Deck();
deck.createDeck(suits, values);
deck.shuffle()

console.log(deck.shuffle());
console.log(deck.createDeck());
console.log(deck.deal(10));






//build a deck of cards by randomly pulling a card from the above cards. and putting it into the deck, not allowing the deck to have repeating cards, using .includes. make it so it checks if it has itself, and if it doesnt then put it into the deck. 
//values.foreach to loop over each array. 
//const deck = new Deck();
//deck.create();
//deck.shuffle();
//deck.draw(5);
//creat a draw function that allows to be able to give the function how many cards to draw.