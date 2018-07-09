import {shallow} from 'enzyme';
import CardList from './CardList'
import React from 'react'



it('Check CardList component',() => {
    const mockRobots = [
        {
            id:1,
            name:'John',
            email:'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})




