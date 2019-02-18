import React, { Component } from "react"; 
import Deck from '../utilityClasses/Deck';
import GameButtons from './GameButtons';
import PokerHand from './PokerHand';

class PokerTable extends Component{
    constructor(){
        super();
        this.cards = new Deck();
        this.cards.createDeck();
        this.cards.shuffleDeck();
        // console.log(this.cards);
        this.state = {
            playersHand: ['deck','deck'],
            dealersHand: ['deck','deck'],
            communityCards: ['deck','deck','deck','deck','deck',],
            wager: 0,
            bankRoll: 10000,
        }
        this.prepDeck = this.prepDeck.bind(this);
        this.playerBet = this.playerBet.bind(this);
        this.draw = this.draw.bind(this);
    }

    // This is a custom method. Not coming from "React"
    // we can't put this in our Deck class, because it's 
    // specific to our Hold Em
    prepDeck(){
        this.cards.createDeck()
        this.cards.shuffleDeck()
        this.cards.deck.shift(); //burn card
        const card1 = this.cards.deck.shift();
        const card2 = this.cards.deck.shift();
        const card3 = this.cards.deck.shift();
        const card4 = this.cards.deck.shift();
        // deck is now only 47, because we mutated this.deck
        // when we ran shift, so as to align with texas holdem rules
        // DONT DO THIS.STATE!!!!
        this.setState({
            playersHand: [card1,card3],
            dealersHand: [card2,card4],
        })
    }

    // this method is sent to gamebuttons and is used when the player places a bet
    playerBet(amount){
        const newBankRoll = this.state.bankRoll -amount
        const newWager = this.state.wager+amount
        // DONT DO SET.STATE
        this.setState({
            bankRoll:newBankRoll,
            wager: newWager,
        })
        this.draw();
    }
    draw(){
        // we have to use object.assign (or ...) to make a separate copy of state.
        // Otherwise, we have const communityNewHand = this.state.communityCards
        // which is messing with the state (totes really bad) by proxy
        // let communityNewHand = {...obj}
        let communityNewHand = Object.assign([], this.state.communityCards);
        if (communityNewHand[0] === 'deck'){
            communityNewHand = [
                this.cards.deck.shift(),
                this.cards.deck.shift(),
                this.cards.deck.shift(),
            ];
            console.log ()
        } else if (communityNewHand[4]){
            return;
        } else{
            communityNewHand.push(this.cards.deck.shift());
        }
        this.setState({
            communityCards:communityNewHand,
        })
    }

    render(){
        return(
            <div className="col-sm-12 the-table">
                <div className="col-sm-12 text-center">
                    current wager: {this.state.wager}
                    current bankroll: {this.state.bankRoll}
                </div>
                <PokerHand cards={this.state.dealersHand} />
                <PokerHand cards={this.state.communityCards}/>
                <PokerHand cards={this.state.playersHand} />
                <GameButtons dealFunction={this.prepDeck} betFunction={this.playerBet} />
            </div>
        )
    }
}

export default PokerTable;




