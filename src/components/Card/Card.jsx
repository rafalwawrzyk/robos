import React from 'react';
import { shallow, mount, render } from 'enzyme';

const Card = ({ id, name, email }) => {

	

	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<div>
				<img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
