import React, { Component } from 'react';
import CardList from '../../components/CardList/CardList';
import Searchbox from '../../components/Searchbox/Searchbox';
import './MainPage.css';
import Header from '../../components/Header/Header'




class MainPage extends Component {
	
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
    

    filteredRobots = robots => {
        return robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		})
    }

	render() {
		if (this.props.isPending) {
			return <div className="tc" id="pended">...loading</div>;
		} else {
			return (
				<div className="tc">
					<Header />
					<Searchbox onChangeText={this.props.onChangeText} />
					<CardList robots={this.filteredRobots(this.props.robots)} />
				</div>
			);
		}
	}
}

export default MainPage;
