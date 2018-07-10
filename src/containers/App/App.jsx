import React, { Component } from 'react';
import './App.css';
import { setSearchFieldAction,requestRobots } from './actions';
import { connect } from 'react-redux';
import MainPage from '../../components/MainPage/MainPage';


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
		return(
			<MainPage 
			onRequestRobots = {this.props.onRequestRobots}
			onChangeText = {this.props.onChangeText}
			robots={this.props.robots}
			searchField={this.props.searchField}
			/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
