import React from 'react';

const Card = ({ name, email, id}) => {
	return (
		<div className='tc bg-lightest-green dib br3 pa3 ma2 grow bw2' >
			<img alt='Friend' src={`https://robohash.org/90${id}?set=set5`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;