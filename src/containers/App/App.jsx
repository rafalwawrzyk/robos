import React, { Component } from 'react';
import CardList from '../../components/CardList/CardList';
import Searchbox from '../../components/Searchbox/Searchbox';
import './App.css';
import Header from '../../components/Header/Header'
import { setSearchFieldAction,requestRobots } from './actions';
import { connect } from 'react-redux';


if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobotsReducer.searchField,
		robots:state.requestRobotsReducer.robots,
		isPending:state.requestRobotsReducer.isPending,
		error:state.requestRobotsReducer.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeText: (e) => {
			dispatch(setSearchFieldAction(e.target.value));
		},
		onRequestRobots: () => {
			return dispatch(requestRobots())
		}
	};
};

class App extends Component {
	
	componentDidMount(){
		this.props.onRequestRobots()
	}

	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then((res) => res.json())
	// 		.then((robots) => this.setState({ ...this.state, robots: robots }))
	// 		.catch((err) => console.log('problem'));
	// }

	// onChangeText(e) {
	// 	this.setState({ searchfield: e.target.value });
	// }

	render() {
		const filteredRobots = this.props.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		});
		if (this.props.isPending) {
			return <div className="tc">...loading</div>;
		} else {
			return (
				<div className="tc">
					<Header />
					<Searchbox onChangeText={this.props.onChangeText} />
					<CardList robots={filteredRobots} />
				</div>
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
