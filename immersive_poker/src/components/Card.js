import React from 'react';

// This is going to do nothing but show cards
function Card(props){
	const theCard = `/cards/${props.card}.png`;// props.card evaluates to deck
	return(
		<div className="col-sm-2 card">
			<img src={theCard} />
		</div>
	)
}

export default Card;