import React from 'react';
import Card from './Card';

// my job is to show cards. I dont care about state.
function PokerHand(props){
    // a pokerHand is made up of... CARDS!
    let hand = props.cards.map((card, i)=>{
        return <Card card={card} key={i}/>
    });// a key is a way of creating a link list, where youre 
        // rerouting the memory pointer from looking to the next one,
        // adding something in between. This saves time, versus 
        // making a new array, which saves a bunch of computation
    return(
        <div className="col-sm-12">
            {hand}
        </div>
    )
}

export default PokerHand;