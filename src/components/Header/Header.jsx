import React, { Component } from 'react';
import CounterButton from '../CounterButton/CounterButton';



class Header extends Component {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return false;
	// }

	render() {
		console.log('HEader');
		return (
			<div>
				<h1>RoboFriends</h1>
                <CounterButton color={'red'} />
			</div>
		);
	}
}

export default Header;
