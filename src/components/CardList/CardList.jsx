import React, { Component } from 'react';
import Card from '../Card/Card';

const CardList = ({ robots }) => {
	const list = robots.map((robot) => {
		return <Card 
		id={robot.id} 
		name={robot.name} 
		email={robot.email} 
		key={robot.id} />;
	});
	return <div>{list}</div>;
};

export default CardList;
